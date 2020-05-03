module.exports = {
    HOST: "35.224.213.221",
    USER: "root",
    PASSWORD: "root",
    DB: "taxappyintegrador",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};