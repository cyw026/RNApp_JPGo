/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import I18n from 'react-native-i18n';
// import en from './locales/en';
// import fr from './locales/fr';  

I18n.fallbacks = true;

I18n.translations = {
   en: {
    greeting: 'Hi!'
  },
  fr: {
    greeting: 'Bonjour!'
  }
};

export default I18n;
