
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FundSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Name field is required']
	},
	goal: {
		type: Number,
		required: [true, 'Goal amount is required']
	},
	amount: {
		type: Number,
		default: 0
	}
})

var Fund = mongoose.model('funds', FundSchema);

module.exports = Fund;