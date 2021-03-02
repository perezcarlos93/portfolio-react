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
					<span className="oneday profileSpan">
						<strong>Location: </strong>
					</span>
					<span className="ebrima profileSpan"> {props.location}</span>
				</li>
				<li>
					<span className="oneday profileSpan">
						<strong>Email: </strong>
					</span>
					<span className="ebrima profileSpan"> {props.email}</span>
				</li>
				<li>
					<span className="oneday profileSpan">
						<strong>Bio:</strong>{' '}
					</span>
					<span className="ebrima profileSpan"> {props.bio} </span>
				</li>
				<li>
					<span className="oneday profileSpan">
						<strong>Repos:</strong>{' '}
					</span>
					<span className="ebrima profileSpan">{props.public_repos} </span>
				</li>
			</ul>
			<br></br>
			<br></br>
			<br></br>
			<div>
				<h1 className="oneday"> Top Projects</h1>
			</div>
		</div>
	);
};

export default ProfileCard;
