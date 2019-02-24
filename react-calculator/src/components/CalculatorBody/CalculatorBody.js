import React, { Component } from 'react';
import Display from '../Display/Display';
import CalculatorButtons from '../CalculatorButtons/CaculatorButtons';
import './CalculatorBody.css';

class CalculatorBody extends Component {

	state = {
		storedNumber: [0]
	};
	// check
	handleClick = (event) => {
		let storedNumber = [...this.state.storedNumber];
		// regex to check whether selected value is number or not
		let checkNumber = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
		if (event.target.value !== '=') {
			// Replace with new number when = is pressed and current value is number
			if (typeof (storedNumber[0]) === 'number' && storedNumber.length === 1 && checkNumber.test(event.target.value)) {
				storedNumber[0] = event.target.value;
			}
			else if (typeof (storedNumber[0]) === 'number' && storedNumber.length > 1 && checkNumber.test(event.target.value)) {
				storedNumber = this.state.storedNumber.concat(event.target.value);

			}
			else if (typeof (storedNumber[0]) === 'number' && !checkNumber.test(event.target.value)) {
				storedNumber = this.state.storedNumber.concat(event.target.value);
			}
			else if (typeof (storedNumber[0]) !== 'number') {
				storedNumber = this.state.storedNumber.concat(event.target.value);
			}
		}
		if (event.target.value === '=' && storedNumber.length > 0) {
			let isInputCorrect = true;
			for (let i = 0; i < storedNumber.length; i++) {
				if (!checkNumber.test(storedNumber[i])) {
					if (!checkNumber.test(storedNumber[i + 1])) {
						isInputCorrect = false;
						break;
					}
				}
			}

			if (isInputCorrect) {
				const result = eval(this.state.storedNumber.join(""));
				storedNumber = [result];
			}
		}
		if (event.target.value === 'clear') {
			storedNumber = [];
		}
		this.setState({
			...this.state,
			storedNumber
		});
	};

	render() {
		return (
			<div className="calculator-body col-md-4 offset-4">
				<Display storedNumber={this.state.storedNumber} />
				<CalculatorButtons handleClick={(event) => this.handleClick(event)} />
			</div>
		);
	};
};
export default CalculatorBody;