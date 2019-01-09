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

    public linkRoutes(): void {
        super.linkRoutes();
        this.login();
    }

    public get(): void {
        this._app.get(this._path, (_req: express.Request, res: express.Response) => {
            res.send({msg: 'Listado de usuarios.'});
        });
    }

    public login(): void {
        // LINKADO DEL ENRUTADO A LA FUNCIONALIDAD DE LOGIN
        this._app.post(`${this._path}/login`, (_req, _resp) => {
            // hola
        });
    }
}

export {Usuario};
