const Express = require("express")
const Router = Express.Router();
const Controles = require("../ServidorControlers/Controles")


Router.get("/tags", Controles.Tags)
Router.get("/cats", Controles.Cats)







module.exports = Router;