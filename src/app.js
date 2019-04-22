const express = require('express')
const checkAuth = require('./API/checkAuth')
const postRouterMongoose = require('./mongoose/router/post')
const postRouterFirebase = require('./firebase/router/post')
const postRouterPostgresql = require('./postgresql/router/post')

//to initialize express app
const app = express()
//test purpose
app.get('/', (req,res)=>{res.send("chatter box!~")})
//to parse request body with JSON payloads	 
app.use(express.json())
//to check incoming api key
app.use(checkAuth)
//to create a new instance of a route connected with Mongoose
app.use(postRouterMongoose)
//to create a new instance of a route connected with Firebase
app.use(postRouterFirebase)
//to create a new instance of a route connected with Postgresql
app.use(postRouterPostgresql)

app.listen(process.env.PORT, ()=>{
	console.log("Server is up on port ", process.env.PORT)
})