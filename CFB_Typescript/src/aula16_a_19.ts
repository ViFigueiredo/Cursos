/* P.O.O. e Classes */

class Computador {

    // nome: string = 'Computador 1';
    // ram: number = 0;
    // cpu: number = 0;

    // private - não permite acesso fora da classe sem utilizar métodos
    // public - não é obrigatorio, é o contrário de private
    // protected - não permite acesso fora da classe, somente por classes filhas (herança)

    public nome: string;
    private ram: number;
    private cpu: number;
    protected ligado: boolean;

    // função construtora (método) que executa após instanciar o objeto da classe
    // this -> se refere ao proprio objeto da classe
    constructor(nome: string, ram: number, cpu: number) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        // console.log("Novo computador criado.");
    }

    info(): void {
        console.log(`Nome..: ${this.nome}`);
        console.log(`RAM...: ${this.ram}GB`);
        console.log(`CPU...: ${this.cpu}Ghz`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log('--------------------------');
    }

    ligar(): void {
        this.ligado = true;
    }

    desligar(): void {
        this.ligado = false;
    }

    changeRam(qtd: number): void {
        if (qtd >= 0 && qtd <= 1000) {
            this.ram = qtd;
        }
        else {
            console.log(`Valor ${qtd} de RAM não é permitida para o computador ${this.nome}.`);
        }
    }
}

// Instâncias - criar o objeto da classe
const comp1 = new Computador('Rapidão', 64, 3.8);
const comp2 = new Computador('Carão', 32, 5);
const comp3 = new Computador('Gamer', 16, 4.7);

// comp1.nome = 'Rapidão'
// comp2.nome = 'Carão'
// comp3.nome = 'Gamer'

// Chama os métodos do objeto que foi instanciados
// comp1.ligar();
// comp3.ligar();
// comp1.desligar();

// comp1.info();
// comp2.info();
// comp3.info();

// Teste public/private
// comp1.ligado = true;

comp1.changeRam(128);
comp1.info();
