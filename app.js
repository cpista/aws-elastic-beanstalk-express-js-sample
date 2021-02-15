const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Andy you can learn too Continuous integration in AWS with GIT & AWS stage'));


app.listen(port);
console.log(`App running on http://localhost:${port}`);
