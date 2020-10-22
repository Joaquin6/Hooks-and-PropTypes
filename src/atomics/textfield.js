import React,{Fragment} from 'react';
import Types from 'prop-types'

const TextField = ({
    name,
    value,
    className,
    onChange
}) => {
    return(
        <Fragment>
            <input 
                type="text"
                name={name}
                value={value}
                className={className}
                onChange={onChange}
            />
        </Fragment>
    )
}

TextField.propTypes = {
    name: Types.string.isRequired,
    value: Types.string.isRequired,
    className: Types.string,
    onChange: Types.func.isRequired
}
export default TextField;