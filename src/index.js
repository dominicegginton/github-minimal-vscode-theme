'use strict'

const fs = require('fs')
const theme = require('./theme')

const lightTheme = theme({ name: 'GitHub Minimal', style: 'light' })
const darkTheme = theme({ name: 'GitHub Minimal', style: 'dark' })

fs.mkdirSync('./themes', { recursive: true })
fs.writeFileSync('./themes/light.json', JSON.stringify(lightTheme))
fs.writeFileSync('./themes/dark.json', JSON.stringify(darkTheme))
