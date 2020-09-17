const max= 9999;
const min= -9999;

let calc = function (operator, a, b) {
    let result
    if (isNaN(a)) {
        return 'Input number'
    } else if (b !== undefined && isNaN(b)) {
        return 'Input number'
    }

    switch (operator) {

        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (a === 0 || b === 0) {
                alert('Invalid operation');
            }
            result = a / b;
            break;
        case 'pow':
            result = Math.pow(a, b);
            break;

        case 'log':
            if (a <= 0) {
                return NaN
            }
            result = Math.log(a);
            break;
        case 'sqrt':
            if (a <= 0) {
                return NaN
            }
            result = Math.sqrt(a);
            break;
    }
    if (result > max || result < min) {
        return 'Digit limit reached'
    }
    return result
}


console.log(calc('+', 20, 25))
console.log(calc('-', -5000, 5000))
console.log(calc('log', 2))
console.log(calc('sqrt', -1))
console.log(calc('log','dva'))