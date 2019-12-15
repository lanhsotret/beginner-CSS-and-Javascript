const myDateTime = () => Date();
var sum = (num1, num2) => num2 + num1;
//exports.sum = (num1, num2) => num2 + num1;
const PI = 3.14;
class someMathObject {
	constructor() {
		console.log('object created');
	}
}
module.exports = {
	PI : PI,
	someMathObject : someMathObject,
	myDateTime : myDateTime,
	sum : sum
}