const express = require('express');
const app = express();
require('dotenv').config() // loads data from .env file

const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.urlencoded({
    extended: true
  }))

const path = require('path');
const public = path.join(__dirname,'public');
app.use(express.static(public));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); 

const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const router = require('./routes/menuRoutes');
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
  




