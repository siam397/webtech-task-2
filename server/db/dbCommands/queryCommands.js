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

module.exports.getNews = async () => {
    return await sql
        `select news.id,title,content,username,user_id 
        from news
        join users on users.id=news.user_id
        `
}

module.exports.getNewsById = async (newsId) => {
    return await sql
        `select news.id,title,content,username,user_id 
        from news
        join users on users.id=news.user_id
        where news.id=${newsId}
        `
}

module.exports.getNewsOfSingleUser = async (userId) => {
    return await sql
        `select news.id,title,content,username,user_id 
        from news
        join users on users.id=news.user_id
        where users.id=${userId}
        `
}
