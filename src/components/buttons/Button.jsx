import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.handleClick} 
        type='button' 
        className={`button button_${props.parent} button_${props.color}`}>
        {props.value}
        </button>
    );
};

export default Button;