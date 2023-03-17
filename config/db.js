const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("march15","root","Saurav@07",{
    host:"localhost",
    dialect:"mysql"
})

module.exports = {sequelize}