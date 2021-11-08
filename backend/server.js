require('dotenv').config({ path: `${__dirname}/../config/.env` });
const express = require('express');
const authRoute = require('./routes/authRoute');
const db = require('./db/connect');
const cors = require('cors');
const app = express();

const SERVER_PORT = process.env.SERVER_PORT || 5000;

// Middlewares

app.use(cors());
app.use(express.json());

// Routes

app.use('/', authRoute);

// Listeners

const initServer = async () => {
	try {
		await db();
		app.listen(SERVER_PORT, () => {
			console.log(`Server is listening at port : ${SERVER_PORT}`);
		});
	} catch (err) {
		return err;
	}
};

initServer();
