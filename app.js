const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This will start learn me AWS!'));
app.get('/', (req, res) => res.send('Second deployment of web-app using Pipe-line commmands'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
