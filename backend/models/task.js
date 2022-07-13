'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate({ Checklist }) {
      Task.belongsTo(Checklist, {
        foreignKey: "checklist_id",
        as: "checklists"
      })
    }
  }
  Task.init({
    task_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    task_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    task_checked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    checklist_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    timestamps: false
  });
  return Task;
};