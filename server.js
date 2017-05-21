import express from 'express';

const PORT = process.env.PORT || 3000;
const server = express();

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  })
})

server.use(express.static('public'))

server.listen(PORT, () => {
  console.info('Server listening on port ', PORT)
})
