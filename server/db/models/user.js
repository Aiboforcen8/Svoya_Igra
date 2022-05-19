'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_name: {
      allowNull: false,
      type: DataTypes.TEXT
    }, 
    user_email: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    user_password: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};