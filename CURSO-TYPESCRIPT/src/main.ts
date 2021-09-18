// BASE ARQUIVO CURSO CATALINE

// Extends, implements, typescript
// Extends: herda de outra classe
// implements: implementa uma interface
// extends e implements podem ser usados em classes, funções e métodos

// exemplo de implements
interface Veiculo {
  rodas: number;
  acelerar: () => void;
  frear: () => void;
}

class CriarVeiculo implements Veiculo {
  rodas: number;
  acelerar() {
    console.log("acelerando...");
  }
  frear() {
    console.log("freando...");
  }

  constructor(rodas: number) {
    this.rodas = rodas;
  }
  
}