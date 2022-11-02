const express = require('express');
const app = express();

//Conexion con mongo:
const database = require('./conexion')

//Importacion del archivo de rutas y modelo de usuario
const rutausuario = require('./rutas/usuario')



// importar body parse para poner en formato json los usuarios que guardo:
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/api/usuario', rutausuario)
//rutas
app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend corriendo..');
})



//configurar servidor 
app.listen(5000, function () {
    console.log('el sevidor esta pilas corriendo')
})
