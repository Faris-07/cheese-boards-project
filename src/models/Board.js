const {sequelize} = require('../db/db');
const { Sequelize } = require('sequelize');

let Board = sequelize.define('board', {
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    rating: Sequelize.NUMBER
})

module.exports = {Board};