const express = require('express')
const app = express()
const port = 4567

app.get('/', (req, res) => res.send('hello world'))

console.log('Graham was here');

app.listen(port, () => console.log(`listening on port: ${port}`))










console.log('and also down here');