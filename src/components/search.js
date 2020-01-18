import React from 'react';

function search(props) {
	return (
		<section className="searchBox-wrap">
			<h2>SEARCH BY CITY</h2>
			<input
				type="text"
				placeholder="Enter a city here..."
				className="searchBox"
				onChange={props.handleInput}
			/>
			<button>SEARCH</button>
		</section>
	);
}

export default search;
