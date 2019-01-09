import express from 'express';
import SuperController from './super.controller';

class Usuario extends SuperController {
    private static singleton: Usuario;

    constructor(app: express.Application, path: string) {
        super(app, path);
        if (Usuario.singleton !== undefined) {
            Usuario.singleton._app = app;
            Usuario.singleton._path = path;
            return Usuario.singleton;
        }
        Usuario.singleton = this;
    }

    public get(): void {
        this._app.get(this._path, (_req: express.Request, res: express.Response) => {
            res.send({msg: 'Listado de usuarios.'});
        });
    }
}

export {Usuario};
