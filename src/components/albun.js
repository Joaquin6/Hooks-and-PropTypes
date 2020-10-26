import React,{Fragment,useEffect, useState} from 'react';
import CardField from '../atomics/card_field';
import albunms from '../paths/albums';

const Albun = () =>{

    const [albunes,setAlbunes] = useState([]);

    useEffect(() =>{
        fetch(albunms.getAlbums)
            .then(res => res.json)
            .then(data => setAlbunes(data))
    })

    return(
        <Fragment>
            <CardField albunes={albunes}/>
        </Fragment>
    )
}

export default Albun;