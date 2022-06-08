const sql = require('../databaseConfig')

module.exports.createUserTableIfDoesntExist = async () => {
    await sql`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY ,username varchar(60), password varchar(60), email varchar(60) )`
}

module.exports.createNewsTableIfDoesntExist = async () => {
    await sql`CREATE TABLE IF NOT EXISTS news (id SERIAL PRIMARY KEY ,title varchar(20), content varchar(420),  user_id INTEGER REFERENCES users(id) NOT NULL)`
}
