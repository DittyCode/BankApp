require('dotenv').config({ path: `${__dirname}/../config/.env` });
const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL;

const initDB = async () => {
	try {
		await mongoose.connect(MONGODB_URL);
		console.log('Succesfully init database');
	} catch (err) {
		return err;
	}
};

module.exports = initDB;
