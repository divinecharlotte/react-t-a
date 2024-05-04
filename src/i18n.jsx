import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        "All Tasks": "All Tasks",
       " To do": "To do",
       "In progress": "In progress",
       "Completed": "Completed",
       "+ New Taskk": "+ New Task",
      // Add more English translations here
    }
  },
  fr: {
    translation: {
      "All Tasks": "Toutes les tâches",
     "To do": "À faire",
     "In progress": "En cours",
     "Completed": "Terminé",
     "+ New Task": "+ Ajouter une nouvelle tâche",
      // Add more French translations here
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
