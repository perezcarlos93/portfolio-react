import React from 'react';
import logo from '../../public/Assets/logo.png';
import helloworld from '../../public/Assets/helloworld.gif';
import './style.css';

const NameTag = (props) => {
	return (
		<div className="row Tag">
			<h1 className="oneday" id="NameTag">
				<img id="logo" src={logo} alt="cp"></img> <span>{props.name}</span>
				<img id="bubble" src={helloworld} alt="#"></img>
			</h1>
		</div>
	);
};

export default NameTag;
