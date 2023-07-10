'use strict';
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    user_id: DataTypes.INTEGER,
    gabblemessage: DataTypes.STRING(140)
  }, {});
  classMethods: {
    Message.associate = (models) => {
      Message.belongsTo(models.Users, { as: 'users', foreignKey: 'user_id' });
      Message.hasMany(models.Likes, { as: 'userLike', foreignKey: 'message_id' });
    }
  }
  return Message;
};