const express = require('express');
const cors = require('cors');

const dogs = [
	{
		id: 0,
		url: 'https://barkwire-images.s3-us-west-1.amazonaws.com/Image-from-iOS.jpg',
		description: 'Iago is kinda looking for love...not from you though',
		name: 'Iago'
	},
	{
		id: 1,
		url: 'https://barkwire-images.s3-us-west-1.amazonaws.com/Layla.JPG',
		description: 'She wants to go on a walk, but also nap time sounds good too',
		name: 'Layja'
	},
	{
		id: 2,
		url: 'https://barkwire-images.s3-us-west-1.amazonaws.com/Lucy.JPG',
		description: 'Say hello to my little friend',
		name: 'Lucy'
	},
	{
		id: 3,
		url: 'https://barkwire-images.s3-us-west-1.amazonaws.com/Noodle.JPG',
		description: 'Fall prey to the power of puppy eyes!',
		name: 'Noodle'
	},
	{
		id: 4,
		url: 'https://barkwire-images.s3-us-west-1.amazonaws.com/Yoda.jpg',
		description: 'At your service, just let me know what to do',
		name: 'Yoda'
	},
	{
		id: 5,
		url: 'https://barkwire-images.s3-us-west-1.amazonaws.com/chuck.JPG',
		description: "I don't always walk, but when I do I go on grand adventures",
		name: 'Chuck'
	},
	{
		id: 6,
		url: 'https://barkwire-images.s3-us-west-1.amazonaws.com/cilantro.JPG',
		description: "Bark bark, I'm totally a dog...what are you looking at?",
		name: 'Cilantro'
	},
	{
		id: 7,
		url: 'https://barkwire-images.s3-us-west-1.amazonaws.com/kiki.JPG',
		description: "I totally don't like you...but will you secretly be my friend?",
		name: 'Kiki'
	},
	{
		id: 8,
		url: 'https://barkwire-images.s3-us-west-1.amazonaws.com/panzer.jpg',
		description: "Wherever I am needed, I will provide aid...and lots of hugs and kisses",
		name: 'Panzer'
	},
	{
		id: 9,
		url: 'https://barkwire-images.s3-us-west-1.amazonaws.com/rex.jpg',
		description: "Lying down is nice, but a walk with my favorite person is nicer!",
		name: 'Rex'
	}
];

const app = express();

app.use(cors());

app.get('/dogs', (request, response) => response.json(dogs));
app.get('/dogs/:id', (request, response) => {
	const {id} = request.params;
	const dog = dogs[id];

	if(dog) {
		return response.json(dogs[id]);
	} else {
		return response.sendStatus(404);
	}

});

module.exports = app;