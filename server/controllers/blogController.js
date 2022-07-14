const insertCommands = require('../db/dbCommands/insertCommands')
const queryCommands = require('../db/dbCommands/queryCommands')
const updateCommands = require('../db/dbCommands/updateCommands')
const deleteCommands = require('../db/dbCommands/deleteCommands')
const NodeCache = require("node-cache");
const myCache = new NodeCache();

module.exports.createNews = async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const userId = req.user.id
    const result = await (await insertCommands.insertNews(title, content, userId))[0]
    return res.json({
        statusCode: 201,
        data: {
            ...result,
            username: req.user.username
        }
    })
}

module.exports.getNews = async (req, res) => {
    const newsCache = myCache.get("newsCache");

    if (newsCache == undefined) {
        const result = await queryCommands.getNews()
        let cache = myCache.set("newsCache", Object.values(result), 1000);
        return res.json({
            statusCode: 200,
            data: {
                news: Object.values(result)
            }
        })
    }

    return res.json({
        statusCode: 200,
        data: {
            news: newsCache
        }
    })

}

module.exports.getNewsById = async (req, res) => {
    const result = await queryCommands.getNewsById(req.params.newsId)
    return res.json({
        statusCode: 200,
        data: {
            news: result['0']
        }
    })
}

module.exports.getNewsOfSingleUser = async (req, res) => {
    const result = await queryCommands.getNewsOfSingleUser(req.params.userId)
    return res.json({
        statusCode: 200,
        data: {
            news: Object.values(result)
        }
    })
}

module.exports.getNewsOfCurrentUser = async (req, res) => {
    const result = await queryCommands.getNewsOfSingleUser(req.user.id)
    return res.json({
        statusCode: 200,
        data: {
            news: Object.values(result)
        }
    })
}

module.exports.updateNews = async (req, res) => {
    const result = await (await queryCommands.getNewsById(req.params.newsId))['0']

    if (req.user.id !== result.user_id) {
        return res.json({
            statusCode: 404,
            message: "You cant edit the news of someone else"
        })
    }

    const updatedNews = {
        ...result
    }
    updatedNews.title = req.body.title ?? result.title;
    updatedNews.content = req.body.content ?? result.content;
    console.log(updatedNews);
    const updatedNewsResult = await updateCommands.updateNews(req.params.newsId, updatedNews)
    return res.json({
        statusCode: 202,
        data: {
            news: { ...updatedNewsResult }
        }
    })

}

module.exports.deleteNews = async (req, res) => {
    const result = await (await queryCommands.getNewsById(req.params.newsId))['0']

    if (req.user.id !== result.user_id) {
        return res.json({
            statusCode: 404,
            message: "You cant delete the news of someone else"
        })
    }
    const deleteResult = await deleteCommands.deleteNews(req.params.newsId)
    console.log(deleteResult);
    return res.json({
        statusCode: 204
    })
}