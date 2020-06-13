module.exports = {
    HOST: "taxappy-db.ccw8ocfn0bga.us-east-1.rds.amazonaws.com",
    USER: "taxappy",
    PASSWORD: "integrador",
    DB: "loginaplicationTaxappy",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};