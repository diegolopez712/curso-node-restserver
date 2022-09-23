const express = require('express')
const cors  = require('cors')
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usariosPath = '/api/usuarios';

        //middlewares: Funciones que agregan otra funcionalidad al webserver
        this.middlewares();
        //Rutas de la aplicación

        this.routes(); //Disparar el método routes
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );

        //Directorio público
        this.app.use( express.static('public'));

    }
    routes(){
        this.app.use( this.usariosPath, require('../routes/usuarios'));
    }

    listen (){
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto: ', this.port);
        } );
    }
}

module.exports = Server;