import React from 'react';
import '../index.css';

function Boxes({ header, texts }) {
	return (
		<div className="boxes">
			<h3>{header}</h3>
			<p>{texts}</p>
			<h3>Number of fuckes given</h3>
		</div>
	);
}

export default Boxes;
