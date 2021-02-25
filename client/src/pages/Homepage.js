import React from 'react';
import { Row } from 'react-bootstrap';
import Gallery from '../Components/Gallery';
import NameTag from '../Components/NameTag';
import Statement from '../Components/Statement';
import Tag from '../Components/Tag';

const Homepage = () => {
	return (
		<div>
			<Row>
				<NameTag name="Carlos Perez" />
				<br></br>
				<Tag />
				<br></br>
				<Gallery />
				<Statement />
			</Row>
		</div>
	);
};

export default Homepage;
