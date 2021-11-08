const getLoginPage = async (req, res) => {
	res.send({ message: 'Login page' });
};

const getRegisterPage = async (req, res) => {
	res.send({ message: 'Register page' });
};

module.exports = {
	getLoginPage,
	getRegisterPage,
};
