const bodyParser = require("body-parser")
const exprees = require("express")
const res = require("express/lib/response")
const app = exprees()

app.use(exprees.static('.'))
app.use(bodyParser.urlencoded({extended = true}))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('ok'))
app.listen(3035, () => console.log('execultando...'))