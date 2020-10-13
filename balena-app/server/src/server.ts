import express from "express";
import { createProxyMiddleware } from 'http-proxy-middleware'
import proxy from 'express-http-proxy'

const app = express()
const PORT = 4000


if (process.env.NODE_ENV === "production") {
  app.use(express.static('public'))
} else {
  app.use(
    '/sockjs-node',
    createProxyMiddleware(
      '/sockjs-node',
      {
        target: 'ws://localhost:3000',
        ws: true,
      }
    )
  )
  app.use(proxy('http://localhost:3000'))
}

// start the express server
app.listen(PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );