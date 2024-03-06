/* Arrow Function */

// padrão
const bteste = (txt?: string): void => {
    console.log(txt);
}

bteste('CBF Cursos');
bteste();

// padrão
const ateste = (txt: string = '...'): void => {
    console.log(txt);
}

ateste('CBF Cursos');
ateste();   