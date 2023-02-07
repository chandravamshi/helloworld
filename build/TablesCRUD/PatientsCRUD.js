"use strict";
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
const index_1 = require("../index");
function ab() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield index_1.prisma.patients.findMany();
        console.log(users);
    });
}
;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = yield index_1.prisma.patients.createMany({
            data: [
                {
                    name: 'Alice',
                    grafts: 443,
                    price: 67
                },
                {
                    name: 'Bob',
                    grafts: 44,
                    price: 23
                },
                {
                    name: 'Yewande',
                    grafts: 867,
                    price: 67
                },
                {
                    name: 'Angelique',
                    grafts: 4,
                    price: 23
                }
            ]
        });
        console.log(newUser);
    });
}
ab()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield index_1.prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield index_1.prisma.$disconnect();
    process.exit(1);
}));
