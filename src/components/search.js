import React from 'react';

function search({ handleInput, search }) {
	return (
		<section className="searchBox-wrap">
			<h2>SEARCH FOR A COUNTRY OR CITY</h2>
			<input
				type="text"
				placeholder="Type a country or city... "
				className="searchBox"
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	);
}

export default search;
