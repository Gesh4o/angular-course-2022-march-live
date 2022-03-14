export class NumberValidator {
    validate(arg: any): boolean {
        return !isNaN(+arg);
    }
}