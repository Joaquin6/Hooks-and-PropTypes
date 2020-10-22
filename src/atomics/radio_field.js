import React,{Fragment} from 'react';
import Types from 'prop-types'

const RadioField = ({
    name,
    value,
    className,
    label,
    checked,
    onChange
}) =>{
    return(
        <Fragment>
            <input 
            type='radio' 
            name={name} 
            value={value} 
            className={className} 
            label={label} 
            checked={checked} 
            onChange={onChange}/>
        </Fragment>
    )
}

RadioField.propTypes = {
    name: Types.string.isRequired,
    value: Types.string.isRequired,
    className: Types.string,
    label: Types.string,
    checked: Types.string.isRequired,
    onChange: Types.func.isRequired
}

export default RadioField;