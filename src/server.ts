import express  from "express";
import dotenv from 'dotenv'
import mustache from "mustache-express";
import path, { dirname } from "path";

import mainroutes from './routes/index'

dotenv.config()

const server = express()

//configurações do mustache
server.set('view engine','mustache')
server.set('views', path.join(__dirname,'views'))
server.engine('mustache',mustache())
//caminho da pasta public
server.use(express.static(path.join(__dirname,'../public')))
//HABILITAR O POST
server.use(express.urlencoded({extended:true}))

server.use(mainroutes)

server.listen(process.env.PORT)
server.use((req,res) =>{
    res.send("Página não encontrada")
})

