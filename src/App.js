import React, { useState } from 'react';
import Boxes from './components/boxes';

// detta blir en component

function App() {
	const [isRed, setRed] = useState(false);
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
		setRed(!isRed);
	};

	return (
		<div className="app">
			<div className="boxes">
				<h1 className={isRed ? 'red' : ''}>Change the color!</h1>
				<button onClick={increment}>Count!</button>
				<h1>{count}</h1>
			</div>
		</div>
	);
}

export default App;
