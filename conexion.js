const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudmernstack');

const objectodb = mongoose.connection

objectodb.on('connected', () => {
    console.log('Conexion correcta con mongo db');
})
objectodb.on('error', () => {
    console.log('Error en la conexion con mongo db');
})

module.exports = mongoose
