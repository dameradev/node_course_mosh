const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config  = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet()); 
app.use('/api/courses', courses);
app.use('/', home);

// Configuration
console.log('Application Name:' + config.get('name'));
console.log('Mail Server:' + config.get('mail.host'));
console.log('Mail Password:' + config.get('mail.password'));

if (app.get('env') === 'development') { // checks the enviroment in which the app is running
  app.use(morgan('tiny')); // logs the request
  startupDebugger('Morgan enabled...'); // to console.log() this using 'debug module'
}
app.use(logger);


// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))


function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return  Joi.validate(course, schema);
}