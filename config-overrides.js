const { override, addWebpackAlias, disableEsLint } = require('customize-cra');
const path = require('path');

module.exports = override(
    disableEsLint(),
    addWebpackAlias({
        react: path.resolve('./node_modules/react'),
        '@components': path.resolve('./src/components'),
        '@assets': path.resolve('./src/assets'),
        '@locales': path.resolve('./src/pages'),
        '@pages': path.resolve('./src/pages')
    })
);
