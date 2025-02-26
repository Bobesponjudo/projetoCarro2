class Carro {
    constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
      this.ligado = false;
      this.velocidade = 0; // Novo atributo: velocidade
    }
  
    ligar() {
      this.ligado = true;
      this.atualizarStatus();
    }
  
    desligar() {
      this.ligado = false;
      this.velocidade = 0; // Zera a velocidade ao desligar
      this.atualizarStatus();
      this.atualizarVelocidade(); // Atualiza a exibição da velocidade
    }
  
    acelerar() {
      if (this.ligado) {
        this.velocidade += 10; // Aumenta a velocidade em 10
        this.atualizarVelocidade();
      }
    }
  
    atualizarStatus() {
      const statusElement = document.getElementById('carro-status');
      statusElement.textContent = this.ligado ? 'Ligado' : 'Desligado';
  
      const botaoLigarDesligar = document.getElementById('ligar-desligar-btn');
      botaoLigarDesligar.textContent = this.ligado ? 'Desligar' : 'Ligar';
    }
  
    atualizarVelocidade() {
      const velocidadeElement = document.getElementById('velocidade-valor');
      velocidadeElement.textContent = this.velocidade;
    }
  
    exibirDetalhes() {
      document.getElementById('modelo').textContent = this.modelo;
      document.getElementById('cor').textContent = this.cor;
    }
  }
  
  // Cria um objeto Carro
  const meuCarro = new Carro('Fusca', 'Azul');
  
  // Exibe os detalhes do carro na tela
  meuCarro.exibirDetalhes();
  
  // Atualiza o status e velocidade iniciais
  meuCarro.atualizarStatus();
  meuCarro.atualizarVelocidade();
  
  // Adiciona eventos de clique aos botões
  const botaoLigarDesligar = document.getElementById('ligar-desligar-btn');
  botaoLigarDesligar.addEventListener('click', () => {
    if (meuCarro.ligado) {
      meuCarro.desligar();
    } else {
      meuCarro.ligar();
    }
  });
  
  const botaoAcelerar = document.getElementById('acelerar-btn');
  botaoAcelerar.addEventListener('click', () => {
    meuCarro.acelerar();
  });