const knex = require('knex')

let connection

if (process.env.PORT === '3001') {
	connection = {
	    host : process.env.POSTGRES_LOCAL_HOST,
	    user : process.env.POSTGRES_LOCAL_USER,
	    password : process.env.POSTGRES_LOCAL_PASSWORD,
	    database : process.env.POSTGRES_LOCAL_DATABASE
	}
} else {
	connection = {
		connectionString : process.env.DATABASE_URL,
   		ssl: true
	}
}

const postgres = knex({
  client: 'pg',
  connection
})

module.exports = postgres
