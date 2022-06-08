const sql = require('../databaseConfig')

module.exports.updateNews = async (newsId, news) => {
    return sql`
        update news set ${sql(news, 'title', 'content')}
        where id = ${newsId}
        `
}

module.exports.updateUser = async (userId, user) => {
    return sql`
        update users set ${sql(user, 'username', 'email', 'password')}
        where id =${userId}
        `
}