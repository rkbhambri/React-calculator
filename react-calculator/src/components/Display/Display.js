import React from 'react';
import './Display.css';
const Display = (props) => {
    return (
        <div className="display text-right border pt-2 pr-2">{props.result === null ? props.storedNumber.join("") : props.result}</div>
    );
};
export default Display;