"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorService = void 0;
var CalculatorService;
(function (CalculatorService) {
    function add() {
        var number = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            number[_i] = arguments[_i];
        }
        return number.reduce(function (acc, value) { return acc + value; });
    }
    CalculatorService.add = add;
})(CalculatorService = exports.CalculatorService || (exports.CalculatorService = {}));
