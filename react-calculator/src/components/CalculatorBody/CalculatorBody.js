import React, { Component } from 'react';
import Display from '../Display/Display';
import CalculatorButtons from '../CalculatorButtons/CaculatorButtons';
import './CalculatorBody.css';

class CalculatorBody extends Component {

    state = {
        storedNumber: [],
        result: null
    };

    handleClick = (event) => {
        if (event.target.value !== '=') {
            this.setState({
                ...this.state,
                storedNumber: this.state.storedNumber.concat(event.target.value)
            });
        }
        if (event.target.value === '=') {
            console.log('join====eval====', this.state.storedNumber.join(""))
            const result = eval(this.state.storedNumber.join(""));
            console.log('result====', result)
            this.setState({
                ...this.state,
                storedNumber: [],
                result
            });
        }
    };

    render() {
        return (
            <div className="calculator-body col-md-4 offset-4">
                <Display result={this.state.result} storedNumber={this.state.storedNumber} />
                <CalculatorButtons handleClick={(event) => this.handleClick(event)} />
            </div>
        );
    };
};
export default CalculatorBody;