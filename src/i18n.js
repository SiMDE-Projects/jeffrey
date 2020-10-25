import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationFR from "./locales/fr/translation.json";

// the translations
const resources = {
  fr: {
    translation: translationFR
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
