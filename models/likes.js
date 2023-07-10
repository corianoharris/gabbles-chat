'use strict';
module.exports = (sequelize, DataTypes) => {
  var Likes = sequelize.define('Likes', {
    message_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  classMethods: {
    Likes.associate = (models) => {
      Likes.belongsTo(models.Message, { as: 'messageLike', foreignKey: 'message_id' });
      Likes.belongsTo(models.Users, { as: 'userLike', foreignKey: 'user_id' });
    }
  }
  return Likes;
};