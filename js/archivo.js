var player= document.getElementById("primerAudio");

function accionPlay() {
   player.play();
}

function audioPause() {
  player.pause();
}

function restart() {
       player.load();//lo q hace laod  vuelve a cargar  el archivo
}


function subirVolumen() {
  player.volume += .05;
}

function bajarVolumen() {
  player.volume -= .05;
}
