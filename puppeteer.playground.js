const puppeteer = require('puppeteer');


exports.executaJS = async function (conexaoGS, urlPagina, codigoJS) {

    // Inicializando o puppeteer
    const browser = await puppeteer.connect({
        browserWSEndpoint: conexaoGS, // endereço de conexão com o Chromium
        headless: true
      })
      
    console.log("Conectado ao navegador ...")
    console.log("Acessando página remota ... ")

    // Abrindo uma nova página
    const page = await browser.newPage();
    await page.goto(urlPagina);

    console.log("Executando código JS ... ")

    // Executando código JS dentro da página aberta
    const teste_javascript = await page.evaluate(codigoJS);
    
    //await browser.close()
}; // fim função



