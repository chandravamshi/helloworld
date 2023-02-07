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
exports.PatientsController = void 0;
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const PatientsService_1 = require("../Services/PatientsService");
const Patients_1 = require("../Classes/Patients");
const ValidationError_1 = require("../Middelwares/ValidationError");
let PatientsController = class PatientsController {
    constructor(patientsService) {
        this.patientsService = patientsService;
    }
    // get all patients records
    getAll(response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allPatients = yield this.patientsService.getAllRecords();
                return response.status(200).send(allPatients);
            }
            catch (e) {
                // console.log(e)
            }
        });
    }
    insertRecord(request, data, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allPatients = yield this.patientsService.insertRecord(data);
                return response.status(200).send(allPatients);
            }
            catch (err) {
                console.log('/insert');
                // console.log(e.message);
                // return response.status(500).send(err);
            }
        });
    }
    getOneRecord(response, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const patient = yield this.patientsService.getRecord(id);
                console.log(patient);
                return response.status(200).send(patient);
            }
            catch (e) {
                throw new Error();
            }
        });
    }
    remove(response, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const patient = yield this.patientsService.deleteRecord(id);
                return response.status(200).send(patient);
            }
            catch (e) {
                throw new Error();
            }
        });
    }
};
__decorate([
    (0, routing_controllers_1.Get)('/lists'),
    __param(0, (0, routing_controllers_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "getAll", null);
__decorate([
    (0, routing_controllers_1.UseBefore)(ValidationError_1.MyMiddleware),
    (0, routing_controllers_1.Post)('/insert'),
    __param(0, (0, routing_controllers_1.Req)()),
    __param(1, (0, routing_controllers_1.Body)({ validate: true })),
    __param(2, (0, routing_controllers_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Patients_1.Patients, Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "insertRecord", null);
__decorate([
    (0, routing_controllers_1.Get)('/getOne'),
    __param(0, (0, routing_controllers_1.Res)()),
    __param(1, (0, routing_controllers_1.QueryParam)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "getOneRecord", null);
__decorate([
    (0, routing_controllers_1.Delete)('/del'),
    __param(0, (0, routing_controllers_1.Res)()),
    __param(1, (0, routing_controllers_1.QueryParam)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "remove", null);
PatientsController = __decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.JsonController)('/patients'),
    __metadata("design:paramtypes", [PatientsService_1.PatientsService])
], PatientsController);
exports.PatientsController = PatientsController;
