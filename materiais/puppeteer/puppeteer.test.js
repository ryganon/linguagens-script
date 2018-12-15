let runApp = require("./puppeteer.playground.js")

const conexaoGC = 'ws://127.0.0.1:9222/devtools/browser/6569ca3a-9196-4126-ade2-12ef4288d47b';

const urlKaggle = 'https://www.kaggle.com/ryganon/account';
const urlGoogle = 'https://www.google.com';

let codigoJS = `
    let dados = document.getElementsByClassName('followers__name')[0].innerText 
    window.alert(dados)
`;

let codigoGoogle = `
    window.alert(document.title)
`;


// Executando
runApp.executaJS(conexaoGC, urlGoogle, codigoGoogle);

