const knex = require('knex')
const postgres = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'postgres'
  }
})

  module.exports = postgres