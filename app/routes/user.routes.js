const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup", [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        controller.signup
    );
    app.get("/api/users/:id", controller.findOne);

    app.get("/api/users", controller.findAll);

    app.get("/api/users/identificacion/:identificacion", controller.findAllIdentificacion);

    app.post("/api/auth/signin", controller.signin);

    app.put("/api/user/edituser", controller.editUser);

    app.delete("/api/auth/users/:id", controller.delete);

}