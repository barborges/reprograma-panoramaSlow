const express = require ("express")
const router = express.Router()

const controller = require("../controllers/loginController")
const utils = require("../utils/autentication")

router.get("/", utils.autentication, controller.getAll)
router.post("/registrar", controller.registroLogin)

router.post("/", controller.loginUsuario)

router.put("/substitui", utils.autentication, controller.substituiPassword)

router.delete("/:id", utils.autentication, controller.delById)

module.exports = router;