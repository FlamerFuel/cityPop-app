import React from 'react';

function search({ handleInput, search }) {
	return (
		<section className="searchBox-wrap">
			<h2>SEARCH FOR A COUNTRY OR CITY</h2>
			<input
				type="text"
				placeholder="Search for a country or city here..."
				className="searchBox"
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	);
}

export default search;
