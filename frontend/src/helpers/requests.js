import axios from 'axios';

const registerUser = ({ userName, password }) => {
	return axios.post('http://localhost:3000/register', {
		name: userName,
		password,
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export default registerUser;
