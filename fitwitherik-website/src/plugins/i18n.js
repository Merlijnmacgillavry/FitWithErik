import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '../contentLocale/en'
import nl from '../contentLocale/nl'
Vue.use(VueI18n);

const messages = {
    'en': en,
    'nl': nl
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});
export default i18n