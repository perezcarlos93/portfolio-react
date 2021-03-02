import React from 'react';
import Gallery from '../Components/Gallery';
import NameTag from '../Components/NameTag';
import Statement from '../Components/Statement';
import Tag from '../Components/Tag';

const Homepage = () => {
	return (
		<div>
			<NameTag name="Carlos Perez" />
			<br></br>
			<Tag />
			<br></br>
			<Gallery />
			<Statement />
		</div>
	);
};

export default Homepage;
