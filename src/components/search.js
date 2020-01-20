import React from 'react';

function search({ handleInput, search }) {
	return (
		<section className="searchBox-wrap">
			<h2>SEARCH FOR A MOVIE</h2>
			<input
				type="text"
				placeholder="Enter a movie here..."
				className="searchBox"
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	);
}

export default search;
