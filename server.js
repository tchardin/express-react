import express from 'express';

const PORT = process.env.PORT || 3000;
const server = express();

const initialData = {
  header: true
}

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  res.render('index', {
    content: '...',
    initialState: initialData
  })
})

server.use(express.static('public'))

server.listen(PORT, () => {
  console.info('Server listening on port ', PORT)
})
