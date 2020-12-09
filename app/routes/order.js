module.exports = app => {
    const orders = require("../controllers/order.controller.js");
  
    var router = require("express").Router();
    
    // Retrieve a single order with id
    router.get("/:id", orders.findOne);
    app.use('/api/orders', router);
  };