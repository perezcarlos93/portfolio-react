import React, { useEffect, useState } from 'react';
import Container from '../Components/Container';
import ProfileCard from '../Components/ProfileCard';
import ProjectCard from '../Components/ProjectCard';
import ComradeBear from '../public/Assets/polarbear.gif';
import ParcIt from '../public/Assets/parcit.gif';
const axios = require('axios');

const Projects = () => {
	const [profile, setProfile] = useState({});

	useEffect(() => {
		loadProfile();
	}, []);

	function loadProfile() {
		axios.get('https://api.github.com/users/perezcarlos93').then((res) => {
			setProfile(res.data);
		});
	}

	const style = {
		header: {
			fontSize: '450%',
		},
	};

	const project = [
		{
			repo_name: 'Parc-It',
			repo: 'https://github.com/JHolden85/project3',
			pitch:
				"Public parks have seen a huge spike in use over the past year. The best way to find new parks around you has long been google. Now, Parc-It is aiming to take the lead as a 'yelp-style' app where users can visit parks in their area, rate and upload info on them as well",
			description:
				"Parc-It is a React app that allows users to create profiles and find parks in their area, upload photos of the park, and add in info about amenities available at said park. In addition, a user can create a 'Team' where they can add their friends into and 'check-in' to a park to let their team members know they are present and looking for a round of their preferred activity",
			contributions:
				'For this project, I worked heavily on the Teams aspect. Using MongoDB with Mongoose, a user can create a new team which adds them to the team by default. The user can then add their friends based off their username and see the check-in status of each of their friends. In addition, I also focused on the front end design and folder structure, aiming to make the app as easily traversable to both clients and developers',
			deployed: 'https://parcit-app.herokuapp.com/',
			github: 'https://github.com/JHolden85/project3',
			image: ParcIt,
		},
		// {
		// 	repo_name: 'Google Book Search',
		// 	repo: 'https://github.com/perezcarlos93/GoogleBooksSearch',
		// 	pitch:
		// 		'This online tool will help book lovers everywhere keep track of books they want to read',
		// 	description:
		// 		'The Google Book Search app gives its users access to the GoogleBooks API to return info on their favorite books, or books their interested in reading. From one search, the user can learn details about their searched book such as the author(s), a short synopsis, and an image of the front cover. Users can also save these books for future reference as well',
		// 	contributions: 'This app was a solo project for my UCI bootcamp',
		// 	deployed: '',
		// 	image: ComradeBear,
		// },
	];

	return (
		<Container>
			{/* <ProfileCard
				login={profile.login}
				html_url={profile.html_url}
				location={profile.location}
				email={profile.email}
				bio={profile.bio}
				public_repos={profile.public_repos}
			/> */}
			<div className="oneday" style={style.header}>
				Top Projects
			</div>
			{project.map((project) => {
				return (
					<div>
						<ProjectCard
							repo_name={project.repo_name}
							repo={project.repo}
							pitch={project.pitch}
							description={project.description}
							contributions={project.contributions}
							deployed={project.deployed}
							github={project.github}
							image={project.image}
						/>
						<br></br>
						<br></br>
					</div>
				);
			})}
		</Container>
	);
};

export default Projects;
