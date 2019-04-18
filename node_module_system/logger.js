//(function (exports, require, module, __filename, __dirname) {
  const EventEmitter = require('events');
  // const emitter =  new EventEmitter();
  

  let url = 'http://mylogger.io/log'


class Logger extends EventEmitter {
  log(message) {
    //send HTTP request
    console.log(message);
    //Raise an event
    this.emit('messageLogged', { id: 1, url: 'https://' });
  }
}  
  

  module.exports = Logger;

//}) // MODULE WRAPPER FUNCTION