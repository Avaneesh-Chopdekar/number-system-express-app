const express = require('express')
require('dotenv').config()
const convert = require('./convert')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const { select, input } = req.body
    const { from, to } = convert(select, input);

    res.render('index', { from, to, select })
})

app.get('/api/:type/:num', (req, res) => {
    const { type, num } = req.params
    const { from, to } = convert(type, num);

    res.send({ "type": type, "n1": from, "n2": to })
})

app.listen(port, () => {
    console.log('Number Systems app listening on port ' + port)
})
