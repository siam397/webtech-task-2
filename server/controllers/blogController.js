const insertCommands = require('../db/dbCommands/insertCommands')
const queryCommands = require('../db/dbCommands/queryCommands')
const updateCommands = require('../db/dbCommands/updateCommands')
const deleteCommands = require('../db/dbCommands/deleteCommands')
const NodeCache = require("node-cache");
const myCache = new NodeCache();

module.exports.createBlogs = async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const userId = req.user.id
    const date = new Date();
    const result = await (await insertCommands.insertBlog(title, content, userId, date))[0]
    return res.json({
        statusCode: 201,
        data: {
            ...result,
            username: req.user.username
        }
    })
}

module.exports.getBlogs = async (req, res) => {
    const blogsCache = myCache.get("blogsCache");

    if (blogsCache == undefined) {
        const result = await queryCommands.getBlogs()
        let cache = myCache.set("blogsCache", Object.values(result), 1000);
        return res.json({
            statusCode: 200,
            data: {
                blogs: Object.values(result)
            }
        })
    }

    return res.json({
        statusCode: 200,
        data: {
            blogs: blogsCache
        }
    })

}

module.exports.getBlogsById = async (req, res) => {
    const result = await queryCommands.getBlogsById(req.params.blogsId)
    return res.json({
        statusCode: 200,
        data: {
            blogs: result['0']
        }
    })
}

module.exports.getBlogsOfSingleUser = async (req, res) => {
    const result = await queryCommands.getBlogsOfSingleUser(req.params.userId)
    return res.json({
        statusCode: 200,
        data: {
            blogs: Object.values(result)
        }
    })
}

module.exports.getBlogsOfCurrentUser = async (req, res) => {
    const result = await queryCommands.getBlogsOfSingleUser(req.user.id)
    return res.json({
        statusCode: 200,
        data: {
            blogs: Object.values(result)
        }
    })
}

module.exports.updateBlogs = async (req, res) => {
    const result = await (await queryCommands.getBlogsById(req.params.blogsId))['0']

    if (req.user.id !== result.user_id) {
        return res.json({
            statusCode: 404,
            message: "You cant edit the blogs of someone else"
        })
    }

    const updatedNews = {
        ...result
    }
    updatedNews.title = req.body.title ?? result.title;
    updatedNews.content = req.body.content ?? result.content;
    console.log(updatedNews);
    const updatedNewsResult = await updateCommands.updateBlogs(req.params.blogsId, updatedNews)
    return res.json({
        statusCode: 202,
        data: {
            blogs: { ...updatedNewsResult }
        }
    })

}

module.exports.deleteBlogs = async (req, res) => {
    const result = await (await queryCommands.getBlogsById(req.params.blogsId))['0']

    if (req.user.id !== result.user_id) {
        return res.json({
            statusCode: 404,
            message: "You cant delete the blogs of someone else"
        })
    }
    const deleteResult = await deleteCommands.deleteBlogs(req.params.blogsId)
    console.log(deleteResult);
    return res.json({
        statusCode: 204
    })
}