//Dependencies
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
require("dotenv").config();

//  Controller
const routes = require('./controllers/routes.js');

//  Initialization
const app = express();

//  Port selection
app.set('port', process.env.PORT);

// Parser
app.use(bodyParser.urlencoded({extended: true}));

// Public Resources
app.use(express.static(path.join(__dirname, 'public')));

//  Routes
routes(app);

// Handlebars as extension '.hbs'
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', handlebars({extname: '.hbs', defaultLayout: 'main'}));


app.listen(app.get('port'), () => {
    console.log(`Listening on port: ${app.get('port')}`);
});