import express from 'express';
import {Controller, Route} from '../router-decorators';
import SuperController from './super.controller';

@Controller('/usuario', true)
class UsuarioController extends SuperController {
    @Route('get', '/')
    public get(_req: express.Request, res: express.Response): void {
        res.send({msg: 'Listado de usuarios.'});
    }

    @Route('get', '/login')
    public login(_req: express.Request, res: express.Response): void {
        res.status(501).end();
    }
}
