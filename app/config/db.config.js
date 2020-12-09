module.exports = {
    HOST: "150.136.110.79",
    USER: "intellinum",
    PASSWORD: "admin",
    DB: "iwmsdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };