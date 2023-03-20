import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languageTranslation } from '../../../../public/location/language/language';

const resources = languageTranslation;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    debug: true,
    lng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;