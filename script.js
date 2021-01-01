// script.js
var v = document.getElementById("villa");
var papel = v.getContext("2d");
var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };

 xxx = 250;
 yyy = 250;

document.addEventListener("keydown", moverLobo);
document.addEventListener("keyup", function (evento) {
  keys = false
});

var fondo = {
  url: "images/tile.png",
  cargaOK: false
}
var vaca = {
  url: "images/vaca.png",
  cargaOK: false
}
var cerdo = {
  url: "images/cerdo.png",
  cargaOK: false
}
var pollo = {
  url: "images/pollo.png",
  cargaOK: false
}
var lobo = {
  url: "images/lobo.png",
  cargaOK: false
}


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

lobo.imagen = new Image();
lobo.imagen.src = "images/lobo.png";
lobo.imagen.addEventListener("load", cargarLobos);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}
function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}
function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}
function cargarLobos() {
  lobo.cargaOK = true;
  dibujar();
}

function moverLobo(evento) {
  var keys = evento.keyCode;
  var MOVIMIENTO = 80;

  if (keys && keys == teclas.UP) {
    console.log("UP");
    yyy -= MOVIMIENTO;
    dibujar(xxx,yyy);
  }
  if (keys && keys == teclas.DOWN) {
    console.log("DOWN");
    yyy += MOVIMIENTO;
    dibujar(xxx,yyy);
  }
  if (keys && keys == teclas.LEFT) {
    console.log("LEFT");
    xxx -= MOVIMIENTO;
    dibujar(xxx,yyy);

  }
  if (keys && keys == teclas.RIGHT) {
    console.log("RIGHT");
    xxx += MOVIMIENTO;
    dibujar(xxx,yyy);
  }

}

//draw
function dibujar() {

  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (pollo.cargaOK) {
      var cantidad = getRndInteger(5,25);
      for (var i = 0; i < cantidad; i++) {
      var x = getRndInteger(0, 5);
      x *= 80;
      var y = getRndInteger(0, 5);
      y *= 80;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if (cerdo.cargaOK) {
    var cantidad = getRndInteger(4,8);
    for (var i = 0; i < cantidad; i++) {
      var x = getRndInteger(0, 5);
      x *= 80;
      var y = getRndInteger(0, 5);
      y *= 80;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if (vaca.cargaOK) {
    var cantidad = getRndInteger(5,20);
    for (var i = 0; i < cantidad; i++) {
      var x = getRndInteger(0, 5);
      x *= 80;
      var y = getRndInteger(0, 5);
      y *= 80;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  
  if (lobo.cargaOK) {
    console.log("lobo(" + xxx + ", " + yyy + ")");
    papel.drawImage(lobo.imagen, xxx, yyy);
  }
}


function getRndInteger(MIN, MAX) {
  var z = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  return z;
} 