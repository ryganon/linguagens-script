function mudaVisibilidade(id){
    
    var children = document.getElementById('projeto_main').children;
    for (var i=0; i<children.length; i++) children[i].style.display="none";
    
    document.getElementById(id).style.display="block";
  }