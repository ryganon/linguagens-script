/*
 * Funções gerais
 * 
 * Material de ajuda:
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */

/*
  Funções para inserção e recuperação de conteúdo na Storage (permanente).
*/

function salvarConteudoStorage() {
  // verificando se a API de Storage está disponível
  if (typeof(Storage) !== "undefined") {
    
    var nome = document.getElementById("fnome").value;
    var email = document.getElementById("femail").value;
    
    localStorage.setItem("ls_nome", nome);
    localStorage.setItem("ls_email", email);

    //window.alert(nome + email);
  } else {
    window.alert("API Web Storage não encontrada");
  }
} 

function exibeConteudoStorage() {
  if (typeof(Storage) !== "undefined") {
    
    var getNome = localStorage.getItem("ls_nome");
    var getEmail = localStorage.getItem("ls_email");

    window.alert("Nome: " + getNome + " / Email: "+ getEmail);
  } else {
    window.alert("API Web Storage não encontrada");
  }
}

/*
  Funções para inserção e recuperação de conteúdo na Storage apenas
  na sessão.
*/


function salvarConteudoSession() {
  // verificando se a API de Storage está disponível
  if (typeof(Storage) !== "undefined") {
    var nome = document.getElementById("fnomeSession").value;
    var email = document.getElementById("femailSession").value;
    
    sessionStorage.setItem("ls_nome_session", nome);
    sessionStorage.setItem("ls_email_session", email);

    //window.alert(nome + email);
  } else {
    window.alert("API Web Storage não encontrada");
  }
} 

function exibeConteudoSession() {
  if (typeof(Storage) !== "undefined") {
    var getNome = sessionStorage.getItem("ls_nome_session");
    var getEmail = sessionStorage.getItem("ls_email_session");

    window.alert("Nome: " + getNome + " / Email: "+ getEmail);
  } else {
    window.alert("API Web Storage não encontrada");
  }
}