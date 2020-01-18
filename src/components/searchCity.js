import React from 'react';

function search() {
	return (
		<section className="searchBox-wrap">
			<h2>SEARCH BY CITY</h2>
			<input
				type="text"
				placeholder="Enter a city here..."
				className="searchBox"
			/>
			<button>SEARCH</button>
		</section>
	);
}

export default search;
