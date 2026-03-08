import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: {
          search: 'Поиск',
          searchPlaceholder: 'Введи имя, тег, почту...',
          alphabet: 'По алфавиту',
          birthday: 'По дню рождения',
          all: 'Все',
          years: 'лет',
          retry: 'Попробовать снова',
          sortTitle: 'Сортировка',

          android: 'Android',
          ios: 'iOS',
          design: 'Дизайн',
          management: 'Менеджмент',
          qa: 'QA',
          back_office: 'Бэк-офис',
          frontend: 'Frontend',
          hr: 'HR',
          pr: 'PR',
          backend: 'Backend',
          support: 'Техподдержка',
          analytics: 'Аналитика',

          noResults: 'Мы никого не нашли',
          noResultsDesc: 'Попробуй скорректировать запрос',
          noUsers: 'Нет пользователей',

          error: 'Какой-то сверхразум всё сломал',
          errorDesc: 'Постараемся быстро починить',

          offline: 'Не могу обновить данные. Проверь соединение с интернетом.',
          reconnecting: 'Секундочку, гружусь...',

          age_zero: '{{count}} лет',
          age_one: '{{count}} год',
          age_few: '{{count}} года',
          age_many: '{{count}} лет',
        }
      },
      en: {
        translation: {
          search: 'Search',
          searchPlaceholder: 'Enter name, tag, email...',
          alphabet: 'Alphabetically',
          birthday: 'By birthday',
          all: 'All',
          years: 'years',
          retry: 'Try again',
          sortTitle: 'Sort',

          android: 'Android',
          ios: 'iOS',
          design: 'Design',
          management: 'Management',
          qa: 'QA',
          back_office: 'Back Office',
          frontend: 'Frontend',
          hr: 'HR',
          pr: 'PR',
          backend: 'Backend',
          support: 'Support',
          analytics: 'Analytics',

          noResults: 'Nothing found',
          noResultsDesc: 'Try adjusting your search',
          noUsers: 'No users',

          error: 'Something went wrong',
          errorDesc: 'We\'ll fix it soon',
          
          offline: 'Cannot update data. Check your internet connection.',
          reconnecting: 'Just a moment, loading...',
          
          age: '{{count}} years old',
          age_one: '{{count}} year old',
        }
      }
    },
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;