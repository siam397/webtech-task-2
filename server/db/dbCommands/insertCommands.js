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

module.exports.insertBlog = async (title, content, userId, createdAt) => {
    const result = await sql`
            insert into blogs (
                user_id, title, content, createdAt
            ) values (
                ${userId}, ${title}, ${content}, ${createdAt}
            )
            returning *
            `
    return result
}