import React from 'react';
import './style.css';

const Footer = () => {
	return (
		<footer>
			<div className="footLinks">
				<a className="link" href="site_info">
					About This Site
				</a>
				<span style={{ color: 'white' }}> | </span>
				<a className="link" href="http://www.github.com/perezcarlos93">
					Github
				</a>
			</div>
		</footer>
	);
};

export default Footer;
