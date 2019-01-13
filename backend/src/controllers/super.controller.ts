import express from 'express';

export default class SuperController {
    public get(_req: express.Request, res: express.Response): void {
        res.status(501).end();
    }

    public post(_req: express.Request, res: express.Response): void {
        res.status(501).end();
    }

    public put(_req: express.Request, res: express.Response): void {
        res.status(501).end();
    }

    public patch(_req: express.Request, res: express.Response): void {
        res.status(501).end();
    }

    public delete(_req: express.Request, res: express.Response): void {
        res.status(501).end();
    }
}
