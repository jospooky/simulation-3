import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import knex from 'knex';
import bcrypt from 'bcryptjs';
import _ from 'lodash';

const app = express();
app.use(bodyParser.json());

const {
	SERVER_PORT,
	DB_CONNECTION_STRING
} = process.env;

const connectedDb = knex({
	client: 'pg',
	connection: DB_CONNECTION_STRING
})

app.set('db', connectedDb)

app.post('/auth/register', (req, res) => {
	const db = req.app.get('db');

	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(req.body.password, salt, (hashErr, hash) => {

			db('users').insert({
				profile_pic: '',
				username: req.body.username,
				password: hash
			}).returning('id', 'username', 'profile_pic').then(dbRes => {
				res.status(200).send(dbRes);
			}).catch(dbErr => {
				res.status(400).send(dbErr)
			})

		})
	})
})

app.post('/auth/login', (req, res) => {
	const db = req.app.get('db');

	db('users').select().where('username', req.body.username).then(dbRes => {

		if (!_.isEmpty(dbRes)) {

			bcrypt.compare(req.body.password, dbRes[0].password, (err, compareRes) => {
				if (compareRes) {

					const user = {
						id: dbRes[0].id,
						username: dbRes[0].username,
						profile_pic: dbRes[0].profile_pic

					}

					return res.status(200).send(user)
				}
				return res.status(401).send('wrong password');
			})
		} else {
			return res.status(401).send('username not found')
		}
	})
})

app.listen(SERVER_PORT, () => {
	console.log(`now listening to ${SERVER_PORT}`)
})