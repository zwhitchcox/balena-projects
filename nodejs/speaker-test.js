const fs = require('fs')
const Speaker = require('speaker')

const speaker = new Speaker({
  device: 'hw:Pro,0'
})


fs.createReadStream('./test.wav').pipe(speaker)