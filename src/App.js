import React, { useState } from 'react';
import Search from './components/search';

function App() {
	// default values for state
	const [state, setState] = useState({
		s: '', // empty search string.
		results: [], // empty array.
		selected: {} // empty Object.
	});
	// api base url as a variable
	// exempel = "http://api.geonames.org/search?username=weknowit&q=london&maxRows=10"
	const apiurl = 'api.geonames.org/search?username=weknowit&maxRows=10&';

	// listens for input typing and handle value "as s"
	const handleInput = (e) => {
		let s = e.target.value;

		// setting previous state to the new value
		setState((prevState) => {
			return { ...prevState, s: s };
		});

		console.log(state.s);
	};

	return (
		<div className="App">
			<header className="main-header">
				<h1>CityPop</h1>
			</header>
			<main>
				<Search handleInput={handleInput} />
			</main>
		</div>
	);
}

export default App;
