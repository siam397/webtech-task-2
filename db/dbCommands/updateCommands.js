const sql = require('../databaseConfig')

module.exports.updateNews = async (newsId, news) => {
    return sql`
        update news set ${sql(news, 'title', 'content')}
        where id = ${newsId}
        `
}