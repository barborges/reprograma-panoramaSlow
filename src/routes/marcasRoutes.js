const express = require ("express")
const router = express.Router()

const controllerLogin = require("../controllers/loginController")

const controller = require("../controllers/marcasController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)

router.patch("/:id", controllerLogin.autentication, controller.atualizaMarca)

router.post("/", controllerLogin.autentication, controller.criaMarcas)


router.delete("/:id", controllerLogin.autentication, controller.deleteMarca)



module.exports = router;