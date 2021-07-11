const express = require ("express")
const router = express.Router()

const utils = require("../utils/autentication")

const controller = require("../controllers/marcasController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)

router.patch("/:id", utils.autentication, controller.atualizaMarca)

router.post("/cadastrar", utils.autentication, controller.criaMarcas)


router.delete("/:id", utils.autentication, controller.deleteMarca)



module.exports = router;