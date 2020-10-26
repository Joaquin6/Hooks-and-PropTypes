import React,{Fragment} from 'react';
import FaltaDatos from './faltaDatos';
import TextField from '../atomics/textfield'
import PasswordField from '../atomics/passwordfield';
import RadioField from '../atomics/radio_field';
import DropdownField from '../atomics/dropdown_field';
import ButtonSend from '../atomics/button_send';
import LabelField from '../atomics/label_field';

const Form = ({handler,iniciarSesion,datos}) =>{
    const {nombre,correo,sex,password,estadoCivil,terminos,show1} = datos
    return(
        <Fragment>
            <div className='containerPrincipal'>
        <div className='containerSecundario'>
          <div className='form-group'>
            <LabelField label={"Nombre: "}/>
            <br />
            <TextField name="nombre" value={nombre} onChange={handler} className='form-control'/>
            <br />
            <LabelField label={"Correo: "}/>
            <br />
            <TextField name="correo" value={correo} onChange={handler} className='form-control'/>
            <br />
            <LabelField label={"Sexo"}/>
            <div className="row centrado">
                <div className="col-3 p-2">
                    <LabelField label={"Masculino"}/>
                    <br/>
                    <RadioField label="male" name="sex" value="Masculino" checked={sex === 'Masculino'} onChange={handler}/>
                </div>
                <div className="col-3">
                    <LabelField label={"Femenino"}/>
                    <br/>
                    <RadioField label="female" name="sex" value="Femenino" checked={sex === 'Femenino'} onChange={handler}/>
                </div>
                <div className="col-3">
                    <LabelField label={"Otro"}/>
                    <br/>
                    <RadioField label="otro" name="sex" value="otro" checked={sex === 'otro'} onChange={handler}/>
                </div>
            </div>
            <br />
            <LabelField label={"Contraseña: "}/>
            <br />
            <PasswordField name='password' value={password} onChange={handler} className='form-control'/>
            <br/>
            <LabelField label={"Estado Civil: "}/>
            <DropdownField value={estadoCivil} name="estadoCivil" onChange={handler} data={['soltero','casado','divorciado','viudo']}/>
            <br/>
            <LabelField label={"Aceptar Términos y Condiciones: "}/>
            <input type="checkbox" name="terminos" checked={terminos} onClick={handler} />
            <br/>
            <ButtonSend label="Enviar" onClick={iniciarSesion}/>
            <div className="p-2">{show1?(<FaltaDatos/>):null}</div>
          </div>
        </div>
      </div>
        </Fragment>
    )
}

export default Form

//Proptypes e inputs