import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [ data, setData ] = useState('');

	// the numbers we click is stored in this array
	const calculate = [];

	// the array which indicates the numbers on the calculator
	const calculator = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.', '%' ];

	calculator.forEach((number) => {
		// for each number on the calculator we click, we push that number into the calculate
		calculate.push(
			<button
				onClick={(e) => {
					setData(data + e.target.value); // each button click -> sets the data
				}}
				value={number}
				key={number}
			>
				{number}
			</button>
		);
	});
	return (
		<div className="wrapper">
			<div className="show-input">{data}</div>
			<div className="digits flex">{calculate}</div>
			<div className="modifiers subgrid">
				<button
					onClick={() => setData(data.substr(0, data.length - 1))} // removes the last clicked number
				>
					<i class="fas fa-backspace" />
				</button>
				<button onClick={() => setData('')}>Clear</button>
			</div>
			<div className="operations subgrid">
				<button onClick={(e) => setData(data + e.target.value)} value="+">
					+
				</button>
				<button onClick={(e) => setData(data - e.target.value)} value="-">
					-
				</button>
				<button onClick={(e) => setData(data + e.target.value)} value="*">
					*
				</button>
				<button onClick={(e) => setData(data + e.target.value)} value="/">
					/
				</button>
				<button
					onClick={(e) => {
						try {
							setData(
								String(eval(data)).length > 3 && String(eval(data)).includes('.')
									? String(eval(data).toFixed(4))
									: String(eval(data))
							);
						} catch (error) {
							console.log(error);
						}
					}}
					value="="
				>
					=
				</button>
			</div>
		</div>
	);
};

export default App;
