'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Event, Checklist}) {
      User.hasMany(Event, {
        foreignKey: "user_id",
        as: "events"
      })
      User.hasMany(Checklist, {
        foreignKey: "user_id",
        as: "checklists"
      })
    }
  }
  User.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_login_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_pw: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
  });
  return User;
};