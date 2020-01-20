import React from 'react';
import Result from './result';

// deconstructs props as results
function results({ results }) {
	return (
		<section className="results">
			{results.map((result) => (
				<Result key={result.geoNamesID} result={result} />
			))}
		</section>
	);
}

export default results;
