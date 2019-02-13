const preset = require('@ant-design/colors').presetPalettes

const colors = {
  PRIMARY: preset.cyan,
  SECONDARY: preset.gold,
  DANGER: preset.red,
  SUCCESS: preset.green,
  WARNING: preset.orange,
  GREY: preset.grey
}

const variables = {}

Object.keys[colors].forEach(key => {
  const current = colors[key]
  variables[`CLR_${key}`] = current[6]
  current.forEach((v, i) => variables[`CLR_${key}_${i}`] = v)
})

module.exports = variables