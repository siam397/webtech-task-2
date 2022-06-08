const sql = require('../databaseConfig')

module.exports.createUserTableIfDoesntExist = async () => {
    await sql`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY ,username TEXT, password TEXT, email TEXT )`
}
