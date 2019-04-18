// const log = require('./logger');
// log("message");


// PATH MODULE
const path = require('path');

var pathObj = path.parse(__filename);


// OPERATIONG SYSTEM MODULE
const os = require('os');

var totalMemory = os.totalmem(); //total memory of the machine
var freeMemory =os.freemem();

// FILE SYSTEM MODULE
const fs = require('fs');

var files = fs.readdirSync('./');
// var files1 = fs.readdir('$', function(err, files) {
//   if (err) console.log('Error', err);
//   else console.log('Result', files);
// });

// EVENT MODULE
// const EventEmitter = require('events');
// const emitter =  new EventEmitter();



const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged',(eventArg) => {
  console.log("Listener called", eventArg);
});
// logger.log('message');


// Raise an event
// emitter.emit('messageLogged', { id: 1, url: 'https://' });


// HTTP MODULE

const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.write("Hello World");
    res.end();
  }

  if(req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

// server.on('connection', (socket)=> {
//   console.log('New connection...')
// })

server.listen(3000);

console.log('Listening on port 3000...')