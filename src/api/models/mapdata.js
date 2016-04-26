'use strict';

module.exports = function(sequelize, DataTypes) {
  let MapData = sequelize.define('MapData', {
    description: DataTypes.STRING,
    mapId: DataTypes.INTEGER,
    x: DataTypes.INTEGER,
    y: DataTypes.INTEGER,
    cellstate: DataTypes.INTEGER
  });
  return MapData;
};
