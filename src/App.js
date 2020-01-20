import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/search';
import Results from './components/results';

function App() {
	// default values for state
	const [state, setState] = useState({
		s: '', // empty search string
		results: [], // empty array
		selected: {} // empty Object
	});
	// api base url as a variable
	const apiurl =
		'http://api.geonames.org/search?username=weknowit&type=json&maxRows=3&style=LONG&orderby=population';
	// 'http://www.omdbapi.com/?i=tt3896198&apikey=743f4ebf&type';

	// listen for keyboard "Enter"
	const search = (e) => {
		if (e.key === 'Enter') {
			axios(apiurl + '&q=' + state.s).then(({ data }) => {
				let results = data.geonames;

				setState((prevState) => ({ ...prevState, results: results }));
			});
		}
	};

	// listens for input typing and handle value as "s"
	const handleInput = (e) => {
		let s = e.target.value;

		// setting previous state to the new value of input
		setState((prevState) => {
			return { ...prevState, s: s };
		});
	};

	return (
		<div className="App">
			<header className="main-header">
				<h1>CityPop</h1>
			</header>
			<main>
				<Search handleInput={handleInput} search={search} />
				<Results results={state.results} />
			</main>
		</div>
	);
}

export default App;
