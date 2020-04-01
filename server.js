const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("sequelize");

const app = express();


const config = {
    application: {
        cors: {
            server: [{
                origin: "https://confeccionesapp-back.herokuapp.com", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                credentials: true
            }]
        }
    }
}

app.use(cors(
    config.application.cors.server
));


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
// });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Api confecciones app udeaweb application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "admin"
    });
}