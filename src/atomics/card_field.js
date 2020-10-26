import React,{Fragment} from 'react';

const CardField = ({albunes}) =>{
    return(
        <Fragment>
            <div className="row">
            {albunes.map((item,i) =>{
                const {title,id,userId} = item
                return(
                    <div className="col-md-6">
                        <div className="card border border-success">
                            <div className="card-body">
                                <h1 className="card-title">{title}</h1>
                                <h4>{id}</h4>
                                <h4>{userId}</h4>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </Fragment>
    )
}

export default CardField