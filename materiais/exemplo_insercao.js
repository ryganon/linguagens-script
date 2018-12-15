// Apenas definindo funções de auxílio


// ATIVIDADE 1 - ADICIONANDO COMPONENTES NA TELA

/**
 * 
 * @param {*} nome 
 */
function insereNovoBotao(nome) {

    let botao = document.createElement("input")
    
    botao.setAttribute("value", "Novo Botão")
    botao.setAttribute("name", nome)
    botao.setAttribute("type", "submit")
    botao.setAttribute("style", "display:block")
    
    //botao.setAttribute("onclick", "exibeTitulo()")



    
    let id_content = document.getElementById("content")

    id_content.appendChild(botao)
}

/**
 * 
 */
function exibeTitulo() {
    window.alert(document.title)
}

/**
 * Insere um novo campo INPUT de texto
 * @param {*} nome 
 */
function insereNovoCampoTexto(nome){

    let campo_texto = document.createElement("input")
    
    campo_texto.setAttribute("value", "")
    campo_texto.setAttribute("name", nome)
    campo_texto.setAttribute("type", "text")
    campo_texto.setAttribute("style", "display:block")

    let id_content = document.getElementById("content")

    id_content.appendChild(campo_texto)
}


// ATIVIDADE 2 - UTILIZANDO TEMPOS E DATAS

/**
 * https://www.w3schools.com/jsref/met_win_setinterval.asp
 */

let relogio

function iniciaRelogio(nome_input){

    window.setInterval(function() {

        data_atual = new Date()
        let input_texto = document.getElementsByName(nome_input)[0]
        
        input_texto.value = data_atual.toLocaleTimeString()

    }, 1000)

}

// APRIMORANDO O RELOGIO

function iniciaRelogioNovo(nome_botao, nome_input){

    let botao_desligar = document.getElementsByName(nome_botao)[0]
    //botao_relogio.onclick = desligaRelogio
    botao_desligar.value = "Desligar"

    botao_desligar.addEventListener('click', function(){
        desligaRelogio(nome_botao, nome_input)
    })
    
    relogio = window.setInterval(function() {

        let data_atual = new Date()
        let input_texto = document.getElementsByName(nome_input)[0]
        
        input_texto.value = data_atual.toLocaleTimeString()

    }, 1000)
    
}

/**
 * 
 * @param {*} nome_input 
 */
function desligaRelogio(nome_botao, nome_input) {
    
    let botao_ligar = document.getElementsByName(nome_botao)[0]
    botao_ligar.value = "Ligar"

    botao_ligar.addEventListener('click', function(){
        iniciaRelogioNovo(nome_botao, nome_input)
    })

    window.clearInterval(relogio)
}    