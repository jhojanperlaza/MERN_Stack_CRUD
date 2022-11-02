import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UsuarioIndividiaul from './usuarioIndividual';

function ListaUsuarios(){

    const[datausuarios, setdatausuario]=useState([])

    useEffect(() => {
        axios.get('api/usuario/obtenerusuarios').then(res => {
            console.log(res.data)
            setdatausuario(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])

    //Mapear lista de usuarios y guardarlas en un objeto llamado usuario
    const listaUsuarios = datausuarios.map(usuario => {
        return (
            <div>
                <UsuarioIndividiaul usuario={usuario}/>
            </div>
        )
    })

    return (
        <div>
            <h2>Lista Usuarios</h2>
            {listaUsuarios}
        </div>
    )
}

export default ListaUsuarios;