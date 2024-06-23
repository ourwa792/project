const Sequelize = require("sequelize");

const seq = require("../utils/database").seq;

const FeedBack = seq.define(
  "feedback",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    rate: {
      type: Sequelize.JSON,
    },
  },
  {
    timestamps: false,
  },
  {
    freezeTableName: true,
  }
);

module.exports = FeedBack;
