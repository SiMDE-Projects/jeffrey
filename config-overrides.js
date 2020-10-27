const { alias } = require("react-app-rewire-alias");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@assets": "src/assets",
    "@locales": "src/locales",
    "@pages": "src/pages",
    "@context": "src/context"
  })(config);
  return rewireReactHotLoader(config, env);
};
