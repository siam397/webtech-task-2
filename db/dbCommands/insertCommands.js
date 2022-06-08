const sql = require('../databaseConfig')

module.exports.insertUser = async (username, email, password) => {
    const result = await sql`
            insert into users (
                username, email, password
            ) values (
                ${username}, ${email}, ${password}
            )
            returning *
            `
    return result
}