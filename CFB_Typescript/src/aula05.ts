/* Union Types */

let valores = [10, 20, 30]; /* TYPES INFERENCE */
let cursos: string[] = ['JS', 'TS', 'C++']; /* UNION TYPES */

// let vTeste: any;
let vTeste: string|number; /* UNION TYPES */

vTeste = 'Vinicius';
vTeste = 2024;

cursos.push('Python');
valores.push(40);

console.log(cursos);
console.log(valores);
console.log(vTeste);
