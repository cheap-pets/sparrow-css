// postcss & plugins
const atImport = require('postcss-import')()
const atMixins = require('postcss-mixins')
const vars = require('postcss-simple-vars')
const nested = require('postcss-nested')
const colorMix = require('postcss-color-mix')
const atIf = require('postcss-conditionals')
const atFor = require('postcss-for')
const unPrefix = require('postcss-unprefix')
const autoPrefixer = require('autoprefixer')
const postcss = require('postcss')([
  atImport,
  atMixins,
  vars,
  nested,
  colorMix,
  atIf,
  atFor,
  unPrefix,
  autoPrefixer
])

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
const { resolve } = require('path')
const srcRoot = resolve(__dirname, 'src')
const srcEntry = resolve(srcRoot, 'index.pcss')
const distFile = resolve(__dirname, 'dist', 'sparrow.css')

let processing = false
function bundle () {
  processing = true
  fs.readFile(srcEntry, (err, css) => {
    if (err) {
      console.error(err)
    } else {
      postcss
        .process(css, { from: srcEntry })
        .then(({ css }) => {
          fs.writeFile(distFile, cleaner.minify(css).styles, err => {
            err ? console.error(err) : console.info('done', '=>', 'dist/sparrow.css')
            processing = false
          })
        })
        .catch(err => {
          console.error(err)
          processing = false
        })
    }
  })
}
bundle()

if (require('yargs').alias('w', 'watch').argv.watch) {
  console.info('watching on ...', 'press ctrl + c to exit.')
  require('chokidar')
    .watch(srcRoot, {
      ignoreInitial: true,
      ignored: /(^|[/\\])\../
    })
    .on('all', event => {
      if ((event === 'change' || event === 'add' || event === 'unlink') && !processing) bundle()
    })
}
