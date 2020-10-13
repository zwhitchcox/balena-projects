import MPlayer from 'mplayer'
import { resolve } from 'path'
const player = new MPlayer()
player.openFile(resolve(process.cwd(), 'test.wav'))
player.pause()

export default async (req, res) => {
  const { action } = req.query
  switch (action) {
    case "play":
      console.log('playing')
      player.play()
      res.end('playing')
      break
    case "pause":
      console.log('pausing')
      player.pause()
      res.end('pausing')
      break
    case "restart":
      player.openFile(resolve(process.cwd(), 'test.wav'))
      break

    default:
      res.status(404).end('Command not found')
      break
  }
}

