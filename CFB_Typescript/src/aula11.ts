/* Type Assertions e Cast */

let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10;
svalor = '20';

// não podem ser reatribuidos, por isso a necessidade de afirmar os tipos
// nvalor = uvalor;

// type assertion (afirmação de tipo)

nvalor = Number.parseInt(svalor);
svalor = nvalor.toString();

nvalor = <number>uvalor;

nvalor = <number><unknown>svalor;
svalor = <string>uvalor;
svalor += 10;

console.log(typeof uvalor);
console.log(uvalor);
