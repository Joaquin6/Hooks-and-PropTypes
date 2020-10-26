import React,{Fragment} from 'react';
import Types from 'prop-types'

const LabelField = ({label}) =>{
    return(
        <Fragment>
            <label>{label}</label>
        </Fragment>
    )
}

LabelField.propTypes = {
    label: Types.string
}

export default LabelField;