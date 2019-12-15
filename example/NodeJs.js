const express = require('express');
const moment = require('moment');
const router = express.Router();
const members = [
{
	id: 1,
	name: 'John Doe',
	email: 'john@mail.com',
	status: 'active'
},
{
	id: 2,
	name: 'Rose',
	email: 'rose@gmail.com',
	status: 'inactive'
},
{
	id: 3,
	name: 'Princess',
	email: 'princess@yahoo.com',
	status: 'active'
}
];
const logger = (req, res, next)=>{
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
	next();
};

router.get('/',(req,res)=>{
	res.json(members);
});
router.get('/:name', (req,res)=>{
	const found = members.some(member=>member.id === parseInt(req.params.name));
	if(found)
		res.json(members.filter(member=>member.id === parseInt(req.params.name)));
	else
		res.status(400).json({msg: `No member with the id of ${req.params.name}`});
});
module.exports = router;