import React, { useEffect, useState } from 'react';
import Container from '../Components/Container';
import ProfileCard from '../Components/ProfileCard';
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

	return (
		<Container>
			<ProfileCard
				login={profile.login}
				html_url={profile.html_url}
				company={profile.company}
				location={profile.location}
				email={profile.email}
				bio={profile.bio}
				public_repos={profile.public_repos}
			/>
		</Container>
	);
};

export default Projects;
