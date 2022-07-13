'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Checklist extends Model {
    static associate({ User, Task }) {
      Checklist.belongsTo(User, {
        foreignKey: "user_id",
        as: "users"
      })
      Checklist.hasMany(Task, {
        foreignKey: "checklist_id",
        as: "checklists"
      })
    }
  }
  Checklist.init({
    checklist_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    checklist_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    checklist_favorited: {
        type:DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    user_id: {
        type:DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Checklist',
    tableName: 'checklists',
    timestamps: false
  });
  return Checklist;
};