var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema(
	//you can also pass an object with parameters
	{

	name:{
	type: String,
	required: [true, 'Artists need a name'],
	min:1,
	max:30},

	//or you could pass reg data
	genre:String,
	bio:String,
	photo:String
	//albums:[{title:String,year:String,image:String}]

	});


module.exports = mongoose.model('Artist', artistSchema);