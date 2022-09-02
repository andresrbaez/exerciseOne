const { Sequelize, DataTypes } = require('sequelize');

// Establish data base connection
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'AB1234567890',
  port: 5432,
  database: 'registrations',
  logging: false,
});

module.exports = { db, DataTypes };
