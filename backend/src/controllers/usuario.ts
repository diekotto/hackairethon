import express from 'express';

class Usuario {
    private static singleton: Usuario;
    private _app: express.Application;
    private _path: string = '';

    constructor(app: express.Application, path: string) {
        this._app = app;
        this._path = path;
        if (Usuario.singleton !== undefined) {
            Usuario.singleton._app = app;
            Usuario.singleton._path = path;
            return Usuario.singleton;
        }
        Usuario.singleton = this;
    }

    public static get app(): express.Application {
        return Usuario.singleton._app;
    }

    public static set app(app: express.Application) {
        Usuario.singleton._app = app;
    }

    public static get path(): string {
        return Usuario.singleton._path;
    }

    public static set path(path: string) {
        Usuario.singleton._path = path;
    }

    public get(): void {
        this._app.get(this._path, (_req: express.Request, res: express.Response) => {
            res.status(500);
            res.end();
        });
    }

    public post() {
        this._app.post(this._path, (_req: express.Request, res: express.Response) => {
            res.status(500);
            res.end();
        });
    }

    public put() {
        this._app.put(this._path, (_req: express.Request, res: express.Response) => {
            res.status(500);
            res.end();
        });
    }

    public patch() {
        this._app.patch(this._path, (_req: express.Request, res: express.Response) => {
            res.status(500);
            res.end();
        });
    }

    public delete() {
        this._app.delete(this._path, (_req: express.Request, res: express.Response) => {
            res.status(500);
            res.end();
        });
    }
}

export {Usuario};
