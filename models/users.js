'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  classMethods: {
    Users.associate = (models) => {
      Users.hasMany(models.Message, { as: 'messages', foreignKey: 'user_id' });
      Users.hasMany(models.Likes, { as: 'userLike', foreignKey: 'user_id' });
    }
  }
  return Users;
};
