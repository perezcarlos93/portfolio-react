import React from 'react';
import logo from '../../public/Assets/logo.png';
import helloworld from '../../public/Assets/helloworld.gif';
import './style.css';

const NameTag = () => {
	return (
		<div className="row Tag">
			<h1 className="oneday" id="NameTag">
				<img id="logo" src={logo} alt="cp"></img> Carlos Perez
				<img id="bubble" src={helloworld} alt="#"></img>
			</h1>
		</div>
	);
};

export default NameTag;
