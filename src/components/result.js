import React from 'react';

function result({ result }) {
	return (
		<section className="result">
			<h3>
				{result.name}, {result.countryCode}
			</h3>
			<div className="frame">
				<p>Population</p>
				<p>{result.population}</p>
			</div>
		</section>
	);
}

export default result;
