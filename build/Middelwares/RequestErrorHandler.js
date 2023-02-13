"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoEndPoint = exports.RequestErrorHandler = void 0;
const runtime_1 = require("@prisma/client/runtime");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
let RequestErrorHandler = class RequestErrorHandler {
    error(error, request, response, next) {
        console.log('RequestErrorHandler');
        // console.log(error)
        if (error instanceof routing_controllers_1.BadRequestError) {
            console.log('BadRequestError');
            response.status(400).send({
                status: 400,
                message: `${error.message}`,
                error: error
            });
        }
        else if (error instanceof runtime_1.PrismaClientValidationError) {
            response.status(400).send({
                status: 400,
                message: `${error.name}:${error.message}`
            });
        }
        else {
            console.log('else');
            response.status(400).send({
                status: 400,
                message: `${error.name}:${error.message}`,
                error: error
            });
        }
    }
};
RequestErrorHandler = __decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.Middleware)({ type: 'after', priority: 1 })
], RequestErrorHandler);
exports.RequestErrorHandler = RequestErrorHandler;
let NoEndPoint = class NoEndPoint {
    use(request, response, next) {
        console.log('noendpoint');
        if (!response.headersSent) {
            response.status(404).send({
                status: 404,
                message: 'unknown endpoint'
            });
        }
        else
            next();
    }
};
NoEndPoint = __decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.Middleware)({ type: 'after', priority: 2 })
], NoEndPoint);
exports.NoEndPoint = NoEndPoint;
