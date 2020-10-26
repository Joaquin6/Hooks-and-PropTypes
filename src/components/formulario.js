import React,{Fragment,useState} from 'react';
import '../Styles/styles.css'
import Albun from './albun';
import Bienvenidos from './bienvenidos';
import Form from './form';

const Formulario = () =>{

    const [datos,setDatos] = useState({
        nombre : '',
        correo: '',
        show: false,
        show1: false,
        show2: true,
        show3: false,
        sex: '',
        password: '',
        estadoCivil: '',
        terminos: false
    })

    const handler = e =>{
        console.log(e)
        const {name,value,type,checked} = e.target

        if(type === "checkbox"){
            setDatos({
                ...datos,
                [name]: checked ? true : false
            });
        }else{
            setDatos({
                ...datos,
                [name]: value,
                ['show1'] : false
            });
        }
    }

    const iniciarSesion = () =>{
        const {nombre,correo,terminos,sex,password,estadoCivil} = datos;
        if(nombre !== '' && correo !== '' && terminos === true && sex !== '' && estadoCivil !== '' && password.length >= 8){
            setDatos({
                ...datos,
                ['show3'] : true,
                ['show2'] : false,
            })
        }else{
            setDatos({
                ...datos,
                ['show'] : false,
                ['show1'] : true
            })
            if(nombre === ''){
                alert('Debe ingresar un nombre')
            }else{
                if(correo === ''){
                    alert('Debe Ingresar un correo')
                }else{
                    if(sex === ''){
                        alert('Debe Seleccionar un sexo')
                    }else{
                        if(password === ''){
                            alert('Debe Ingresar una Contraseña')
                        }else{
                            if(password.length < 8){
                                alert('La Contraseña debe ser mayor o igual a 8 caracteres')
                            }else{
                                if(estadoCivil === ''){
                                    alert('Debe seleccionar su estado civil')
                                }else{
                                    if(terminos === false){
                                        alert('Debe Aceptar los Términos y Condiciones')
                                    }
                                }
                            }
                        }
                    }
                }
            } 
        }
    }

    const cerrarSesion = () =>{
        setDatos({
            ...datos,
            ['show'] : false,
            ['show2'] : true,
            ['nombre'] : '',
            ['correo'] : '',
            ['password'] : '',
            ['sex'] : '',
            ['terminos'] : false
        })
    }

    const {show,show2} = datos;

    return(
        <Fragment>
            <div>{show2?(<Form datos={datos} handler={handler} iniciarSesion={iniciarSesion}/>):null}</div>
            <div>{show?(<Bienvenidos datos={datos} cerrarSesion={cerrarSesion}/>):null}</div>
            <div>{show3?(<Albun/>):null}</div>
        </Fragment>
    )
}
export default Formulario;