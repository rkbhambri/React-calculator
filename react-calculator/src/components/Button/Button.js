import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button className="button" {...props}>{props.label}</button>
    );
};
export default Button;