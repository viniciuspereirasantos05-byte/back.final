//npm init -> cria o pacote inicial API 
const express = require("express")
const app = express()
app.use(express.json())
const port = 3000
const bd = require("./bd")
 
app.get("/aula", async(req, res) =>{
    try {
        const resultado = await db.pool.query("SELEC * FROM aula")
        res.status(200).json(resultado[0])
    }catch (erro){
        res.status(500).json({erro: erro.mensage})
    }
   
})
app.listen(port, ()=> {
    console.log("API rodando na porta" + port)
})
