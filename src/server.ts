import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ForecastController } from './controllers/forecast';
import { Application } from 'express';

export class SetupServer extends Server {
    constructor(private port = 3000) {
        super();
    }

    private controllers = [
        new ForecastController(),
    ];

    public initServer(): void {
        this.setupExpress();
        this.setupControllers(this.controllers);
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupControllers(controllers: any[]): void {
        this.addControllers(controllers);
    }

    public getApp(): Application {
        return this.app;
    }
}