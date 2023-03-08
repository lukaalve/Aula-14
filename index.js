const express = require("express")

const app = express()
app.use(express.json())

const estudantes = [

    {

        nome: "Carlos",
        materia: "MAtematica",
        turma: "3 B",
        cpf: "08441959102"
    }



]




app.get("/estudantes", (req, res) => {
    return res.json(estudantes)
})
app.post('/estudantes', (req, res) => {
    const dados = req.body
    estudantes.push(dados)
    return res.send('estudantes criados')
})

app.get('/estudantes/:cpf', (req, res) => {

    const estudante = estudantes.find(e => e.cpf == req.params.cpf)
    return res.json(estudante)
})

app.get('/', (req, res) => {

    return res.send("Eae Lucão")


})
app.listen(3000)