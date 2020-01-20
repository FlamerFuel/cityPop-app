import React from 'react';

function result({ result }) {
	return (
		<div className="result">
			<img
				src={result.Poster}
				alt="Poster of the movie you searched is shown here.bg-bottom"
			/>
			<h3>Title: {result.Title}</h3>
			<p>Year: {result.Year}</p>
			<p>Type: {result.Type}</p>
			<hr />
		</div>
	);
}

export default result;
