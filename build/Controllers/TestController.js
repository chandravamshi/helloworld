"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
let TestController = class TestController {
    getHome(response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return response.status(200).send('hello world');
            }
            catch (e) {
                throw new Error();
            }
        });
    }
    getOne(ids) {
        console.log(typeof (ids));
        return `the user id is  + ${ids}`;
    }
    show() {
        return `Showing post`;
        // (real app would return a blog post data)
    }
    // ...
    store(message) {
        console.log(message);
        return message;
    }
};
__decorate([
    (0, routing_controllers_1.Get)('/'),
    __param(0, (0, routing_controllers_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "getHome", null);
__decorate([
    (0, routing_controllers_1.Get)('/users/mul'),
    __param(0, (0, routing_controllers_1.QueryParam)("ids", { isArray: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], TestController.prototype, "getOne", null);
__decorate([
    (0, routing_controllers_1.Get)('/post'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestController.prototype, "show", null);
__decorate([
    (0, routing_controllers_1.Get)('/bodyTest'),
    __param(0, (0, routing_controllers_1.BodyParam)('referenceIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestController.prototype, "store", null);
TestController = __decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.JsonController)()
], TestController);
exports.TestController = TestController;
