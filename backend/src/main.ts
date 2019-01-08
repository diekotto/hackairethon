import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
// Se usará https cuando estén configuradas las firmas
// import https from 'https';

const httpsPort = 8081;
const app: express.Application = express();
app.use(bodyparser.json());
app.use(cors());
app.disable('x-powered-by');
app.listen(httpsPort, () => {
  console.log(`Escuchando en el puerto ${httpsPort}`);
});
