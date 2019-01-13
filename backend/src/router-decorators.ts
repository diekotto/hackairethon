import express, {Router} from 'express';

export const router: any | Router = express.Router();
const validMethods = ['get', 'post', 'put', 'patch', 'delete'];
const routes: any = {};

class RouteData {
    constructor(public method: string, public path: string, public callable: string) {}
}

/**
 * Sets a class as a Controller which registers all routes
 * @param basePath Base path from the root for all controller's routes
 * @param resource Create automatically Rest routes
 * @param resourceExcept Rest routes that should not be created
 * @constructor
 */
export function Controller(basePath: string = '', resource: boolean = false, resourceExcept: string[] = []) {
    return (target: any) => {
        const controller = new target();
        const controllerName = controller.constructor.name;
        if (resource) {
            for (const method of validMethods) {
                if (resourceExcept.includes(method)) {
                    continue;
                }
                if (!routes[controllerName]) {
                    routes[controllerName] = [];
                }
                routes[controllerName].push(new RouteData(method, '/', method));
            }
        }
        if (routes[controllerName]) {
            for (const route of routes[controllerName]) {
                const fullPath = basePath + route.path;
                router[route.method](basePath + route.path, controller[route.callable]);
                console.log(`Registered ${route.method} route ${fullPath} from ${controller.constructor.name}`);
            }
        } else {
            console.log(`No routes found from ${controllerName}`);
        }
    };
}

/**
 * Sets the method as a route
 * @param method A valid http verb
 * @param path The path of the route starting from the controller's base path
 * @constructor
 */
export function Route(method: string, path: string): any {
    return (target: any, callable: string) => {
        method = method.toLowerCase();
        if (validMethods.includes(method)) {
            const controllerName = target.constructor.name;
            if (!routes[controllerName]) {
                routes[controllerName] = [];
            }
            routes[controllerName].push(new RouteData(method, path, callable));
        }
    };
}
