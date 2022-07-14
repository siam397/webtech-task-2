const sql = require('../databaseConfig')

module.exports.updateBlogs = async (blogsId, blog) => {
    return sql`
        update blogs set ${sql(blog, 'title', 'content')}
        where id = ${blogsId}
        `
}

module.exports.updateUser = async (userId, user) => {
    return sql`
        update users set ${sql(user, 'username', 'email', 'password')}
        where id =${userId}
        `
}