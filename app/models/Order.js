module.exports = (sequelize, Sequelize) => {
const Orders = sequelize.define('order_details', {  

    // attributes
    order_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
     },
    user_id:{
       type:Sequelize.INTEGER
    },
    order_number: {
    type: Sequelize.STRING,
    allowNull: false
    },
    order_description: {
    type: Sequelize.STRING
    }
    },{ schema:'test' }
);
    return Orders;
};