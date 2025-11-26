function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function mudarFonte(fonte, peso = 'normal') {
  document.body.style.fontFamily = `'${fonte}', sans-serif`;
  document.body.style.fontWeight = peso;
}

const imagens = [
  {
    src: "img/img1.jpg",
    titulo: "Erase The Crime",
    data: "Novembro de 2024",
    descricao: "O jogo Erase the Crime se passa em uma casa abandonada, onde o objetivo do jogador é limpar uma cena de assassinato. O protagonista trabalha como alguém que limpa cenas de crimes sem deixar rastros, e essa missão específica acontece em uma cabana no meio de uma floresta. O jogador deve usar seus equipamentos para remover todos os vestígios do crime, como manchas de sangue, utilizando um pano e um borrifador. Além disso, precisa transportar os corpos em seu caminhão e coletar pistas que indiquem o que aconteceu, como a arma do crime, o celular da vítima, entre outros itens. Fui responsável apenas pela programação do jogo, enquanto meu grupo cuidou do som, da montagem da cena usando as ferramentas do Unity e do desenvolvimento do menu.",
    largura: "50%",
    altura: "auto",
  },
  {
    src: "img/img2.jpg",
    titulo: "David's Head",
    data: "Maio de 2025",
    descricao: "Esse jogo foi criado de forma individual, com cenas montadas por mim utilizando assets gratuitos da Unity. A programação também foi toda feita por mim. A ambientação acontece dentro do meu quarto, em um estilo de escape room, onde o jogador precisa descobrir sozinho o que fazer para escapar do ambiente. Este projeto foi desenvolvido com uma proposta educacional, sob orientação da professora de programação de jogos 3D, Carla Hamel Wojcik Garcia. No meu jogo, o jogador deve realizar atividades em uma ordem específica: primeiro, arrumar o quarto; depois, pegar livros e lê-los, o que é feito simplesmente ao olhar para o livro por um tempo determinado. Após concluir essa etapa, uma chave é liberada em cima de uma sapateira. Para pegá-la, o jogador deve arrastar um sofá para subir nele e alcançar a chave. Esse projeto foi realizado no ano de 2024, e foi uma experiência muito enriquecedora, combinando criatividade, lógica e aprendizado sobre o funcionamento de jogos.",
    largura: "50%",
    altura: "auto",
  },
  {
    src: "img/img3.jpg",
    titulo: "The Charles",
    data: "Abril de 2025",
    descricao: "The Charles se passa no século XIX, colocando o jogador na pele de Charles Robert Darwin. O objetivo é completar todas as fases, que incluem tarefas como concluir missões, capturar animais e compreender sua principal teoria, a teoria da evolução. Este projeto foi desenvolvido como parte do Trabalho de Conclusão de Curso (TCC) do curso técnico de Programação de Jogos Digitais, realizado em grupo. Minha responsabilidade foi a programação do jogo, enquanto minha equipe cuidou do design e do som. O jogo é uma aventura 2D com visão top-down, semelhante ao clássico mundialmente conhecido Pokémon FireRed. O projeto foi orientado pelo professor Gledson Vigiano Bianconi, que é professor de biologia no Instituto Federal do Paraná, campus Curitiba. O objetivo principal do jogo é humanizar a figura de Darwin, que muitas vezes é lembrado apenas por sua teoria, deixando de lado os acontecimentos importantes de sua vida. Assim, buscamos oferecer uma experiência que aproxime o jogador da história e do contexto do naturalista.",
    largura: "50%",
    altura: "auto",
  },
  {
    src: "img/img4.jpg",
    titulo: "EcoAventura",
    data: "Outubro de 2023",
    descricao: "O EcoAventura foi desenvolvido em dupla em 2023, como uma atividade avaliativa bimestral. A história do jogo acompanha Pedro, um menino que luta contra a poluição no mundo. Ele fica especialmente revoltado com a chegada de uma empresa na sua cidade, que está poluindo bastante o local. Motivado por essa situação, Pedro sai às ruas coletando lixo e enfrentando diversos obstáculos até chegar à empresa, com o objetivo de acabar com ela. O jogo tem como propósito conscientizar os jogadores sobre a importância da reciclagem e do combate à poluição. Eu fui responsável pela programação do projeto.",
    largura: "50%",
    altura: "auto",
  },
  {
    src: "img/img5.png",
    titulo: "Bee Game",
    data: "Outubro de 2025",
    descricao: "O Bee Game é um jogo onde você controla uma abelha e tem como objetivo coletar flores desviando das aranhas, o jogador possui 3 vidas e deve coletar 10 para poder concluir a fase. Jogo feito como atividade avaliativa bimestral no IFPR. ",
    largura: "50%",
    altura: "auto",
  }
];

let indiceAtual = 0;
const imagensPorTela = 3;

function exibirImagens() {
  const container = document.getElementById("carrossel-imagens");
  container.innerHTML = "";

  for (let i = 0; i < imagensPorTela; i++) {
    const index = (indiceAtual + i) % imagens.length;
    const imagemInfo = imagens[index];
    const img = document.createElement("img");

    img.src = imagemInfo.src;
    img.alt = imagemInfo.titulo;
    img.title = imagemInfo.descricao;

    img.onclick = function () {
      // Verifica se é a img5 (índice 4)
      if (index === 4) {
        // Abre instantaneamente a nova página
        window.location.href = "jogo.html";
      } else {
        // Para as outras imagens, abre o popup como antes
        const popup = window.open("", `popup${index}`, "width=850,height=700,resizable=yes,scrollbars=yes");
    
        if (popup) {
          popup.document.write(`
            <html>
              <head>
                <title>${imagemInfo.titulo}</title>
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                  }
                  img {
                    width: ${imagemInfo.largura};
                    height: ${imagemInfo.altura};
                    border-radius: 8px;
                    display: block;
                    margin-bottom: 15px;
                  }
                  p {
                    font-size: 16px;
                    line-height: 1.5;
                  }
                </style>
              </head>
              <body>
                <h1>${imagemInfo.titulo}</h1>
                <p><strong>Data:</strong> ${imagemInfo.data}</p>
                <img src="${imagemInfo.src}" alt="${imagemInfo.titulo}" />
                <p>${imagemInfo.descricao}</p>
              </body>
            </html>
          `);
          popup.document.close(); 
        }
      }
    };

    container.appendChild(img);
  }
}

function mudarImagens(direcao) {
  indiceAtual = (indiceAtual + direcao * imagensPorTela + imagens.length) % imagens.length;
  exibirImagens();
}

document.addEventListener("DOMContentLoaded", exibirImagens);
