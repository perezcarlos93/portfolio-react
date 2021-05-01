import React from 'react';
import javascript from '../../public/Assets/tech/javascript-logo.png';
import node from '../../public/Assets/tech/node-logo.png';
import express from '../../public/Assets/tech/expressjs-logo.png';
import mongodb from '../../public/Assets/tech/mongodb-logo.png';
import mongoose from '../../public/Assets/tech/mongoose5.png';
import mysql from '../../public/Assets/tech/mysql-logo.png';
import html from '../../public/Assets/tech/html-logo.png';
import css from '../../public/Assets/tech/css-logo.png';
import github from '../../public/Assets/tech/github-logo.png';
import react from '../../public/Assets/tech/react-logo.png';
import bootstrap from '../../public/Assets/tech/bootstrap-logo.png';
import headshot from '../../public/Assets/headshot_transparent.png';
import './style.css';

const Gallery = () => {
	return (
		<div className="row">
			<div className="techGallery col-6">
				<div className="col-2 techCol">
					{/* JavaScript */}
					<img src={javascript} alt="js" className="techIcon" id="js"></img>
					{/* Node */}
					<img src={node} alt="node" className="techIcon" id="node"></img>
					{/* React */}
					<img src={react} alt="react" className="techIcon" id="react"></img>
					{/* Express */}
					<img
						src={express}
						alt="express"
						className="techIcon"
						id="express"
					></img>
				</div>
				<br></br>
				<div className="col-2 techCol">
					{/* MongoDB */}
					<img
						src={mongodb}
						alt="mongodb"
						className="techIcon"
						id="mongo"
					></img>
					{/* Mongoose */}
					<img
						src={mongoose}
						alt="mongoose"
						className="techIcon"
						id="mongoose"
					></img>
					{/* MySQL */}
					<img src={mysql} alt="mysql" className="techIcon" id="mysql"></img>
					{/* GitHub */}
					<img src={github} alt="github" className="techIcon" id="github"></img>
				</div>
				<br></br>
				<div className="col-2 techCol">
					{/* HTML */}
					<img src={html} alt="html" className="techIcon" id="html"></img>
					{/* CSS */}
					<img src={css} alt="css" className="techIcon" id="css"></img>
					{/* Bootstrap */}
					<img
						src={bootstrap}
						alt="bootstrap"
						className="techIcon"
						id="bootstrap"
					></img>
				</div>
				<br></br>
			</div>
			<div className="col-6">
				<img id="headshot" src={headshot} alt="headshot"></img>
			</div>
		</div>
	);
};

export default Gallery;
