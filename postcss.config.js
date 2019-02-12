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
  postcssClean({
    format: {
      breaks: {
        // controls where to insert breaks
        afterAtRule: true, // controls if a line break comes after an at-rule; e.g. `@charset`; defaults to `false`
        afterBlockBegins: true, // controls if a line break comes after a block begins; e.g. `@media`; defaults to `false`
        afterBlockEnds: true, // controls if a line break comes after a block ends, defaults to `false`
        afterComment: true, // controls if a line break comes after a comment; defaults to `false`
        afterProperty: true, // controls if a line break comes after a property; defaults to `false`
        afterRuleBegins: true, // controls if a line break comes after a rule begins; defaults to `false`
        afterRuleEnds: true, // controls if a line break comes after a rule ends; defaults to `false`
        beforeBlockEnds: true, // controls if a line break comes before a block ends; defaults to `false`
        betweenSelectors: true // controls if a line break comes between selectors; defaults to `false`
      },
      spaces: {
        // controls where to insert spaces
        aroundSelectorRelation: true, // controls if spaces come around selector relations; e.g. `div > a`; defaults to `false`
        beforeBlockBegins: true, // controls if a space comes before a block begins; e.g. `.block {`; defaults to `false`
        beforeValue: true // controls if a space comes before a value; e.g. `width: 1rem`; defaults to `false`
      },
      indentBy: 2
    }
  })
]

module.exports = {
  plugins
}
