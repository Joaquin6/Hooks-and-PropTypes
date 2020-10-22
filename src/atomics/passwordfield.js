import React,{Fragment} from 'react';
import Types from 'prop-types'

const PasswordField = ({
    name,
    value,
    className,
    onChange
}) => {
    return(
        <Fragment>
            <input 
                type="password"
                name={name}
                value={value}
                className={className}
                onChange={onChange}
            />
        </Fragment>
    )
}

PasswordField.propTypes = {
    name: Types.string.isRequired,
    value: Types.string.isRequired,
    className: Types.string,
    onChange: Types.func.isRequired
}

export default PasswordField;