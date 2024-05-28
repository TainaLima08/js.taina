//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
 
//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  }
 
let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete(xRaquete, yRaquete);
  colisaoMinhaRaqueteBiblioteca();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro); 
  }

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;

}

function verificaColisaoBorda() {
    if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeyBolinha *= -1; 
}
  
}
function mostraRaquete(){
    rect(xRaquete, yRaquete, raqueteComprimento,           raqueteAltura);
  }
function movimentaMinhaRaquete() {
   if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}
function colisaoMinhaRaqueteBiblioteca(){
  colidiu = collideRectCircle(xRaquete,yRaquete,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if(colidiu){
      velocidadeXBolinha *= -1;
    }  
  
function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYoponente
}
function incluIPlacar(){
 stroke(225)
  textAlign(CENTER)
  textSize(16)
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(225);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}
  
function marcaPonto(){
  if (xBolinha > 580){
    meusPontos += 1;
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
    ponto.play();
    
  }
}  
  
}