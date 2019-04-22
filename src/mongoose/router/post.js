require('../db/mongoose')
const express = require('express')
const Post = require('../model/post')
const router = new express.Router()

//Retrieve all the posts
router.get('/mongoose', async (req, res)=> {
	// const limit = Number(req.query.limit) || 100
	try{
		const post = await Post.find({}).sort({createdAt: 'desc'}).limit(100);
		if (!post) {
			return res.status(404).send()
		}
		res.status(200).send(post)
	}catch(e){
		res.status(500).send()
	}
})

//Post one text
router.post('/mongoose', async (req, res)=> {
	const { text, roomname, username } = req.body
	const newPost = new Post({text,roomname,username})
	try{
		await newPost.save()
		res.status(201).send(newPost)
	}catch(e){
		res.status(500).send(e)
	}
})

//Retrieve one post
router.get('/mongoose/:id', async (req, res)=> {
	const _id = req.params.id
	try{
		const post = await Post.findOne({_id})
		if (!post) {
			return res.status(404).send()
		}
		res.status(200).send(post)
	}catch(e){
		res.status(500).send()
	}
})

//Delete one post
router.delete('/mongoose/:id', async (req, res)=> {
	const _id = req.params.id
	try{
		const post = await Post.findOneAndDelete({_id})
		if (!post){
			return res.status(404).send()
		}
		res.status(200).send(post)
	}catch(e){
		res.status(500).send(e)
	}
})

//Update one post
router.put('/mongoose/:id', async (req, res)=> {
	const updates = Object.keys(req.body)
	const allowedUpdates = ['text', 'roomname']
	const isValidUpdate = updates.every(update=>allowedUpdates.includes(update))

	if (!isValidUpdate) {
		return res.status(400).send({error:"Invalid updates!"})
	}

	const _id = req.params.id
	try{
		const post = await Post.findOne({_id})
		if (!post) {
			return res.status(404).send()
		}
		updates.forEach(update=>post[update]=req.body[update])
		await post.save()
		res.send(post)
	}catch(e){
		res.status(500).send(e)
	}
})

module.exports = router