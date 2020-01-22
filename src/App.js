import React from 'react';
import Boxes from './components/boxes';

// detta blir en component

function App() {
	return (
		<div className="app">
			<Boxes header="header 1" texts="random texts goes here 1" />
			<Boxes header="header 2" texts="random texts goes here 2" />
			<Boxes header="header 3" texts="random texts goes here 3" />
			<Boxes header="header 4" texts="random texts goes here 4" />
		</div>
	);
}

export default App;
