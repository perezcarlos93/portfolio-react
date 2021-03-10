// Contact.js

import React from 'react';
import './style.css';

const Contact = () => {
	return (
		<div className="contactDiv">
			<h1 className="ebrima">I'd love to chat! Here's my info:</h1>
			<br></br>
			<br></br>
			<div className="ebrima contact">
				<h2>Carlos Perez,</h2>
				<h4>Los Angeles, CA | Orange County, CA</h4>
				<a
					className="email link"
					href="mailto: cperez.enterprises@gmail.com"
					alt="*"
				>
					cperez.enterprises@gmail.com
				</a>
				<br></br>
				<br></br>
				<div>
					<h2>Github:</h2>
					<a href="https://github.com/perezcarlos93" className="link">
						perezcarlos93
					</a>
				</div>
				<br></br>
				<br></br>
				<div>
					<h2>LinkedIn:</h2>
					<a
						href="https://www.linkedin.com/in/carlos-perez-a21145178/"
						className="link"
					>
						Carlos Perez
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
