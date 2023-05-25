const express = require('express')
const app = express()
import parserRouting from '../src/routers/parse';
app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/', (req, res) => {
    res.send('users page')
})

app.use('/parse', parserRouting);

app.listen(5000);