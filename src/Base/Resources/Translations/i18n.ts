import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resources from './en.json'
import dayjs from 'dayjs'
import 'intl-pluralrules'


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        debug: false,
        lng: 'ru',
        fallbackLng: 'en',
        keySeparator: '.', // we use dots for translation nav in form messages.welcome

        interpolation: {
            format: function (value, format, lng) {
                if (value instanceof Date) return dayjs(value).locale('en').format(format)
                return value
            },
            escapeValue: false, // react already safes from xss
        },
    })

export default i18n
