import React from 'react';
import logo from '../../public/Assets/logo.png';
import helloworld from '../../public/Assets/helloworld.gif';
import './style.css';

const NameTag = () => {
	// Will require to use of useRefs to change 'bubble' to be first child element while maintaining css hover animation
	function handleHover() {
		document.getElementById('bubble').style.display = 'none';
		console.log('clicked!');
	}

	return (
		<div classNamea="row Tag">
			<h1 className="oneday" id="NameTag">
				<img id="logo" src={logo} alt="cp" onClick={handleHover}></img> Carlos
				Perez
				<img id="bubble" src={helloworld} alt="#"></img>
			</h1>
		</div>
	);
};

export default NameTag;
