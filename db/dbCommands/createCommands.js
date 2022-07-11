const sql = require('../databaseConfig')

module.exports.createUserTableIfDoesntExist = async () => {
    await sql`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY ,username varchar(160), password varchar(160), email varchar(160) )`
}

module.exports.createNewsTableIfDoesntExist = async () => {
    await sql`CREATE TABLE IF NOT EXISTS news (id SERIAL PRIMARY KEY ,title varchar(120), content varchar(1420),  user_id INTEGER REFERENCES users(id) NOT NULL)`
}
