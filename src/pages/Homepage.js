import React from 'react';
import { Row } from 'react-bootstrap';
import Gallery from '../Components/Gallery';
import NameTag from '../Components/NameTag';
import Tag from '../Components/Tag';

const Homepage = () => {
	return (
		<div>
			<Row>
				<NameTag />
				<br></br>
				<Tag />
				<br></br>
				<Gallery />
			</Row>
		</div>
	);
};

export default Homepage;
