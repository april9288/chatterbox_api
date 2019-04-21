const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
		trim: true,
		minlnegth: 1
	},
	roomname: {
		type: String,
		required: true,
		trim: true,
		minlnegth: 1
	},
	username:{
		type: String,
		required: true,
		trim: true,
		minlnegth: 1
	}
}, {
	timestamps: true
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post