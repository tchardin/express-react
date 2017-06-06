import sassMiddleware from 'node-sass-middleware'
import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/components/App'

const PORT = process.env.PORT || 3000
const server = express()

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}))

const initialData = {
  header: true
}

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  res.render('index', {
    content: ReactDOMServer.renderToString(
      <App initialState={initialData} />
    ),
    initialState: initialData
  })
})

server.use(express.static('public'))

server.listen(PORT, () => {
  console.info('Server listening on port ', PORT)
})
