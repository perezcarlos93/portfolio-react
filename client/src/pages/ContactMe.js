import React from 'react';
import Contact from '../Components/Contact';
import NameTag from '../Components/NameTag';

const ContactMe = () => {
	return (
		<div>
			<NameTag name="Contact Info" />
			<Contact />
		</div>
	);
};

export default ContactMe;
