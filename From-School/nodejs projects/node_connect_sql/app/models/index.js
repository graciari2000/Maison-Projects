const dbConfig = require("/workspaces/Maison-Projects/From-School/nodejs projects/node_connect_sql/config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Correct way to access the Op object
const { Op } = Sequelize;

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op; // Assign Op directly to db

db.tutorials = require("/workspaces/Maison-Projects/From-School/nodejs projects/node_connect_sql/app/routes/tutorial.routes.js")(sequelize, Sequelize);

module.exports = { db, DataTypes };
