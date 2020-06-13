module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        movile: {
            type: Sequelize.REAL
        },
        identificacion:{
            type: Sequelize.REAL
        }
    });

    return User;
};