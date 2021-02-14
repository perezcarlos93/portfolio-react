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
import './style.css';

const Gallery = () => {
	return (
		<div class="techGallery row">
			<img src={javascript} alt="js" class="techIcon" id="js"></img>
			<img src={node} class="techIcon" id="node"></img>
			<img src={express} class="techIcon" id="express"></img>
			<img src={mongodb} class="techIcon" id="mongo"></img>
			<img src={mysql} class="techIcon" id="mysql"></img>
			<img src={html} class="techIcon" id="html"></img>
			<img src={css} class="techIcon" id="css"></img>
			<img src={github} class="techIcon" id="github"></img>
			<img src={react} class="techIcon" id="react"></img>
			<img src={handlebars} class="techIcon" id="handlebars"></img>

			<img id="headshot" src="/Assets/headshot.png"></img>
		</div>
	);
};

export default Gallery;
