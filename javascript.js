class Carro {
    constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
      this.ligado = false;
      this.velocidade = 0;
    }
  
    ligar() {
      this.ligado = true;
      console.log(`${this.modelo} ligado.`);
    }
  
    desligar() {
      this.ligado = false;
      this.velocidade = 0;
      console.log(`${this.modelo} desligado.`);
    }
  
    acelerar(incremento) {
      if (this.ligado) {
        this.velocidade += incremento;
        console.log(`${this.modelo} acelerando. Velocidade: ${this.velocidade}`);
      } else {
        console.log('Ligue o carro primeiro!');
      }
    }
  
    frear(decremento) {
      this.velocidade = Math.max(0, this.velocidade - decremento); // Garante que a velocidade não seja negativa
      console.log(`${this.modelo} freando. Velocidade: ${this.velocidade}`);
    }
  
    exibirInfo() {
      return `Modelo: ${this.modelo}, Cor: ${this.cor}, Ligado: ${this.ligado}, Velocidade: ${this.velocidade}`;
    }
  }


  class CarroEsportivo extends Carro {
    constructor(modelo, cor) {
      super(modelo, cor); // Chama o construtor da classe Carro
      this.turboAtivado = false;
    }
  
    ativarTurbo() {
      if (this.ligado) {
        this.turboAtivado = true;
        this.acelerar(50); // Acelera 50 km/h com o turbo
        console.log(`${this.modelo} turbo ativado!`);
      } else {
        console.log(`${this.modelo} não pode ativar o turbo. Ligue o carro primeiro.`);
      }
    }
  }

  class Caminhao extends Carro {
    constructor(modelo, cor, capacidadeCarga) {
      super(modelo, cor);
      this.capacidadeCarga = capacidadeCarga;
      this.cargaAtual = 0;
    }
  
    carregar(peso) {
      if (this.cargaAtual + peso <= this.capacidadeCarga) {
        this.cargaAtual += peso;
        console.log(`${this.modelo} carregado com ${peso}kg. Carga atual: ${this.cargaAtual}kg`);
      } else {
        console.log(`${this.modelo} não pode carregar mais. Capacidade máxima atingida.`);
      }
    }
  
    descarregar(peso) {
      if (this.cargaAtual - peso >= 0) {
        this.cargaAtual -= peso;
        console.log(`${this.modelo} descarregado com ${peso}kg. Carga atual: ${this.cargaAtual}kg`);
      } else {
        console.log(`${this.modelo} não pode descarregar tanto. Carga atual insuficiente.`);
      }
    }
  }

  // Variáveis para armazenar os objetos
let carroEsportivo;
let caminhao;

// Funções para criar os objetos
function criarCarroEsportivo() {
  const modelo = document.getElementById("modeloEsportivo").value;
  const cor = document.getElementById("corEsportivo").value;
  carroEsportivo = new CarroEsportivo(modelo, cor);
  exibirResultadoEsportivo(`Carro Esportivo criado: ${carroEsportivo.modelo} ${carroEsportivo.cor}`);
}

function criarCaminhao() {
  const modelo = document.getElementById("modeloCaminhao").value;
  const cor = document.getElementById("corCaminhao").value;
  const capacidadeCarga = parseInt(document.getElementById("capacidadeCarga").value);
  caminhao = new Caminhao(modelo, cor, capacidadeCarga);
  exibirResultadoCaminhao(`Caminhão criado: ${caminhao.modelo} ${caminhao.cor}, Capacidade: ${caminhao.capacidadeCarga}kg`);
}


// Funções para interagir com o Carro Esportivo
function ligarCarroEsportivo() {
  if (carroEsportivo) {
    carroEsportivo.ligar();
    exibirResultadoEsportivo(`Carro Esportivo: ${carroEsportivo.modelo} - Ligado: ${carroEsportivo.ligado}, Velocidade: ${carroEsportivo.velocidade}, Turbo: ${carroEsportivo.turboAtivado}`);
  } else {
    exibirResultadoEsportivo("Crie o carro esportivo primeiro!");
  }
}

function desligarCarroEsportivo() {
  if (carroEsportivo) {
    carroEsportivo.desligar();
    exibirResultadoEsportivo(`Carro Esportivo: ${carroEsportivo.modelo} - Ligado: ${carroEsportivo.ligado}, Velocidade: ${carroEsportivo.velocidade}, Turbo: ${carroEsportivo.turboAtivado}`);
  } else {
    exibirResultadoEsportivo("Crie o carro esportivo primeiro!");
  }
}

function acelerarCarroEsportivo() {
  if (carroEsportivo) {
    carroEsportivo.acelerar(10);
    exibirResultadoEsportivo(`Carro Esportivo: ${carroEsportivo.modelo} - Ligado: ${carroEsportivo.ligado}, Velocidade: ${carroEsportivo.velocidade}, Turbo: ${carroEsportivo.turboAtivado}`);
  } else {
    exibirResultadoEsportivo("Crie o carro esportivo primeiro!");
  }
}

function frearCarroEsportivo() {
  if (carroEsportivo) {
    carroEsportivo.frear(5);
    exibirResultadoEsportivo(`Carro Esportivo: ${carroEsportivo.modelo} - Ligado: ${carroEsportivo.ligado}, Velocidade: ${carroEsportivo.velocidade}, Turbo: ${carroEsportivo.turboAtivado}`);
  } else {
    exibirResultadoEsportivo("Crie o carro esportivo primeiro!");
  }
}

function ativarTurbo() {
  if (carroEsportivo) {
    carroEsportivo.ativarTurbo();
    exibirResultadoEsportivo(`Carro Esportivo: ${carroEsportivo.modelo} - Ligado: ${carroEsportivo.ligado}, Velocidade: ${carroEsportivo.velocidade}, Turbo: ${carroEsportivo.turboAtivado}`);
  } else {
    exibirResultadoEsportivo("Crie o carro esportivo primeiro!");
  }
}


// Funções para interagir com o Caminhão
function ligarCaminhao() {
  if (caminhao) {
    caminhao.ligar();
    exibirResultadoCaminhao(`Caminhão: ${caminhao.modelo} - Ligado: ${caminhao.ligado}, Velocidade: ${caminhao.velocidade}, Carga: ${caminhao.cargaAtual}/${caminhao.capacidadeCarga}`);
  } else {
    exibirResultadoCaminhao("Crie o caminhão primeiro!");
  }
}

function desligarCaminhao() {
  if (caminhao) {
    caminhao.desligar();
    exibirResultadoCaminhao(`Caminhão: ${caminhao.modelo} - Ligado: ${caminhao.ligado}, Velocidade: ${caminhao.velocidade}, Carga: ${caminhao.cargaAtual}/${caminhao.capacidadeCarga}`);
  } else {
    exibirResultadoCaminhao("Crie o caminhão primeiro!");
  }
}

function acelerarCaminhao() {
  if (caminhao) {
    caminhao.acelerar(5);
    exibirResultadoCaminhao(`Caminhão: ${caminhao.modelo} - Ligado: ${caminhao.ligado}, Velocidade: ${caminhao.velocidade}, Carga: ${caminhao.cargaAtual}/${caminhao.capacidadeCarga}`);
  } else {
    exibirResultadoCaminhao("Crie o caminhão primeiro!");
  }
}

function frearCaminhao() {
  if (caminhao) {
    caminhao.frear(2);
    exibirResultadoCaminhao(`Caminhão: ${caminhao.modelo} - Ligado: ${caminhao.ligado}, Velocidade: ${caminhao.velocidade}, Carga: ${caminhao.cargaAtual}/${caminhao.capacidadeCarga}`);
  } else {
    exibirResultadoCaminhao("Crie o caminhão primeiro!");
  }
}

function carregarCaminhao() {
  if (caminhao) {
    const peso = parseInt(document.getElementById("pesoCarga").value);
    caminhao.carregar(peso);
    exibirResultadoCaminhao(`Caminhão: ${caminhao.modelo} - Ligado: ${caminhao.ligado}, Velocidade: ${caminhao.velocidade}, Carga: ${caminhao.cargaAtual}/${caminhao.capacidadeCarga}`);
  } else {
    exibirResultadoCaminhao("Crie o caminhão primeiro!");
  }
}

function descarregarCaminhao() {
  if (caminhao) {
    const peso = parseInt(document.getElementById("pesoCarga").value);
    caminhao.descarregar(peso);
    exibirResultadoCaminhao(`Caminhão: ${caminhao.modelo} - Ligado: ${caminhao.ligado}, Velocidade: ${caminhao.velocidade}, Carga: ${caminhao.cargaAtual}/${caminhao.capacidadeCarga}`);
  } else {
    exibirResultadoCaminhao("Crie o caminhão primeiro!");
  }
}

// Funções para exibir os resultados no HTML
function exibirResultadoEsportivo(mensagem) {
  document.getElementById("resultadoEsportivo").innerText = mensagem;
}

function exibirResultadoCaminhao(mensagem) {
  document.getElementById("resultadoCaminhao").innerText = mensagem;
}