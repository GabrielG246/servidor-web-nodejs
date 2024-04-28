require('dotenv').config()
//Importar get de env-var para tipear las variables de entorno
const {get}= require("env-var")

//Tipar Variables de Entorno
const envs= {
    PORT: get("PORT").required().asPortNumber(),
    PUBLIC_PATH: get("PUBLIC_PATH").default("public").asString()
}

module.exports = {envs}