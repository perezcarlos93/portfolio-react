import React from 'react';
import javascript from '../../public/Assets/tech/javascript-logo.png';
import node from '../../public/Assets/tech/node-logo.png';
import express from '../../public/Assets/tech/expressjs-logo.png';
import mongodb from '../../public/Assets/tech/mongodb-logo.png';
import mysql from '../../public/Assets/tech/mysql-logo.png';
import html from '../../public/Assets/tech/html-logo.png';
import css from '../../public/Assets/tech/css-logo.png';
import github from '../../public/Assets/tech/github-logo.png';
import react from '../../public/Assets/tech/react-logo.png';
import handlebars from '../../public/Assets/tech/handlebars-logo.png';
import headshot from '../../public/Assets/headshot.png';
import './style.css';

const Gallery = () => {
	return (
		<div className="row">
			<div className="techGallery col-6">
				<img src={javascript} alt="js" className="techIcon" id="js"></img>
				<img src={node} alt="node" className="techIcon" id="node"></img>
				<img
					src={express}
					alt="express"
					className="techIcon"
					id="express"
				></img>
				<img src={mongodb} alt="mongodb" className="techIcon" id="mongo"></img>
				<img src={mysql} alt="mysql" className="techIcon" id="mysql"></img>
				<img src={html} alt="html" className="techIcon" id="html"></img>
				<img src={css} alt="css" className="techIcon" id="css"></img>
				<img src={github} alt="github" className="techIcon" id="github"></img>
				<img src={react} alt="react" className="techIcon" id="react"></img>
				<br></br>
				<img
					src={handlebars}
					alt="handlebars"
					className="techIcon"
					id="handlebars"
				></img>
			</div>
			<div className="col-6">
				<img id="headshot" src={headshot} alt="headshot"></img>
			</div>
		</div>
	);
};

export default Gallery;
