import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import {router} from './router-decorators';

/**
 * Carga de controladores, no hay que crear instancias
 */
import './controllers/usuario.controller';

// Se usará https cuando estén configuradas las firmas
// import https from 'https';
/**
 * Variables de configuración
 */
const httpsPort = 8081;
const app: express.Application = express();
app.use(bodyparser.json());
app.use(cors());
app.use(router);
app.disable('x-powered-by');

/**
 * Inyección de la aplicación a las clases manejadoras
 */

app.listen(httpsPort, () => {
    console.log(`Escuchando en el puerto ${httpsPort}`);
});
