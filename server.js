const app = require("./src/app")
const PORT = process.env.PORT || 5124

app.listen(PORT, ()=>{
    console.log(`bebe nascendo na porta ${PORT}`)
})