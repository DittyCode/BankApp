const User = require('./../models/User');
const getLoginPage = async (req, res) => {
	res.send({ message: 'Login page' });
};

const registerUser = async (req, res) => {
	const { name, password } = req.body;
	try {
		if (!name) return res.send({ message: 'Name input must be valid' });
		if (!password) return res.send({ message: 'Password input must be valid' });

		const otherUserName = await User.find({ name });

		if (otherUserName.length)
			return res.send({ message: 'Username exist in database' });

		const user = await User.create({
			name,
			password,
		});
		res.status(200).send({
			message: 'User register succesful',
			user,
		});
	} catch (err) {
		return res.status(404).send({ err });
	}
};

module.exports = {
	getLoginPage,
	registerUser,
};
