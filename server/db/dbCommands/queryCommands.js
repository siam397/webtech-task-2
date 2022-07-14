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

module.exports.getBlogs = async () => {
    return await sql
        `select blogs.id,title,content,username,user_id, createdAt
        from blogs
        join users on users.id=blogs.user_id
        `
}

module.exports.getBlogsById = async (blogId) => {
    return await sql
        `select blogs.id,title,content,username,user_id ,createdAt
        from blogs
        join users on users.id=blogs.user_id
        where blogs.id=${blogId}
        `
}

module.exports.getBlogsOfSingleUser = async (userId) => {
    return await sql
        `select blogs.id,title,content,username,user_id, createdAt 
        from blogs
        join users on users.id=blogs.user_id
        where users.id=${userId}
        `
}
