const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';

        //Middlewares
        this.middlewares();
        //Rutas de mi aplicacion

        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del Body
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.userPath, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en el puerto ', process.env.PORT);
        });
    }
}

module.exports = Server;