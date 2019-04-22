# chatterbox_api
> restful api playground :whale:

## What is it?
It's your rest api playground! Do whatever you want! I've got 3 diffrent databases for you. :sunglasses: You choose one. MongoDB :evergreen_tree: is a NoSQL database that works really well with Javascript because it looks like a JS object. Firebase :fire: is a real time based database supported by Google. It's really quick and light. Most of time, it's used for building a game server or a chat server due to its fast speed. Lastly, Postgres :elephant: is a open source based SQL database which comes with a lot of features. Anyways, once you send a request on each database, then you will see the responses would be slighly different one another. Please Enjoy. And if you have any question, then please let me know.

## Getting Started

### 1. You have to pass API Key. Ask James.

On your API requests, you must pass the unique API key :key: on the header.
Ask James for the key. :key: He knows. Your header should look like below.

```
Content-Type : application/json
x-api-key : <the API key from James!!!>

```

### 2. Your request body should look like below

```
{
	text:"I need to go grocery shopping tomorrow",
	roomname:"Torrance",
	username:"James"
}
```

### 3. Server URL is 

This is very important. On your request, below address should come first before endpoints.

```
https://chatterla.herokuapp.com/
```

### 4. Endpoints

#### :evergreen_tree: Mongoose & Mongo DB :evergreen_tree:

To retrieve all the posts
```
[GET] /mongoose 
```

To post a message
```
[POST] /mongoose
```

To retrieve a post
```
[GET] /mongoose/<id>
```

To update a post
```
[PUT] /mongoose/<id>
```

To delete a post
```
[DELETE] /mongoose/<id>
```


#### :fire: Firebase :fire: 

To retrieve all the posts
```
[GET] /firebase 
```

To post a message
```
[POST] /firebase
```

To retrieve a post
```
[GET] /firebase/<id>
```

To update a post
```
[PUT] /firebase/<id>
```

To delete a post
```
[DELETE] /firebase/<id>
```


#### :elephant: Postgresql :elephant:

To retrieve all the posts
```
[GET] /postgres 
```

To post a message
```
[POST] /postgres
```

To retrieve a post
```
[GET] /postgres/<id>
```

To update a post
```
[PUT] /postgres/<id>
```

To delete a post
```
[DELETE] /postgres/<id>
```

## Built With

* [Express.js](https://expressjs.com/) - It's a web-app framework 
* [Mogoose](https://mongoosejs.com/) - A schema-based NoSQL database
* [Firebase](https://firebase.google.com/) - A real time based database
* [Postgresql](https://www.postgresql.org/) - A open source SQL database

## Meta

James Jongho Kim 
- [Portfolio](https://april9288.github.io/) - It's my portfolio website
- [Github](https://github.com/april9288) - This is my Github page
- [Linkedin](https://www.linkedin.com/in/jongho-kim-b05618170/) - This is my Linkedin page
- april9288@gmail.com

