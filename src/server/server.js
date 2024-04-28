//Importar Express
const express= require('express');

//Importar Path (para definir urls)
const path= require('path');

//Definir Función de Arranque de Servidor
const startServer= (options) => {
    //Capturar Argumentos como un Objeto Desestructurado del parametro 'options'
    const {port, public_path }= options

    //Guardar todas las funciones de express en una constante app
    const app = express()

    //Definir Middlewares
    app.use(express.static(public_path))       //Contenido Estático

    //Definir el Método GET que toma una url y un callback con req(solicitud) y res(respuesta).
    //Al tratarse de una SinglePageAplication (Angular o React) solo es necesario definir la ruta '*', de lo contrario habría que asignar cada una de las rutas.
    //La url "*" hace referencia a cualquier url no definida.
    app.get('*', (req,res)=>{
        //Guarda la dirección de la plantilla.
        const indexPath= path.join(__dirname + `../../../${public_path}/index.html`);

        //Asigna la resupuesta res(response) 
        res.sendFile(indexPath);
    })

    app.listen(port, ()=>{
        console.log(`Escuchando en el puerto: ${port}`);
    })
}

module.exports = {startServer}