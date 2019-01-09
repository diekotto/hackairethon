import express from 'express';

class SuperController {
    protected _app: express.Application;
    protected _path: string = '';

    constructor(app: express.Application, path: string) {
        this._app = app;
        this._path = path;
    }

    public get app(): express.Application {
        return this._app;
    }

    public set app(app: express.Application) {
        this._app = app;
    }

    public get path(): string {
        return this._path;
    }

    public set path(path: string) {
        this._path = path;
    }

    public linkRoutes(): void {
        this.get();
        this.post();
        this.put();
        this.patch();
        this.delete();
    }

    public get(): void {
        this._app.get(this._path, (_req: express.Request, res: express.Response) => {
            res.status(500);
            res.end();
        });
    }

    public post(): void {
        this._app.post(this._path, (_req: express.Request, res: express.Response) => {
            res.status(500);
            res.end();
        });
    }

    public put(): void {
        this._app.put(this._path, (_req: express.Request, res: express.Response) => {
            res.status(500);
            res.end();
        });
    }

    public patch(): void {
        this._app.patch(this._path, (_req: express.Request, res: express.Response) => {
            res.status(500);
            res.end();
        });
    }

    public delete(): void {
        this._app.delete(this._path, (_req: express.Request, res: express.Response) => {
            res.status(500);
            res.end();
        });
    }
}

export default SuperController;
