/* eslint-disable import/no-anonymous-default-export */
const axios = require('axios');

const getProfile = () => {
	axios.get('https://api.github.com/users/perezcarlos93');
};

export default {
	getProfile,
};
