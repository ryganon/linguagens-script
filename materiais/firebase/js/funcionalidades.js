// Adicionando código
var _BANCO = firebase.firestore();
console.log(_BANCO);


function adicionarDados() {

    var dados_nome = document.getElementById("dados_nome").value;
    var dados_email = document.getElementById("dados_email").value;

    // Add a new document in collection "cities"
    _BANCO.collection("usuarios").doc(dados_nome).set({
        nome: dados_nome,
        email: dados_email
    })
    .then(function() {
        window.alert("Cadastrado com sucesso");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        window.alert("Algo de errado não está certo");
    });
}

function listarDadosCadastrados() {
    var _html = document.getElementById("lista");
    _html.innerHTML = "";
    
    _BANCO.collection("usuarios").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            _html.innerHTML += `<ul>${doc.data().nome} + ${doc.data().email} </ul>`;            
            
            //console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}

  