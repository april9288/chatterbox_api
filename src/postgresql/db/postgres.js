const knex = require('knex')

const postgres = knex({
  client: 'pg',
  connection: {
    connectionString : process.env.DATABASE_URL,
    ssl: true
  }
})

//local env
// const postgres = knex({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : 'postgres',
//     password : '',
//     database : 'postgres'
//   }
// })

  module.exports = postgres