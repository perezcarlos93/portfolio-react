// ProjectCard.js

import React from 'react';
import ComradeBear from '../../public/Assets/polarbear.gif';
import './style.css';

const ProjectCard = (props) => {
	return (
		<div className="ProjectCard flex">
			<div>
				<a className="repoName ebrima link" href={props.repo}>
					{props.repo_name}
				</a>
				<br></br>
				<p className="pitch ebrima">{props.pitch}</p>
				<p className="description ebrima">{props.description}</p>
				<br></br>
				<h4 className="contributions ebrima">{props.contributions}</h4>
				<h3 className="deployed embrima link">{props.deployed}</h3>
			</div>
			<img className="repoImg" alt={ComradeBear} src={props.image}></img>
		</div>
	);
};

export default ProjectCard;
