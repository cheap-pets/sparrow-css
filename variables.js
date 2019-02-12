const { generate, presetPalettes } = require('@ant-design/colors')

const red = 'rgb(244, 67, 54)'
const orange = 'rgb(255, 152, 0)'
const yellow = 'rgb(255, 205, 86)'
const green = 'rgb(76, 175, 80)'
const blue = 'rgb(3, 155, 229)'
const purple = 'rgb(153, 102, 255)'
const grey = 'rgb(201, 203, 207)'
const white = 'rgb(255, 255, 255)'

const colors = {
  red,
  orange,
  yellow,
  green,
  blue,
  purple,
  grey,
  white,

  primary: green,
  secondary: purple,
  success: green,
  alert: yellow,
  warning: orange,
  danger: red
}