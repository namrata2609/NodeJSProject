const db = require("../models");
const Users = db.users;
const Orders = db.orders;
const OrderItems = db.orderitems;

// Create and Save a new User

    exports.create = (req, res) => {       
        
        // Create a User
        const users = {
          user_name: req.body.user_name,
          password:req.body.password,
          full_name:req.body.full_name,
          description: req.body.description,
          phone_number:req.body.phone_number,
          email_id:req.body.email_id
        };
      
        // Save Tutorial in the database
        Users.create(users)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the User."
            });
          });
      };


// Find a single Tutorial with an id
/*
exports.findOne = (req, res) => {
  const id = req.params.id;

  Users.aggregate([{
    $match: {
      user_id: id
    }
  }, {
    $lookup: {
      from: 'order_details',
      localField: 'user_id',
      foreignField: id,
      as: 'order_details_response'
    }
  },
  {
    $unwind: {
      path: "$order_details_response",
      "preserveNullAndEmptyArrays": true
    }
  }, 
  {
    $project: {
      "user_id": 1,
      "name_name": 1,
      "full_name": 1,
      "$order_details_response": 1,
      "phone_number": 1,        
      "email_id": 1,
      "$order_item_details_reponse":1
    }
  },
  ], function (err, result) {
    if (err) return res.status(200).send({ success: false, result: err });
    else
      return res.status(200).send({ success: true, result: result });
  });
}
*/
exports.findOne = (req, res) => {
  const id = req.params.id;
  //Users.belongsTo(Orders,{foreignKey: 'user_id'});
  //Orders.hasMany(Users,{foreignKey : 'user_id'});
  //Orders.belongsTo(OrderItems,{foreignKey: 'order_id'});
  //OrderItems.hasMany(Orders,{foreignKey : 'order_id'});
  Users.findByPk(id,{include: [Orders]},{raw: true}).then(data=>{
    res.send(data);
})
.catch(err => {
  res.status(500).send({
    message: "Error retrieving User with id=" + id+err
  });
});
};
