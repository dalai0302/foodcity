import i18n from "i18next";
import translation_mn from "./mn/translation_mn.json";
import translation_en from "./en/translation_en.json";
import { initReactI18next } from "react-i18next";

export const resources = {
  mn: {
    global: translation_mn,
  },
  en: {
    global: translation_en,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "mn",
  fallbackLng: "mn",
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
