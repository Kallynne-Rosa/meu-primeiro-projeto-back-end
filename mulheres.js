const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
      nome: 'Kallynne Rosa',
      imagem: 'c:\Users\Kallynne\Desktop\testeback.png',
      minibio: 'Estudante de sistemas de informação pela unicamp'
    },

    {
      nome: 'Iana Chan',
      imagem: 'https://bit.ly/3JCXBqP',
      minibio: 'CEO & Founder da PrograMaria'
    },

    {
      nome: 'Simara Conceição',
      imagem: 'https://bit.ly/3LJIyOF',
      minibio: 'Desenvolvedora e instrutora'
    }
]

function mostraMulheres(resquest, response) {
    response.json(mulheres)
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)