import React from 'react';
import store from 'store';
const TextInput = (props) => {
    const handleChange = (evt) =>{
        if(props.field === 'user'){
            store.set('userName',{value:evt.target.value})
        }
        else{
            store.set('userPass',{value:evt.target.value})
        }
    }
    return (
        <div className='input-container'>
            <label className='label'>{props.labelName}</label>
            <input onChange={handleChange} type={props.type}
            className={`input input_${props.parent}`}/>
        </div>
    );
};

export default TextInput;