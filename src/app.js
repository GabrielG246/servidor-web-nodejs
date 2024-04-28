//Importar las Variables de Entorno
const {envs}= require("./config/env")
//Importar Función para Arrancar Servidor
const {startServer} = require('./server/server.js')

//Definir Función Principal
const main = () =>{

    //Invocar Función de Arranque y Argumentar con Variables de Entorno
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Función agnostica autoconvocada.
(async()=>{

    //Invocar Función Principal
    main()
})()
