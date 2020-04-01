module.exports = {
    HOST: "taxappy.czwwvekl5msz.us-east-1.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "taxappyroot",
    DB: "taxappyintegrador",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};