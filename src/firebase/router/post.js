const firebaseDB = require('../db/firebase') 
const express = require('express')
const router = new express.Router()

//Retrieve all the posts
router.get('/firebase', async (req, res)=> {
	try {
	    await firebaseDB.ref('post')
	    .once('value', (snapshot)=> {
	      const postBucket = []
	      snapshot.forEach(childSnapShot => {
	        postBucket.push({
	          id:childSnapShot.key,
	          ...childSnapShot.val()
	        })
	      })
	      res.status(200).send(postBucket)
	    })
	} catch(e) {
		res.status(500).send(e)
	}
})

//Post one text
router.post('/firebase', async (req, res)=> {
	const { text, roomname, username } = req.body
	try{
		const firebaseResponse = await firebaseDB.ref('post').push({
			text,
			roomname,
			username
		})		
		const serverResponse = {
			id:firebaseResponse.path.pieces_[1],
			text,
			roomname,
			username
		}
		res.status(201).send(serverResponse)
	}catch(e){
		res.status(500).send(e)
	}
})

//Retrieve one post
router.get('/firebase/:id', async (req, res)=> {
	const id = req.params.id
	try {
	    await firebaseDB.ref(`post/${id}`)
	    .once('value', (snapshot)=> {
	      const serverResponse = {
	      	id,
	      	...snapshot.val()
	      }	
	      res.status(200).send(serverResponse)
	    })
	} catch(e) {
		res.status(500).send(e)
	}
})

//Delete one post
router.delete('/firebase/:id', async (req, res)=> {
	const id = req.params.id
	try{
		const firebaseResponse = await firebaseDB.ref(`post/${id}`).remove()		
		const serverResponse = {
			id,
			result:"success"
		}
		res.status(200).send(serverResponse)
	}catch(e){
		res.status(500).send(e)
	}
})

//Update one post
router.put('/firebase/:id', async (req, res)=> {
	const updates = Object.keys(req.body)
	const allowedUpdates = ['text', 'roomname']
	const isValidUpdate = updates.every(update=>allowedUpdates.includes(update))

	if (!isValidUpdate) {
		return res.status(400).send({error:"Invalid updates!"})
	}

	const id = req.params.id
	try{
		const firebaseResponse = await firebaseDB.ref(`post/${id}`).update(req.body)	
		const serverResponse = {
			id,
			result:"success"
		}
		res.status(200).send(serverResponse)
	}catch(e){
		res.status(500).send(e)
	}
})

module.exports = router