import React from 'react';
import Search from './components/search';

function App() {
	// api web adress as a variable
	// exempel = "http://api.geonames.org/search?username=weknowit&q=london&maxRows=10"
	const apiurl = 'api.geonames.org/search?username=weknowit&';

	return (
		<div className="App">
			<header className="main-header">
				<h1>CityPop</h1>
			</header>
			<main>
				<Search />
			</main>
		</div>
	);
}

export default App;
