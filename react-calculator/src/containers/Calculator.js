import React, { Component } from 'react';
import Header from '../components/Header/Header';
import CalculatorBody from '../components/CalculatorBody/CalculatorBody';

class Calculator extends Component {
    render() {
        return (
            <div className="calculator-wrapper">
                <Header text="Calculator" />
                <CalculatorBody />
            </div>
        );
    };
};
export default Calculator;