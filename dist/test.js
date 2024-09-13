"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var _1 = __importDefault(require("."));
var ex1 = {
    name: 'Red Cross of Belgium',
    iban: 'BE72000000001616',
    bic: 'BPOTBEB1',
    amount: 123.45,
    reference: 'Urgency fund',
    purposeCode: 'abc',
    structuredReference: '123',
    information: 'foo bar'
};
(0, assert_1.strictEqual)((0, _1.default)(ex1), "BCD\n002\n1\nSCT\nBPOTBEB1\nRed Cross of Belgium\nBE72000000001616\nEUR123.45\nabc\n123\n\nfoo bar");
// missing data.iban
{
    var ex2_1 = __assign({}, ex1);
    delete ex2_1.iban;
    (0, assert_1.throws)(function () {
        (0, _1.default)(ex2_1);
    }, 'throws with missing data.iban');
}
// invalid data.iban
{
    (0, assert_1.throws)(function () {
        (0, _1.default)(__assign(__assign({}, ex1), { iban: 'BE00000000000000' }));
    }, 'throws with invalid data.iban');
}
// omitted amount
(0, assert_1.strictEqual)((0, _1.default)(__assign(__assign({}, ex1), { amount: null })), "BCD\n002\n1\nSCT\nBPOTBEB1\nRed Cross of Belgium\nBE72000000001616\n\nabc\n123\n\nfoo bar");
console.info('seems to work ✓');
