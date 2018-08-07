// postcss & plugins
const atImport = require('postcss-import')()
const mixins = require('postcss-mixins')
const vars = require('postcss-simple-vars')
const nested = require('postcss-nested')
const colorMix = require('postcss-color-mix')
const unPrefix = require('postcss-unprefix')
const autoPrefixer = require('autoprefixer')
const postcss = require('postcss')([atImport, mixins, vars, nested, colorMix, unPrefix, autoPrefixer])

// formater
const CleanCss = require('clean-css')
const cleaner = new CleanCss({
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
})

const fs = require('fs')
fs.readFile('src/index.pcss', (err, css) => {
  if (err) {
    console.error(err)
  } else {
    postcss
      .process(css, { from: 'src/index.pcss' })
      .then(({ css }) => {
        fs.writeFile('dist/sparrow.css', cleaner.minify(css).styles, err => {
          err ? console.error(err) : console.info('done', '=>', 'dist/sparrow.css')
        })
      })
      .catch(err => console.error(err))
  }
})
