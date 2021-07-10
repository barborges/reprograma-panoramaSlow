const express = require ("express")
const router = express.Router()

const controller = require("../controllers/loginController")

router.get("/", controller.autentication, controller.getAll)
router.post("/registrar", controller.registroLogin)

router.post("/", controller.loginUsuario)

router.patch("/substitui", controller.autentication, controller.substituiPassword)

router.delete("/:id", controller.autentication, controller.delById)

module.exports = router;