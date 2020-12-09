const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./User.js")(sequelize, Sequelize);
db.orders = require("./Order.js")(sequelize, Sequelize);
db.orderitems = require("./OrderItem.js")(sequelize, Sequelize);
db.orders.hasMany(db.orderitems,{foreignKey: 'order_id'});
db.orderitems.belongsTo(db.orders,{foreignKey : 'order_id'});
db.users.hasMany(db.orders, {foreignKey:'user_id'});
db.orders.belongsTo(db.users, {foreignKey:'user_id'});

module.exports = db;