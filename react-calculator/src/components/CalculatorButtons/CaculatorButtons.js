import React from 'react';
import Button from '../Button/Button';

const CalculatorButtons = (props) => {
    return (
        <div className="buttons-wrapper">
            <Button onClick={(event) => props.handleClick(event)} label="(" value="(" />
            <Button onClick={(event) => props.handleClick(event)} label=")" value=")" />
            <Button onClick={(event) => props.handleClick(event)} label="%" value="%" />
            <Button onClick={(event) => props.handleClick(event)} label="AC" value="clear" />

            <Button onClick={(event) => props.handleClick(event)} label="7" value="7" />
            <Button onClick={(event) => props.handleClick(event)} label="8" value="8" />
            <Button onClick={(event) => props.handleClick(event)} label="9" value="9" />
            <Button onClick={(event) => props.handleClick(event)} label="/" value="/" />

            <Button onClick={(event) => props.handleClick(event)} label="4" value="4" />
            <Button onClick={(event) => props.handleClick(event)} label="5" value="5" />
            <Button onClick={(event) => props.handleClick(event)} label="6" value="6" />
            <Button onClick={(event) => props.handleClick(event)} label="X" value="*" />

            <Button onClick={(event) => props.handleClick(event)} label="1" value="1" />
            <Button onClick={(event) => props.handleClick(event)} label="2" value="2" />
            <Button onClick={(event) => props.handleClick(event)} label="3" value="3" />
            <Button onClick={(event) => props.handleClick(event)} label="-" value="-" />


            <Button onClick={(event) => props.handleClick(event)} label="0" value="0" />
            <Button onClick={(event) => props.handleClick(event)} label="." value="." />
            <Button onClick={(event) => props.handleClick(event)} label="=" value="=" />
            <Button onClick={(event) => props.handleClick(event)} label="+" value="+" />


        </div>
    );
};

export default CalculatorButtons;