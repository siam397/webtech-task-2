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

module.exports.insertNews = async (title, content, userId) => {
    const result = await sql`
            insert into news (
                user_id, title, content
            ) values (
                ${userId}, ${title}, ${content}
            )
            returning *
            `
    return result
}