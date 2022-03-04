var NumberValidator = /** @class */ (function () {
    function NumberValidator() {
    }
    NumberValidator.prototype.validate = function (arg) {
        return !isNaN(+arg);
    };
    return NumberValidator;
}());
export { NumberValidator };
//# sourceMappingURL=validator.js.map