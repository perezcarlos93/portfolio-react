// Contact.js
import React from 'react';
import './style.css';
import Resume from './CPerez_Resume.pdf';
const fileDownload = require('js-file-download');

const Contact = () => {
	// const download = () => {
	// 	fileDownload('CPerez_Resume.pdf');
	// };

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
					<h2>GitHub:</h2>
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
			<div className="contact link">
				<button className="download">
					<a id="download" href={Resume} download="./CPerez_Resume.pdf">
						Download my resume
					</a>
				</button>
			</div>
		</div>
	);
};

export default Contact;
