'use strict'

const fs = require('fs')
const theme = require('./theme')

const lightTheme = theme({ name: 'GitHub Minimal', style: 'light' })

fs.mkdirSync('./themes', { recursive: true })
fs.writeFileSync('./themes/light.json', JSON.stringify(lightTheme))
