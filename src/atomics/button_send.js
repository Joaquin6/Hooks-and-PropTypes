import React,{Fragment} from 'react';
import Types from 'prop-types'

const style = 'btn btn-primary';
const SPACE = ' ';

const ButtonSend = ({
    className,
    onClick,
    label
}) =>{
    return(
        <Fragment>
            <button 
                className={style + SPACE + className}
                onClick={onClick}>{label}
            </button>
        </Fragment>
    )
}

ButtonSend.propTypes = {
    className: Types.string,
    onClick: Types.func.isRequired,
    label: Types.string.isRequired
}

export default ButtonSend;