const path = require("path");

module.exports = {
  "extends": [
    "plugin:i18n-json/recommended"
  ],
  "rules": {
    "i18n-json/valid-message-syntax": [
      "error",
      {
        "syntax": "icu"
      }
    ],
    "i18n-json/valid-json": "error",
    "i18n-json/sorted-keys": [
      "error",
      {
        "order": "asc",
        "indentSpaces": 2
      }
    ],
    "i18n-json/identical-keys": "off"
  }
};
