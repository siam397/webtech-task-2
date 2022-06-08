const sql = require('../databaseConfig')

module.exports.getUsers = async () => {
    return await sql`select * from users`
}

module.exports.getUserById = async (id) => {
    return await sql`select * from users where id=${id}`
}

module.exports.getUserByEmail = async (email) => {
    return await sql`select * from users where email=${email}`
}
