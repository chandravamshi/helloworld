"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyMiddleware = void 0;
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
let MyMiddleware = class MyMiddleware {
    // interface implementation is optional
    // use(request: any, response: any, next: (err: any) => any): void {
    //     console.log('count: %d')
    //     next();
    // }
    error(error, request, res, next) {
        // console.log( error)
        // if (error instanceof HttpError) {
        //     response.status(error.httpCode).json(error);
        // }
        // next(error);
        const responseObject = {};
        // if its an array of ValidationError
        // console.log(error);
        // console.log(Array.isArray(error));
        // res.status(422);
        responseObject.message = "You have an error in your request's body. Check 'errors' field for more details!";
        // responseObject.errors = error;
        responseObject.status = 0;
        responseObject.data = {};
        responseObject.data.message = [];
        error.errors.forEach((element) => {
            // Object.keys(element.constraints).forEach((type) => {
            //     responseObject.data.message.push(`property ${element.constraints[type]}`);
            // });
        });
        console.log(error.errors);
        return res.json(responseObject);
        // console.log(error.errors[0].constraints)
        next(error.errors);
        // next(responseObject)
    }
};
MyMiddleware = __decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.Middleware)({ type: "after" })
], MyMiddleware);
exports.MyMiddleware = MyMiddleware;
