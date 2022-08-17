import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: {
      "title": "Welcome to react using react-i18next and typescript 4.1",
      "Home": "Home",
      "Product": "Product",
      "List": "List",
      "Create": "Create",
      "Edit": "Edit",
      "View": "View",
      "Configuration": "Configuration",
      "description": {
        "part1": "This is an example without namespaces.",
        "part2": "In order to infer the appropriate type for t function, you should use type augmentation to override the Resources type.",
        "part3": "Check out the @types/react-i18next to see an example."
      }
    },
  },
  zh: {
    translation: {
      "title": '标题',
      "Home": "首页",
      "Product": "产品",
      "List": "列表",
      "Create": "创建",
      "Edit": "编辑",
      "View": "查看",
      "Configuration": "配置",
    }
  },
} as const;

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});