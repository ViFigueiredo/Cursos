/* P.O.O. - Classes, Herança, Métodos, Propriedades, Getter, Setter, Modificadores de acesso */

// herança - estende para uma nova classe que foi herdado de uma classe modelo
// super() -> acessa o conteúdo de uma classe herdada
// abstract -> só pode ser estendida
// readonly -> somente leitura em processos fora do construtor
// public (não obrigatório) -> acessível de quaquer lugar
// private -> permite acesso apenas pelas classes herdadas
// protected -> permite acesso pelas classes estendidas e herdadas
// get(getter) -> transforma uma função em propriedades: .f() -> .prop
// set(setter) -> transforma uma função em propriedades: .f() -> .prop mas com a finalidade de atribuição (=)

abstract class ContaBancaria {
  private readonly numero: number;
  protected titular: string;
  private saldo: number;

  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
    this.saldo = 0;
  }

  private gerarNumeroConta(): number {
    return Math.floor(Math.random() * 100000) + 1;
  }

  protected info(): void {
    // this.numero = 0;
    console.log(`Titular: ${this.titular}`);
    console.log(`Número: ${this.numero}`);
  }

  get saldoConta() {
    return this.saldo;
  }

  private set saldoConta(saldo: number) {
    this.saldo = saldo;
  }

  protected depositoConta(valor: number): void {
    if (valor < 0) {
      console.log('Valor precisa ser maior que 0.');
      return;
    }
    this.saldoConta += valor;
  }

  protected saqueConta(valor: number): void {
    if (valor < 0) {
      console.log('Valor precisa ser maior que 0.');
      return;
    } else {
      if (valor <= this.saldo) {
        this.saldoConta -= valor;
      } else {
        console.log('Saldo insuficiente.');
      }
    }
  }
}

// aula 29 - interfaces
interface Tributos {
  taxaCalculo: number;
  CalcularTributos(valor: number): number;
}

class ContaPF extends ContaBancaria implements Tributos {
  cpf: number;
  taxaCalculo = 10;

  constructor(cpf: number, titular: string) {
    super(titular);
    this.cpf = cpf;
    // console.log(`Conta PF criada: ${titular}`);
  }

  CalcularTributos(valor: number): number {
    return valor * this.taxaCalculo;
  }

  info(): void {
    console.log('Tipo: PF');
    super.info();
    console.log(`CPF: ${this.cpf}`);
    console.log('---------------------------');
  }

  public deposito(valor: number) {
    if (valor > 1000) {
      console.log('Valor de depósito não permitido para este tipo de conta.');
    } else {
      super.depositoConta(valor);
    }
  }

  public saque(valor: number) {
    if (valor > 1000) {
      console.log('Valor de saque não permitido para este tipo de conta.');
    } else {
      super.saqueConta(valor);
    }
  }
}

class ContaPJ extends ContaBancaria {
  cnpj: number;

  constructor(cnpj: number, titular: string) {
    super(titular);
    this.cnpj = cnpj;
    // console.log(`Conta PJ criada: ${titular}`);
  }

  info(): void {
    console.log('Tipo: PJ');
    super.info();
    console.log(`CNPJ: ${this.cnpj}`);
    console.log('---------------------------');
  }

  public deposito(valor: number) {
    if (valor > 10000) {
      console.log('Valor de depósito não permitido para este tipo de conta.');
    } else {
      super.depositoConta(valor);
    }
  }

  public saque(valor: number) {
    if (valor > 10000) {
      console.log('Valor de depósito não permitido para este tipo de conta.');
    } else {
      super.saqueConta(valor);
    }
  }
}

const contaA = new ContaPF(111, 'Pessoa A');
// const contaB = new ContaPJ(222, 'Pessoa B');
// console.log(contaA);
// console.log(contaB);
contaA.info();
// contaB.info();

// contaA.deposito(800);
// contaA.deposito(200);
// contaA.deposito(1000);
// contaA.saque(1000);
// contaA.saque(1000);
// contaA.saque(10);
// contaA.saldoConta = 250;
// console.log(`Saldo: R$${contaA.saldoConta}`);

// contaB.deposito(10000);
// contaB.deposito(10000);
// contaB.deposito(10000);
// contaB.deposito(10001);
// contaB.saque(10000);
// contaB.saque(10000);
// contaB.saque(10000);
// contaB.saque(10);
// console.log(`Saldo: R$${contaB.saldoConta}`);
