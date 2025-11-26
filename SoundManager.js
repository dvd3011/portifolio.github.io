class SoundManager {
    constructor() {
      // Carrega os sons
      this.somColetaFlor = new Audio('sons/coleta.wav');
      this.somColisaoAranha = new Audio('sons/colisao.mp3');
      this.somGameOver = new Audio('sons/gameover.wav');
  
      // Ajuste opcional: define volume e outras propriedades
      this.somColetaFlor.volume = 0.6;
      this.somColisaoAranha.volume = 0.8;
      this.somGameOver.volume = 1.0;
    }
  
    tocarColetaFlor() {
      this.somColetaFlor.currentTime = 0; // reinicia o som
      this.somColetaFlor.play();
    }
  
    tocarColisaoAranha() {
      this.somColisaoAranha.currentTime = 0;
      this.somColisaoAranha.play();
    }
  
    tocarGameOver() {
      this.somGameOver.currentTime = 0;
      this.somGameOver.play();
    }
  }
  
  // Exemplo de uso no jogo:
  const som = new SoundManager();
  
 
  