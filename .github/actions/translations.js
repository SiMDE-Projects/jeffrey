const Process = require('child_process');
const fs = require('fs');

const DEVELOPMENT_MODE = process.argv.includes('-d') ||  process.argv.includes('--dev');
const FIX_MODE = process.argv.includes('-f') ||  process.argv.includes('--fix');
const GITHUB_MODE = process.argv.includes('-g') ||  process.argv.includes('--github');
const READ_LOCALES = ['fr']; // Could be set via variable
const LOCALES = {};

const get_locale_path = (locale, read=true) => {
	return `${read ? '../../' : './'}src/locales/${locale}/translation.json`;
};

for(let locale of READ_LOCALES) {
	// Hard coded path
	LOCALES[locale] = require(get_locale_path(locale));
}

const get_lines_with_keys = () => {
	let regexes = ["t\\([\\\"']([a-zA-Z_0-9.]+)['\\\"](\\,|\\))"];
	let commands = regexes.map(regex => {
		return `grep -n --recursive --only-matching --extended-regexp --word-regexp "${regex}" --include "*.js" --include "*.jsx" src`;
	});

	return new Promise(resolve => {
		Process.exec(commands.join('&&'), (err, stdout, stderr) => {
			if(err) {
				console.error('GREP FATAL:');
				console.error(err);
				process.exit(1);
			}

			let lines = stdout.split('\n');

			let last_line = 0;
			let last_file = '';
			let keys = lines.map(line => {
				if(!line.trim()) {
					return null;
				}

				let trans = /i18nKey="(?<key>[^\"\(\),]+)"/g;
				let useTranslation = /t\((\"|\')(?<key>[^\"\(\),]+)(\"|\')(\)|\,)/g;

				let file = null;
				let line_nb = null;
				let match = null;
				// Handle multiple matches in one line
				if(!/^src\//.test(line)) {
					file = last_file;
					line_nb = last_line;
					match = line;
				} else {
					[file, line_nb, match] = line.split(':');
					last_file = file;
					last_line = line_nb;
				}

				let trans_exec = trans.exec(match);
				let use_exec = useTranslation.exec(match);
				let matched = trans_exec || use_exec;

				if(!matched) {
					// Probably weird key, maybe ${} or ++
					console.log('NO MATCH FOR', match);
					return null;
				}

				let { key } = matched.groups;
				return {
					key,
					file,
					line: line_nb
				};
			});

			return resolve(keys.filter(k => k).sort((a, b) => {
				return a.key < b.key ? -1 : (a.key > b.key ? 1 : 0);
			}));
		});
	});
};

const find_key = ({ key }, locale) => {
	let tree = key.split('.');
	let current = locale;
	for(let v of tree) {
		if(!current[v]) {
			return false;
		}

		current = current[v];
	}

	return true;
}

const github_check_run = (params) => {
	const fishingrod = require('fishingrod');

	let { GITHUB_TOKEN, GITHUB_REPOSITORY, GITHUB_EVENT_PATH } = process.env;
	let event = JSON.parse(fs.readFileSync(GITHUB_EVENT_PATH));
	let SHA = event.pull_request.head.sha;

	let data = {
		...params,
		name: 'i18n-weez-check',
		head_sha: SHA,
		completed_at: (new Date()).toISOString(),
	};

	console.log('SETTING GITHUB STATUS', data, GITHUB_REPOSITORY, SHA);
	return fishingrod.fish({
		host: 'api.github.com',
		path: `/repos/${GITHUB_REPOSITORY}/check-runs`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${GITHUB_TOKEN}`,
			'User-Agent': 'Jeffrey',
			'Accept': 'application/vnd.github.antiope-preview+json'
		},
		data
	}).then(({ response, status }) => {
		if(status !== 201) {
			console.error('[GitHub] Could not set GitHub status:', status, response);
		}
	}).catch(e => {
		console.error('[GitHub] Could not set GitHub status:', e);
	});
};

const parse_annotations = (locales={}) => {
	let annotations = [];

	let unique_keys = [];
	for(let locale in locales) {
		locales[locale].forEach(key => {
			let exists = unique_keys.find(k => k.key === key.key);
			if(exists) {
				exists.locales.add(locale);
				return;
			}

			unique_keys.push({
				...key,
				locales: new Set([locale])
			});
		});
	}

	return unique_keys.map(({ key, line, file, locales }) => {
		return {
			path: file,
			start_line: +line,
			end_line: +line,
			annotation_level: 'warning',
			message: `Key \`${key}\` needs translation in ${Array.from(locales).join(', ')}`,
			title: 'Missing key'
		}
	});
};

const find_missing_keys = keys => {
	const missing = {};
	for(let k of keys) {
		for(let locale in LOCALES) {
			if(!find_key(k, LOCALES[locale])) {
				missing[locale] = missing[locale] || [];
				missing[locale].push(k);
			}
		}
	}

	return missing;
};

const format_message = missing_locales => {
	let locales = [];
	for(let locale in missing_locales) {
		let messages = [];

		for(let { key, file, line } of missing_locales[locale]) {
			messages.push(`\t\t${key}\n\t\t\t\u001b[38;5;241mFound on line ${line} in ${file}\u001b[0m`);
		}

		locales.push(`\n👀\t${locale} (${missing_locales[locale].length})\n${messages.join('\n')}`);
	}

	return locales.join('');
};

const fix_mode = missing_locales => {
	const MISSING_TRAD = '<INSERT TRANSLATION HERE>';

	let promises = [];
	for(let locale in missing_locales) {
		if(!LOCALES[locale]) {
			console.log(`FIX: ${locale} not found`);
			continue;
		}

		let fixed_locale = {...LOCALES[locale]};

		for(let { key } of missing_locales[locale]) {
			let tree = key.split('.');
			let current = fixed_locale;
			tree.forEach((k, i) => {
				if(!current[k]) {
					if(!(current instanceof Object)) {
						console.error(`🌶  Error adding key ${key} to ${locale} because parent object "${tree.slice(0, i).join('.')}" is a string`);
						return;
					}
					current[k] = tree[i + 1] ? {} : MISSING_TRAD;
				}

				current = current[k];
			});
		}

		let p = new Promise((resolve, reject) => {
			fs.writeFile(get_locale_path(locale, false), JSON.stringify(fixed_locale, null, 2), (err) => {
				if(err) {
					console.error(`⚠️  Could not save ${locale} fix because of:`);
					console.error(err);
					return reject(err);
				}

				console.log(`🚧  Fixed locale ${locale}, please make sure to replace missing translations`);
				return resolve();
			});
		});
		promises.push(p);
	}

	return Promise.all(promises);
};

get_lines_with_keys().then(keys => {
	let missing = find_missing_keys(keys);

	if(Object.keys(missing).length) {
		console.error(`❌ Failure: You have keys missing in locales: ${Object.keys(missing).join(', ')}:${format_message(missing)}\n\n`);

		let promise = Promise.resolve();
		if(FIX_MODE) {
			promise = fix_mode(missing);
		}

		if(DEVELOPMENT_MODE) {
			return promise.then(() => process.exit(1));
		}

		return promise.then(() => {
			if(!GITHUB_MODE) {
				return process.exit(0);
			}

			let annotations = parse_annotations(missing).slice(0, 50);

			return github_check_run({
				conclusion: 'failure',
				output: {
					title: 'Translations checks',
					summary: `Fais pas le malin, il te reste ${annotations.length} clefs à traduire!`,
					annotations
				}
			});
		}).then(() => process.exit(1));
	}

	if(DEVELOPMENT_MODE) {
		console.log('✅ Success!');
		return process.exit(0);
	}

	if(!GITHUB_MODE) {
		return process.exit(0);
	}

	return github_check_run({
		conclusion: 'success',
		output: {
			title: 'Translations checks',
			summary: 'I18n OK'
		},
	}).then(() => process.exit(0));
}).catch(e => {
	console.error('Fatal', e);
	process.exit(1);
});
