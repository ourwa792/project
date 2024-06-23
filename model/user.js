const Sequelize = require("sequelize");

const seq = require("../utils/database").seq

const User = seq.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      alowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    password: {
      type: Sequelize.STRING,
      alowNull: false,
    },
    userName: {
      type: Sequelize.STRING,
      alowNull: false,
    },
    isAdmin: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    },
    email: Sequelize.STRING,
    resetToken: Sequelize.STRING,
    resetTokenExpration: Sequelize.DATE,
  },
  {
    timestamps: false,
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;
