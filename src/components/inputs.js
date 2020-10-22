import React,{Fragment, useState} from 'react';

const Inputs = () =>{
    const [user,setUser] = useState({
        name: '',
        skill: true,
        sex: '',
        tool: ''
    });

    const handler = (e) =>{
        const {name,value,type,checked} = e.target

        if(type === "checkbox"){
            setUser({
                ...user,
                [name]: checked ? true : false
            });
        }else{
            setUser({
                ...user,
                [name]: value
            });
        }
    };

    const {name,skill,sex,tool} = user;

    return(
        <Fragment>
            <div>
                <p>user - {name} - {skill ? 'ok' : 'no'} - {sex} - {tool}</p>
                <input type="text" name="name" value={name} onChange={handler} />

                <input type="checkbox" name="skill" checked={skill} onClick={handler} />
                <input type="radio" label="male" name="sex" value="male" checked={sex === 'male'} onChange={handler}/>
                <input type="radio" label="female" name="sex" value="female" checked={sex === 'female'} onChange={handler}/>

                <select value={tool} name="tool" onChange={handler}>
                    <option value="js">js</option>
                    <option value="python">python</option>
                    <option value="go">go</option>
                </select>
            </div>
        </Fragment>
    )
}

export default Inputs;