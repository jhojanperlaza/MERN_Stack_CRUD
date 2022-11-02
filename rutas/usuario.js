const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

// constrccion del esquema del usuario
const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idUsuario: String
});

// creacion y exportacion del modelo
const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router


// RUTA POST para agregar usuarios a la db
router.post('/aregarusuario', (req, res) => {
    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idUsuario: req.body.idUsuario
    })
    nuevoUsuario.save(function (err) {
        if(!err){
            res.send('Usuario agrgado correctamente')
        }else {
            res.send(err)
        }
    })
})


// RUTA GET para obtener los usuarios de la db
router.get('/obtenerusuarios', (req, res) => {
    // metodo find() de mongoose
    ModeloUsuario.find({}, function(users, err){
        if (!err){
            res.send(users)
        } else {
            res.send(err)
        }
    })
})


// RUTA POST para obtener data de usuario por su id
router.post('/obtenerdatausuario', (req, res) => {
    // metodo find() de mongoose
    ModeloUsuario.find({idUsuario: req.body.idUsuario}, function(user, err){
        if (!err){
            res.send(user)
        } else {
            res.send(err)
        }
    })
})


// RUTA POST para actualizar un usuario
router.post('/actualizausuario', (req, res) => {

    ModeloUsuario.findOneAndUpdate({idUsuario:req.body.idUsuario}, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) =>{
        if (!err){
            res.send('Usuario actualizado correctamente')
        }else {
            res.send(err)
        }
    })
})


// RUTA POST para borrar un usuario
router.post('/borrarusuario', (req, res) => {

    ModeloUsuario.findOneAndDelete({idUsuario:req.body.idUsuario}, (err) => {
        if (!err){
            res.send('Usuario borrado correctamente')
        }else {
            res.send(err)
        }
    })
})
