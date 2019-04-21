const express = require('express')
require('./mongoose/db/mongoose')
const postRouter = require('./mongoose/router/post')

const app = express()
const port = process.env.PORT

//It parses request body with JSON payloads	 
app.use(express.json())
//It creates a new instance of a route
app.use(postRouter)

app.get('/', (req,res)=>{
	res.send("chatter box!~")
})

app.listen(port, ()=>{
	console.log("Server is up on port ", port)
})