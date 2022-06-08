const sql = require('../databaseConfig')

module.exports.deleteNews = async (newsId) => {
    return sql`
        delete from news 
        where id=${newsId}
    `
}