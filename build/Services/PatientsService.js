"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.PatientsService = void 0;
const typedi_1 = require("typedi");
const index_1 = require("../index");
let PatientsService = class PatientsService {
    constructor() {
        this.getAllRecords = () => __awaiter(this, void 0, void 0, function* () {
            const patients = yield index_1.prisma.patients.findMany();
            return patients;
        });
        this.insertRecord = (data) => __awaiter(this, void 0, void 0, function* () {
            // const patient = await prisma.patients.create({
            //     data: {
            //         name: data.name,
            //         grafts: data.grafts,
            //         price: data.price
            //     }
            // });
            return 'patient';
        });
        this.deleteRecord = (id) => __awaiter(this, void 0, void 0, function* () {
            const patient = yield index_1.prisma.patients.delete({
                where: {
                    id: id,
                },
            });
            return patient;
        });
    }
    getRecord(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const patient = yield index_1.prisma.patients.findUnique({
                    where: {
                        id: id,
                    },
                });
                return patient;
            }
            catch (e) {
                throw e;
            }
        });
    }
    ;
};
PatientsService = __decorate([
    (0, typedi_1.Service)()
], PatientsService);
exports.PatientsService = PatientsService;
;
