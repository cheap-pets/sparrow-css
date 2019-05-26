const { blue, grey, green, orange, volcano } = require('@ant-design/colors').presetPalettes

// const colors = {
//   PRIMARY: preset.blue,
//   SECONDARY: preset.grey,
//   DANGER: preset.volcano,
//   SUCCESS: preset.green,
//   WARNING: preset.orange,
//   GREY: preset.grey
// }

const variables = {
  UNIT_SIZE: 8,

  COLOR_PRIMARY: blue[5],
  COLOR_PRIMARY_HOVER: blue[4],
  COLOR_PRIMARY_ACTIVE: blue[6],
  COLOR_PRIMARY_DISABLED: blue[2],

  COLOR_SECONDARY: grey[5],
  COLOR_SECONDARY_HOVER: grey[4],
  COLOR_SECONDARY_ACTIVE: grey[6],
  COLOR_SECONDARY_DISABLED: grey[2],

  COLOR_SUCCESS: green[5],
  COLOR_SUCCESS_HOVER: green[4],
  COLOR_SUCCESS_ACTIVE: green[6],
  COLOR_SUCCESS_DISABLED: green[2],

  COLOR_DANGER: volcano[5],
  COLOR_DANGER_HOVER: volcano[4],
  COLOR_DANGER_ACTIVE: volcano[6],
  COLOR_DANGER_DISABLED: volcano[2],

  COLOR_GREY: grey[5],
  COLOR_GREY_HOVER: grey[4],
  COLOR_GREY_ACTIVE: grey[6],
  COLOR_GREY_DISABLED: grey[2],

  COLOR_WARNING: orange[5],

  BAR_HEIGHT: 40,

  BUTTON_SHADOW: 1,

  DIALOG_BORDER_RADIUS: 0,

  DROPDOWN_BORDER_RADIUS: 0,

  FORM_LABEL_WIDTH: 65,

  INPUT_BORDER_RADIUS: 2,
  INPUT_HEIGHT: 32,

  LIST_ITEM_HEIGHT: 40
}

// Object.keys(colors).forEach(key => {
//   const current = colors[key]
//   variables[`CLR_${key}`] = current[5]
//   current.forEach((v, i) => variables[`CLR_${key}_${i}`] = v)
// })

module.exports = variables
