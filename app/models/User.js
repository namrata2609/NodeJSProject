module.exports = (sequelize, Sequelize) => {
const Users = sequelize.define('user_details', {  

    // attributes
    user_id:{
       type:Sequelize.INTEGER,
       primaryKey:true,
       autoIncrement: true
    },
    user_name: {
    type: Sequelize.STRING,
    allowNull: false
    },
    full_name: {
    type: Sequelize.STRING
    // allowNull defaults to true
    },
    phone_number: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    },
    email_id:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    }
    },{ schema:'test' }    
    );
    return Users;
};