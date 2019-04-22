const postgresql = require('../db/postgres') 
const express = require('express')
const router = new express.Router()

// Retrieve all the posts
router.get('/postgres', async (req, res)=> {
	try{
		const allPosts = await postgresql('posts')
		.select('*').limit(100).orderBy('id', 'desc')
		res.status(200).send(allPosts)
	}catch(e){
		res.status(500).send(e)
	}
})

//Post one text
router.post('/postgres', async (req, res)=> {
	const { text, roomname, username } = req.body
	try{
		const newPost = await postgresql('posts')
		.returning(['id','text','roomname','username','createdat'])
		.insert({
			text,
			roomname,
			username,
			createdat: new Date()
		})
		res.status(201).send(newPost[0])
	}catch(e){
		res.status(500).send(e)
	}
})

//Retrieve one post
router.get('/postgres/:id', async (req, res)=> {
	const id = req.params.id
	try{
		const onePost = await postgresql('posts')
		.select('*').where({id})
		res.status(200).send(onePost[0])
	}catch(e){
		res.status(500).send(e)
	}
})

//Delete one post
router.delete('/postgres/:id', async (req, res)=> {
	const id = req.params.id
	try{
		const onePost = await postgresql('posts')
		.where({id}).del().returning('*')
		res.status(200).send(onePost[0])
	}catch(e){
		res.status(500).send(e)
	}
})

//Update one post
router.put('/postgres/:id', async (req, res)=> {
	const updates = Object.keys(req.body)
	const allowedUpdates = ['text', 'roomname']
	const isValidUpdate = updates.every(update=>allowedUpdates.includes(update))

	if (!isValidUpdate) {
		return res.status(400).send({error:"Invalid updates!"})
	}

	const id = req.params.id
	try{
		const onePost = await postgresql('posts')
		.where({id})
  		.update(req.body)
  		.returning('*')
		res.status(200).send(onePost[0])
	}catch(e){
		res.status(500).send(e)
	}
})

module.exports = router


/*
//to get all the data
select * from posts;

//to insert some data
INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)
VALUES (value1, value2, value3,...valueN);

//to delete a data
DELETE FROM table_name
WHERE [condition];

//to add a col
ALTER TABLE posts ADD createdAt timestamp;


*/