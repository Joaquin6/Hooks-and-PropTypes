import React,{Fragment} from 'react';
import FaltaDatos from './faltaDatos';
import TextField from '../atomics/textfield'
import PasswordField from '../atomics/passwordfield';
import RadioField from '../atomics/radio_field';
import DropdownField from '../atomics/dropdown_field';
import ButtonSend from '../atomics/button_send';

const Form = ({handler,iniciarSesion,datos}) =>{
    const {nombre,correo,sex,password,estadoCivil,terminos,show1} = datos
    return(
        <Fragment>
            <div className='containerPrincipal'>
        <div className='containerSecundario'>
          <div className='form-group'>
            <label>Nombre: </label>
            <br />
            {/* <input
              type='text'
              className='form-control'
              name='nombre'
              value={nombre}
              onChange={handler}
            /> */}
            <TextField name="nombre" value={nombre} onChange={handler} className='form-control'/>
            <br />
            <label>Correo: </label>
            <br />
            {/* <input
              type='text'
              className='form-control'
              name='correo'
              value={correo}
              onChange={handler}
            /> */}
            <TextField name="correo" value={correo} onChange={handler} className='form-control'/>
            <br />
            <label>Sexo</label>
            <div className="row centrado">
                <div className="col-3 p-2">
                    <label>Masculino</label>
                    <br/>
                    {/* <input type="radio" label="male" name="sex" value="Masculino" checked={sex === 'Masculino'} onChange={handler}/> */}
                    <RadioField label="male" name="sex" value="Masculino" checked={sex === 'Masculino'} onChange={handler}/>
                </div>
                <div className="col-3">
                    <label>Femenino</label>
                    <br/>
                    {/* <input type="radio" label="female" name="sex" value="Femenino" checked={sex === 'Femenino'} onChange={handler}/> */}
                    <RadioField label="female" name="sex" value="Femenino" checked={sex === 'Femenino'} onChange={handler}/>
                </div>
                <div className="col-3">
                    <label>Otro</label>
                    <br/>
                    {/* <input type="radio" label="otro" name="sex" value="otro" checked={sex === 'otro'} onChange={handler}/> */}
                    <RadioField label="otro" name="sex" value="otro" checked={sex === 'otro'} onChange={handler}/>
                </div>
            </div>
            <br />
            <label>Contraseña: </label>
            <br />
            {/* <input
              type='password'
              className='form-control'
              name='password'
              value={password}
              onChange={handler}
            /> */}
            <PasswordField name='password' value={password} onChange={handler} className='form-control'/>
            <br/>
            <label>Estado Civil: </label>
            {/* <select value={estadoCivil} name="estadoCivil" onChange={handler}>
                <option value="soltero">Soltero</option>
                <option value="casado">Casado</option>
                <option value="divorciado">Divorciado</option>
                <option value="viudo">Viudo</option>
            </select> */}
            <DropdownField value={estadoCivil} name="estadoCivil" onChange={handler} data={['soltero','casado','divorciado','viudo']}/>
            <br/>
            <label>Aceptar Terminos y Condiciones: </label>
            <input type="checkbox" name="terminos" checked={terminos} onClick={handler} />
            <br/>
            {/* <button
              className='btn btn-primary'
              onClick={iniciarSesion}
              >
              Iniciar Sesión
            </button> */}
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