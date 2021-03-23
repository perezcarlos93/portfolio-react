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
				<div className="projectInfo">
					<p className="pitch ebrima">{props.pitch}</p>
					<p className="description ebrima">{props.description}</p>
					<br></br>
					<h4 className="contributions ebrima">{props.contributions}</h4>
					<br></br>
					<a
						className="deployed embrima link"
						rel="noreferrer"
						target="_blank"
						href={props.deployed}
					>
						Deployed link
					</a>
					<br></br>
					<a
						className="github embrima link"
						rel="noreferrer"
						target="_blank"
						href={props.github}
					>
						GitHub repo
					</a>
				</div>
			</div>
			<img className="repoImg" alt={ComradeBear} src={props.image}></img>
		</div>
	);
};

export default ProjectCard;
