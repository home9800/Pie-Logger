//Must require the packages below..
const sequelize = require('../config/connection');
const Sequelize = require('sequelize');

const Pie = sequelize.define('pie', {
    Pie_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    pie_name: {
      type: Sequelize.STRING
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
}, {
    freezeTableName: true,
    timestamps: false,
    underscored: true
});

module.exports = Pie;