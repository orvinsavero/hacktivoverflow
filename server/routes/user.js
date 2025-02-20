const routes = require("express").Router()
const UserController = require("../controllers/user.js")

routes.post("/register", UserController.register)
routes.post("/login", UserController.login)

module.exports = routes