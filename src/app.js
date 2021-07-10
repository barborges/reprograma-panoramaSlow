require('dotenv-safe').config()

const cors = require("cors")
const express = require("express")
const db = require("./data/dbConfig")

const app = express()

db.connect()

const index = require("./routes/index")
const marcas = require("./routes/marcasRoutes")
const login = require("./routes/loginRoutes")
//const tarefas = require('./routes/tarefas')

app.use(cors())
app.use(express.json())

app.use("/", index)
app.use("/marcas", marcas)
app.use("/login", login)


module.exports = app

