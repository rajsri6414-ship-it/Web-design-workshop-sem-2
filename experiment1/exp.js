const eventemitter = require('events');
const myemitter = new eventemitter();

myemitter.on('event', (name) => {
    console.log('hello, $(name)! welcome to node js');
}
);
myemitter.on('exit', () => {
    console.log('application closed');
});
myemitter.emit('event', 'Tarun');
myemitter.emit('exit');
