//import fs from 'fs';
// import json from 'json';
import express from 'express';
import expressSession from 'express-session';

import { checkLogin } from './users';


const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3210;

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/login', (req, res) => {

});

app.post('/login', (req, res) => {
	if (checkLogin(username, password)) {

	}
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
