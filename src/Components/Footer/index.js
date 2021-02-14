import React from 'react';
import './style.css';

const Footer = () => {
	return (
		<footer>
			<div class="footLinks">
				<a class="link" href="site_info">
					About This Site
				</a>
				<span style={{ color: 'white' }}> | </span>
				<a class="link" href="http://www.github.com/perezcarlos93">
					Github
				</a>
			</div>
		</footer>
	);
};

export default Footer;
