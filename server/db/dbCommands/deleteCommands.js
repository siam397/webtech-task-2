const sql = require('../databaseConfig')

module.exports.deleteBlogs = async (blogId) => {
    return sql`
        delete from blogs 
        where id=${blogId}
    `
}