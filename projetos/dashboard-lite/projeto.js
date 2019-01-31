function mudaVisibilidade(id){
    
    var children = document.getElementById('projeto_main').children;
    for (var i=0; i<children.length; i++) children[i].style.display="none";
    
    document.getElementById(id).style.display="block";
  }

function geoLocalizacao(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(exibePosicao);
  } else { 
    alert("Deu ruim.");
  }
}
  
function exibePosicao(position) {
  document.getElementById("latitude").value = position.coords.latitude;
  document.getElementById("longitude").value = position.coords.longitude;
 
}