import React,{Fragment} from 'react';
import Types from 'prop-types'

const DropdownField = ({
    name,
    value,
    onChange,
    data
}) =>{
    //const datos = ['soltero','casado','divorciado','viudo']
    return(
        <Fragment>
            <select name={name} value={value} onChange={onChange}>
                {data.map((item,i) =>{
                    return(
                        <option value={item} key={i}>{item}</option>
                    )
                })}
            </select>
        </Fragment>
    )
}

DropdownField.propTypes = {
    name: Types.string.isRequired,
    value: Types.string.isRequired,
    onChange: Types.func.isRequired,
    data: Types.array.isRequired
}

export default DropdownField;