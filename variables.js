const preset = require('@ant-design/colors').presetPalettes

const colors = {
  PRIMARY: preset.cyan,
  SECONDARY: preset.gold,
  DANGER: preset.red,
  SUCCESS: preset.green,
  WARNING: preset.orange,
  GREY: [ '#ffffff', '#fafafa', '#f5f5f5', '#e8e8e8', '#d9d9d9', '#bfbfbf', '#8c8c8c', '#595959', '#262626', '#000000' ]
}

const variables = {
  INPUT_BORDER_RADIUS: 4
}

Object.keys(colors).forEach(key => {
  const current = colors[key]
  variables[`CLR_${key}`] = current[5]
  current.forEach((v, i) => variables[`CLR_${key}_${i}`] = v)
})

module.exports = variables
