import React from 'react';
import './Display.css';

const Display = (props) => {
    return (
        <div className="display text-right border pt-3 pr-2">{props.storedNumber.join("")}</div>
    );
};
export default Display;