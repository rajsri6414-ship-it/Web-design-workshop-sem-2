const EventEmitter = require('events');
class button extends EventEmitter {}
const button = new button();
button.on('click', () => {
    console.log('button clicked');
});
button,on('mouseover', () => {
    console.log('mouse over button');
});
button.emit('click');
button.emit('mouseover');
