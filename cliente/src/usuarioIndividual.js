import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

function UsuarioIndividiaul({ usuario }) {

    //para refrescar la pagina uso navegar(0)
    const navegar = useNavigate()
    //funcion para borrar el usuario
    function borrarusuario(idUsuario){
        axios.post('/api/usuario/borrarusuario',{idUsuario: idUsuario}).then(res => {
            console.log(res.data)
            alert(res.data)
            navegar(0)
        }).catch(err => console.log(err))
    }
    return (
        <div className='container'>
            <div className='row'>

                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario.idUsuario}</li>
                        <li className='list-group-item'>{usuario.nombre}</li>
                        <li className='list-group-item'>{usuario.email}</li>
                        <li className='list-group-item'>{usuario.telefono}</li>
                    </ul>

                    <Link to={`/editarUsuario/${usuario.idUsuario}`}><li className='btn btn-success'>Editar</li></Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={()=>{borrarusuario(usuario.idUsuario)}}>Borrar</button>
                    <hr className='mt-4'></hr>
                </div>
            </div>
        </div>
    )
}

export default UsuarioIndividiaul;
