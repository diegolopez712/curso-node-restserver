require('dotenv').config(); //Cargar toda la importación

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen( process.env.PORT, () =>{
    console.log('Servidor corriendo en puerto: ',process.env.PORT)
} );

