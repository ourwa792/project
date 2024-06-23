const Sequelize = require("sequelize");
const seq = require("../utils/database").seq

const VideoLesson = seq.define(
  "videolesson",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      alowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      alowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      alowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      alowNull: false,
    },
    grade: {
      type: Sequelize.STRING,
      alowNull: false,
    },
    quizess:{
      type: Sequelize.DataTypes.JSON
    }
  },
  {
    timestamps: false,
  },
  {
    freezeTableName: true,
  }
);

module.exports = VideoLesson;
