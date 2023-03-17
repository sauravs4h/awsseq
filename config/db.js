const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("classroom",process.env.sql_profile,process.env.sql_pass,{
    host:"database-1.cdb4xuejm3sx.ap-south-1.rds.amazonaws.com",
    //host:"localhost",
    dialect:"mysql"
})

module.exports = {sequelize}