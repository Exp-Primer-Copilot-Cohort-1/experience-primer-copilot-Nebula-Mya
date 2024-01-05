// create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// import routes
const commentsRoute = require('./routes/comments');

// use routes
app.use('/comments', commentsRoute);

// start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));