const postcssAutoprefixer = require('autoprefixer')
const postcssClean = require('postcss-clean')
const postcssConditionals = require('postcss-conditionals')
const postcssFor = require('postcss-for')
const postcssImport = require('postcss-import')
const postcssMixins = require('postcss-mixins')
const postcssMixColor = require('postcss-mix-color')
const postcssNested = require('postcss-nested')
const postcssSelectorNot = require('postcss-selector-not')
const postcssVars = require('postcss-simple-vars')
const postcssUnprefix = require('postcss-unprefix')

const variables = require('./variables')

const isDevEnv = process.env.NODE_ENV === 'development'

const plugins = [
  postcssImport,
  postcssUnprefix,
  postcssSelectorNot,
  postcssMixins,
  postcssVars({
    variables
  }),
  postcssNested,
  postcssFor,
  postcssConditionals,
  postcssMixColor,
  postcssAutoprefixer,
  postcssClean(isDevEnv ? {
    level: {
      1: {
        semicolonAfterLastProperty: true
      }
    },
    format: {
      breaks: {
        afterAtRule: true,
        afterBlockBegins: true,
        afterBlockEnds: true,
        afterComment: true,
        afterProperty: true,
        afterRuleBegins: true,
        afterRuleEnds: true,
        beforeBlockEnds: true,
        betweenSelectors: true
      },
      spaces: {
        aroundSelectorRelation: true,
        beforeBlockBegins: true,
        beforeValue: true
      },
      indentBy: 2
    }
  } : undefined)
]

module.exports = {
  plugins
}
