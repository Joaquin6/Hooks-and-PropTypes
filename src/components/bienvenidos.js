import React,{Fragment} from 'react';

const Bienvenidos = ({datos,cerrarSesion}) =>{
    console.log(datos)
    const {nombre,correo,sex,password,estadoCivil} = datos;
    return(
        <Fragment>
            <h1 className="bg-success">¡¡¡Bienvenido!!!</h1>
            <div className="bg-primary text-white">
                <h4>Nombre: {nombre}</h4>
                <h4>Correro: {correo}</h4>
                <h4>Sexo: {sex}</h4>
                <h4>Contraseña: {password}</h4>
                <h4>Estado Civil: {estadoCivil}</h4>
            </div>
            <button className="btn btn-danger" onClick={cerrarSesion}>Cerrar Sesión</button>
        </Fragment>
    )
}

export default Bienvenidos;