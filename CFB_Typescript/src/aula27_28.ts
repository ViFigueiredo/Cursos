/* eslint-disable prefer-const,@typescript-eslint/consistent-type-definitions */
/* Interface e Objetos Literais */

// let curso1: {
//   titulo: string;
//   descricao: string;
//   qtdAulas: number;
//   maxAlunos: number;
// };
//
// let curso2: {
//   titulo: string;
//   descricao: string;
//   qtdAulas: number;
//   maxAlunos: number;
// };

// curso1 = {
//   titulo: 'Typescript',
//   descricao: 'Curso de Typescript',
//   qtdAulas: 100,
//   maxAlunos: 50,
// };
//
// curso2 = {
//   titulo: 'Javascript',
//   descricao: 'Curso de Javascript',
//   qtdAulas: 200,
//   maxAlunos: 80,
// };

interface curso {
  titulo: string;
  descricao: string;
  qtdAulas: number;
  maxAlunos?: number; // opcional
  iniciarCurso?(teste: string): void;
}

interface cursoProg extends curso {
  aulas: number;
  maxAlunos?: number;
}

interface cursoArtes extends curso {
  aulas: number;
  maxAlunos?: number;
}

let curso1: cursoProg = {
  aulas: 5,
  titulo: 'Typescript',
  descricao: 'Curso de Typescript',
  qtdAulas: 100,
  maxAlunos: 50,
  iniciarCurso(t: string) {},
};

let curso2: cursoProg = {
  aulas: 7,
  titulo: 'Typescript',
  descricao: 'Curso de Typescript',
  qtdAulas: 100,
  maxAlunos: 50,
};

let curso3: cursoArtes = {
  aulas: 3,
  titulo: 'Lua',
  descricao: 'Curso de Lua para jogos',
  qtdAulas: 250,
};

console.log(curso1);
console.log(curso2);
console.log(curso3);
