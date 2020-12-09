const db = require("../models");
const Orders = db.orders;
const OrderItems = db.orderitems;

exports.findOne = (req, res) => {
    const id = req.params.id;
   
    Orders.findByPk(id,{include: [OrderItems]},{raw: true})
      .then(data => {
      res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Order with id=" + id+err
    });
  });
  };
  