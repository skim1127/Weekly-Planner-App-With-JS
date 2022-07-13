'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ User }) {
      Event.belongsTo(User, {
        foreignKey: "user_id",
        as: "users"
      })
    }
  }
  Event.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    event_end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  });
  return Event;
};