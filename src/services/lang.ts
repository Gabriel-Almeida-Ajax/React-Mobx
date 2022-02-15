
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            'en': {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next",
                    "en": "English",
                    "Segundos: ": "Seconds: ",
                }
            },
            'pt': {
                translation: {
                    "Welcome to React": "Bem-vindo ao React e react-i18next",
                    "pt": "Português",
                    "Segundos: ": "Segundos: ",
                }
            },
            'es': {
                translation: {
                    "Welcome to React": "Bienvenido a React y react-i18next",
                    "es": "Español",
                    "Segundos: ": "Segundos: ",
                }
            },
            'fr': {
                translation: {
                    "Welcome to React": "Bienvenue à React et react-i18next",
                    "fr": "Français",
                    "Segundos: ": "Secondes: ",
                }
            },
            'de': {
                translation: {
                    "Welcome to React": "Willkommen bei React und react-i18next",
                    "de": "Deutsch",
                    "Segundos: ": "Sekunden: ",
                }
            },
        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });
