const Sequelize = require('sequelize')
const seq = require('../utils/database').seq

const Resources = seq.define('resources',{
    id : {
        type: Sequelize.INTEGER,
        allowNull : false,
        autoIncrement: true,
        primaryKey : true
    },
    url: {
       type: Sequelize.STRING,
       allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
  },
  {
    timestamps: false,
  },
  {
    freezeTableName: true
  }
  )

module.exports = Resources