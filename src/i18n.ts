import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';
import { initReactI18next } from 'react-i18next';

// Type-safe access to environment variables
const projectId = import.meta.env.VITE_LOCIZE_PROJECTID;
const apiKey = import.meta.env.VITE_LOCIZE_APIKEY;

// if (!projectId) {
//   console.error('Missing Locize projectId in environment variables');
// }
// if (!apiKey && import.meta.env.DEV) {
//   console.warn('Missing Locize apiKey (OK in production, required in development)');
// }

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: import.meta.env.DEV,
    debug:true,
    fallbackLng: 'en',
    returnObjects: true,
    
    backend: {
      projectId,
      apiKey,  
      version: 'latest',
    },
    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: true,
    }
  });

export default i18n;
