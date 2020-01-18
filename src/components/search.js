import React from 'react';

function search({ handleInput, search }) {
	return (
		<section className="searchBox-wrap">
			<h2>SEARCH FOR A CITY</h2>
			<input
				type="text"
				placeholder="Enter a city here..."
				className="searchBox"
				onChange={handleInput}
				onKeyPress={search}
			/>
			<button>SEARCH</button>
		</section>
	);
}

export default search;
