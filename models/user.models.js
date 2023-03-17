const {DataTypes} = require("sequelize")
const { sequelize } = require("../config/db")

const User = sequelize.define("users",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
    

    
}, {createdAt: false,

// If don't want updatedAt
updatedAt: false})


module.exports = {User}