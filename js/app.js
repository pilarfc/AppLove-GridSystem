var modal = document.getElementById("myModal");


var modalImg = document.getElementById("modalImagen");
var captionText = document.getElementById("caption");
var imagenes = [];
var span = [];


for (var i = 0; i <= 12; i++){
 imagenes[i]=document.getElementsByClassName("mostrar")[i];
 imagenes[i].addEventListener("click", desplegar);
}


function desplegar(){
 modal.style.display = "block";
 modalImg.src = this.src;
}

for (var i = 0; i <= 12; i++){
 span[i]=document.getElementsByClassName("close")[0];
 span[i].addEventListener("click",cerrar);
}


function cerrar() {
 modal.style.display = "none";
}