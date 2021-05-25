export namespace CalculatorService {


    export function add (...number: number[]): number {
        return number.reduce((acc,value)=> acc + value);
    }
}