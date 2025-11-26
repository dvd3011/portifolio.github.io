var p = document.getElementById('canvas');
var pincel = p.getContext("2d");

var bg = new Bg(0, 0, 900, 720, "imagem/bg.png");
var bg2 = new Bg(0, -720, 900, 720, "imagem/bg.png");
var abelha = new Abelha(0, 500, 100, 100, "imagem/bee1.png");
var aranha = new Aranha(100, 100, 100, 100, "imagem/spider1.png");
var flor = new Flor(0, 0, 50, 50, "imagem/flower1.png");

var placar = new Text();
var perdeu = new Text();
var info = new Text();
var titulo = new Text();

var play = false;         
var noMenu = true;         
var fimDeJogo = false;     
var floresColetadas = 0;
var metaFlores = 10;
var tempoRestante = 30;    
var cronometro;
var loopPrincipal;

class SoundManager {
  constructor() {
    this.somColetaFlor = new Audio('sons/coleta.wav');
    this.somColisaoAranha = new Audio('sons/colisao.mp3');
    this.somGameOver = new Audio('sons/gameover.wav');

    this.somColetaFlor.volume = 0.6;
    this.somColisaoAranha.volume = 0.8;
    this.somGameOver.volume = 1.0;
  }

  tocarColetaFlor() {
    this.somColetaFlor.currentTime = 0;
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
const som = new SoundManager();

document.addEventListener("keydown", function (event) {
  if (noMenu && event.key === "Enter") {
    iniciarJogo();
  }
  if (play) {
    if (event.key === "d") abelha.dir = 3;
    if (event.key === "a") abelha.dir = -3;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "d" || event.key === "a") abelha.dir = 0;
});
 function voltarPagina() {
            window.history.back();
        }
function iniciarJogo() {
  noMenu = false;
  play = true;
  fimDeJogo = false;
  floresColetadas = 0;
  abelha.lifes = 3;
  tempoRestante = 30;

  cronometro = setInterval(() => {
    if (play) {
      tempoRestante--;
      if (tempoRestante <= 0) {
        tempoRestante = 0;
        play = false;
      }
    }
  }, 1000);
}

function voltarAoMenu() {
  clearInterval(cronometro);
  play = false;
  fimDeJogo = false;
  noMenu = true;
}

function GameOver() {
  if (abelha.lifes <= 0) {
    play = false;
  }
}

function Collides() {
  if (abelha.Collide(aranha)) {
    aranha.MudaPosi();
    abelha.lifes -= 1;
    som.tocarColisaoAranha();
  }
  if (abelha.Collide(flor)) {
    floresColetadas++;
    flor.MudaPosi();
    som.tocarColetaFlor();
    if (floresColetadas >= metaFlores) {
      play = false;
    }
  }
}

function Draw() {
  bg.Desenha();
  bg2.Desenha();

  if (noMenu) {
    pincel.fillStyle = "rgba(0, 0, 0, 0.5)";
    pincel.fillRect(0, 0, 900, 720);
    titulo.draw(" BEE GAME ", 300, 300);
    info.draw("Pressione ENTER para começar", 290, 380);
  }
  else if (play) {
    abelha.Desenha();
    aranha.Desenha();
    flor.Desenha();

    placar.draw("Vida: " + abelha.lifes, 240, 100);
    info.draw("Flores: " + floresColetadas + " / " + metaFlores, 240, 130);
    info.draw("Tempo: " + tempoRestante + "s", 240, 160);
  }
  else {
    pincel.fillStyle = "rgba(0, 0, 0, 0.7)";
    pincel.fillRect(0, 0, 900, 720);

    if (floresColetadas >= metaFlores) {
      perdeu.draw("Você venceu!", 330, 400);
    } else {
      perdeu.draw("Game Over", 350, 400);
      perdeu.draw("Flores coletadas: " + floresColetadas, 330, 440);
    }

    if (!fimDeJogo) {
      fimDeJogo = true;
      clearInterval(cronometro);
      som.tocarGameOver();

      setTimeout(() => {
        voltarAoMenu();
      }, 4000);
    }
  }
}

function Update() {
  if (play) {
    bg.Move(6, 720, 0);
    bg2.Move(6, 0, -720);
    abelha.Move();
    aranha.Move();
    flor.Move();
    abelha.Animacao("bee");
    aranha.Animacao("spider");
    Collides();
    GameOver();
  }
}

function Main() {
  pincel.clearRect(0, 0, 900, 720);
  Update();
  Draw();
}

loopPrincipal = setInterval(Main, 10);
