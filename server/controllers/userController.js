const queryCommands = require('../db/dbCommands/queryCommands')
const updateCommands = require('../db/dbCommands/updateCommands')

module.exports.getCurrentUserProfile = async (req, res) => {

    const user = await (await queryCommands.getUserById(req.user.id))['0']

    return res.json({
        statusCode: 200,
        data: {
            user: { ...user }
        }
    })
}

module.exports.getUserById = async (req, res) => {
    const user = await (await queryCommands.getUserById(req.params.userId))['0']

    return res.json({
        statusCode: 200,
        data: {
            user: { ...user }
        }
    })
}


module.exports.updateUser = async (req, res) => {
    console.log(req.params.userId,req.user.id);
    if (req.params.userId != req.user.id) {
        return res.json({
            statusCode: 404,
            message: "You cant edit profile of someone else"
        })
    }

    const user = await (await queryCommands.getUserById(req.params.userId))['0']

    const updatedUser = {
        ...user
    }
    console.log(req.body);
    updatedUser.username = req.body.username ?? updatedUser.username
    updatedUser.email = req.body.email ?? updatedUser.email
    updatedUser.password = req.body.password ? SHA256(req.body.password).toString() : updatedUser.password
    console.log(updatedUser);

    const updatedUserResult = await updateCommands.updateUser(req.params.userId, updatedUser)
    return res.json({
        statusCode: 202,
        data: {
            news: { ...updatedUserResult }
        }
    })
}