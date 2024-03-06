/* Type Inference */
let n1 = [20, 30, 40];

/* Types - forma explicita */
let n2: number[] = [20, 30, 40];

/* Types - forma explicita com Union types  */
let n3: Array<number | string> = [20, 30, 40, 'Vinicius'];

/* Types - outra forma explicita com Union types  */
let n4: (number | string)[] = [20, 30, 40, 'Vinicius'];

/* ReadOnly Array - somente leitura */
let n5_ro: ReadonlyArray<number> = [100, 200, 300];
n1.push(50);
console.log(n1);
n1.unshift(10);
console.log(n1);
n1.pop();
console.log(n1);
n1.shift();
console.log(n1);

let result = n5_ro.map((n) => { return n % 4 === 0 })
console.log(result);
