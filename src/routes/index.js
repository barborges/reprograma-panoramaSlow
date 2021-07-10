const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Projeto Final Reprograma - On11 - Batizado de Panorama Slow, inspirada no movimento Fashion Revolution, com essa API será possível filtrar marcas independentes que buscam e lutam por causas socioambientais. Uma forma de unir, em um só lugar, um ambiente onde as pessoas que desejam consumir de forma mais consciente e possibilitar o acesso àquelas que não tem conhecimento, tornando mais vísivel e acessível a todes. Educar para Revolucionar - apoiar quem faz, transforma.",
        version: "1.0.0"
    })
})

module.exports = router;