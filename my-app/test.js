const MPlayer = require('mplayer')
const { resolve } = require('path')
const player = new MPlayer()

  player.openFile(resolve(process.cwd(), 'test.wav'))
  player.play()
  setTimeout(() => {
    player.pause()
    setTimeout(() => {
      console.log(player)
      player.play()
    }, 1000)
  }, 1000)