const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("classroom","admin","123456789",{
    host:"database-1.cdb4xuejm3sx.ap-south-1.rds.amazonaws.com",
    //host:"localhost",
    dialect:"mysql"
})

module.exports = {sequelize}