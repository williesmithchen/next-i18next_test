/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/

const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

const localeSubpathVariations = {
  none: {},
  foreign: {
    en: 'en',
    de: 'de',
  },
  all: {
    zh: 'zh',
    en: 'en',
    de: 'de',
  },
}

module.exports = new NextI18Next({
  defaultLanguage: 'zh',
  otherLanguages: ['en', 'de'],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
})
