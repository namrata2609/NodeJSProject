const { options } = require("../../app");

module.exports = (sequelize, Sequelize) => {
const OrderItems = sequelize.define('order_item_details', {  

    // attributes
    order_item_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
     },
    order_id:{
       type:Sequelize.INTEGER
    },
    item_description: {
    type: Sequelize.STRING,
    foreignKey:true,
    allowNull: false
    }
    },{ schema:'test' 
    });
    return OrderItems;
};