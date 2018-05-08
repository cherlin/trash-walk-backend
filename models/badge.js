'use strict';

module.exports = (sequelize, DataTypes) => {
  const Badge = sequelize.define('Badge', {
    achievements_id: DataTypes.UUID,
    badge: DataTypes.STRING
  }, {});
  Badge.associate = (models) => {
    Badge.hasMany(models.achievement);
  };
  return Badge;
};