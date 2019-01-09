import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
// Se usará https cuando estén configuradas las firmas
// import https from 'https';
/**
 * Variables de configuración
 */
const httpsPort = 8081;
const app: express.Application = express();
app.use(bodyparser.json());
app.use(cors());
app.disable('x-powered-by');

/**
 * Inyección de la aplicación a las clases manejadoras
 */
import {Usuario} from './controllers/usuario';

const usuarioController = new Usuario(app, '/usuario');
usuarioController.linkRoutes();

app.get('/', (_req, res) => {
    res.status(200);
    res.end();
});
app.listen(httpsPort, () => {
    console.log(`Escuchando en el puerto ${httpsPort}`);
});
