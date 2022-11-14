const express = require('express')

const app = express()

app.get('/', function(req, resp){
 resp.send('Hola Mundo')
} )

app.listen(3000)
