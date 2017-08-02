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
   'zh-Hans': {
    greeting: 'Bonjour!',
    lang: '简体中文',
    title_langSetting: '语言切换'
  },
  en: {
    greeting: 'Hi!',
    lang: 'Engling',
    title_langSetting: 'Language Setting'
  }
  
};

export default I18n;
