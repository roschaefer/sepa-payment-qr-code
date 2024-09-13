"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __importDefault(require("."));
console.log((0, _1.default)({
    name: 'Red Cross of Belgium',
    iban: 'BE72000000001616',
    amount: 123.45,
    unstructuredReference: 'Urgency fund',
    information: 'Sample QR code'
}));
