// var Module1 = require('./myfirstmodule');
// console.log(new Module1.someMathObject());
// console.log(Module1.myDateTime());
// console.log(Module1.PI);
// console.log(Module1.sum(1,2));
// const _ = require('lodash');
// let example = _.fill([1,2,7,4,5],"tomato",1,3);
// console.log(example);

// const express = require('express');
// const app = express();

// app.get('/', (req,res)=>{
// 	res.send('hello world');
// })
// app.get('/example',(req,res)=>{
// 	res.send('hitting exemple route');
// })
// app.get('/example/:name/:age', (req,res)=>{
// 	console.log(req.params);
// 	console.log(req.query);
// 	res.send(`${req.params.name}:${req.params.age}`);
// })
// app.listen(8080);
const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static(path.join(__dirname, 'HtmlCssJavacript')));
app.use(bodyParser.urlencoded({extended: false}));

app.post('/demo.html',(req,res)=>{
	console.log(req.body);
	const schema = Joi.object().keys({
	        email: Joi.string().trim().email().required(),
			password: Joi.string().min(5).max(10).required()
	});
	Joi.validate(req.body,schema,(err,result)=>{
		if(err){
			console.log(err);
			res.send('an error has occurred');
		}
		console.log(result);
		res.send('successfully posted date');
	})

});
app.listen(8080);