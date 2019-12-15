const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial', ()=>{
	console.log('tutorial event has occurred');
});
eventEmitter.emit('tutorial');
class Person extends EventEmitter{
	constructor(name){
		super();
		this._name = name;
	}
	get name(){
		return this._name;
	}
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');
pedro.on('name', ()=>{
	console.log('my name is ' + pedro.name);
});
christina.on('name', ()=>{
	console.log('may name is ' + christina.name);
})
pedro.emit('name');
christina.emit('name');