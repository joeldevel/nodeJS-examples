const EventEmitter = require('events');

// create a class extending EventEmitter
class MyEmitter extends EventEmitter {};

// create an instance of
const myEmitter = new MyEmitter();

// Attach listener(s) to the emitter
//or 'addListener' instead of 'on'
// 'event' is the name of the event
myEmitter.on('event', () => {
	console.log('an event occurred!');
	myEmitter.emit('saveData');
});


// emit events when needed
myEmitter.addListener('saveData', () => {
	console.log('data is saved!');
});	

setTimeout(()=>myEmitter.emit('event'), 1000);


console.log('waiting for something...');
