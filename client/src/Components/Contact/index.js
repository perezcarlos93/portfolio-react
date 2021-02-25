// Contact.js

import React from 'react';
import './style.css';

const Contact = () => {
	return (
		<div>
			<h1 className="ebrima">I'd love to chat! Here's my info:</h1>
			<br></br>
			<br></br>
			<div className="ebrima contact">
				<h4>Carlos Perez,</h4>
				<h4>Los Angeles, CA | Orange County, CA</h4>
				<a
					className="email link"
					href="mailto: cperez.enterprises@gmail.com"
					alt="*"
				>
					cperez.enterprises@gmail.com
				</a>
			</div>
		</div>
	);
};

export default Contact;
