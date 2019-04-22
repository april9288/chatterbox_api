# chatterbox_api
> restful api playground :whale:

## What is it?
It's your rest api playground! Do whatever you want! I've got 3 diffrent databases for you. You choose one.
MongoDB is a NoSQL database that works really well with Javascript because it looks like a JS object. Firebase is a real time based database supported by Google. It's really quick and light. Most of time, it's used for building a game server or a chat server due to its fast speed. Lastly, Postgres is a open source based SQL database which comes with a lot of features. Anyways, once you send a request on each database, then you will see the responses would be slighly different one another. Please Enjoy. And if you have any question, then please let me know.

## Getting Started

### 1. You have to pass API Key. Ask James.

On your API requests, you must pass the unique API key on the header.
Ask James for the key. He knows. Your header should look like below.

```
Content-Type : application/json
x-api-key : <the API key from James!!!>

```

### 2. Server URL is 

This is very important. On your request, below address should come first before endpoints

```
https://chatterbox.herokuapp.com/
```

### 3. Endpoints

#### Mongoose & Mongo DB
```
[GET] /mongoose to retrieve all the posts
[POST] /mongoose to post a text


```

Firebase
```
```

Postgresql
```
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

