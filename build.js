// postcss & plugins
const autoPrefixer = require('autoprefixer')
const atImport = require('postcss-import')
const mixins = require('postcss-mixins')
const nested = require('postcss-nested')
const unPrefix = require('postcss-unprefix')
const postcss = require('postcss')([atImport(), mixins, nested, unPrefix, autoPrefixer])

// formater
const CleanCss = require('clean-css')
const cleaner = new CleanCss({
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

const fs = require('fs')
fs.readFile('src/index.pcss', (err, css) => {
  if (err) {
    console.error(err)
  } else {
    postcss
      .process(css, { from: 'src/index.pcss', to: 'dist/sparrow.css' })
      .then(({ css }) => {
        fs.writeFile('dist/sparrow.css', cleaner.minify(css).styles, err => {
          err ? console.error(err) : console.info('[done]', 'dist/sparrow.css')
        })
      })
      .catch(err => console.error(err))
  }
})
