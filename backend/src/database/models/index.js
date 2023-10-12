const { User, UserSchema } = require("./user.models")


function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize))
    User.associate(sequelize.models)
}

module.exports = setupModels 