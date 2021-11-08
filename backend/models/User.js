const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		require,
	},
	password: {
		type: String,
		require,
	},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
