import React from 'react';
import './style.css';

const ProfileCard = (props) => {
	return (
		<div className="ebrima" id="profile">
			<h1 className="oneday">{props.login}</h1>
			<a className="link" id="profileLink" href={props.html_url} alt="#">
				My Github
			</a>
			<br></br>
			<br></br>
			<ul>
				<li>
					<span className="oneday profileSpan">Company: </span>
					{props.company}
				</li>
				<li>
					<span className="oneday profileSpan">Location: </span>
					{props.location}
				</li>
				<li>
					<span className="oneday profileSpan">Email: </span>
					{props.email}
				</li>
				<br></br>
				<li>
					<span className="oneday profileSpan">Bio: </span>
					{props.bio}
				</li>
				<br></br>
				<li>
					<span className="oneday profileSpan">Repos: </span>
					{props.public_repos}
				</li>
			</ul>
		</div>
	);
};

export default ProfileCard;
