const puppeteer = require("puppeteer");



async function raspado_web(tabla,busqueda,n_paginas){
  let crear_tabla= tabla
  let busqueda_articulo= busqueda
  let numero_paginas_escrapeadas= n_paginas
  
    const fecha = new Date();
    const añoActual = fecha.getFullYear().toString();
    const hoy = fecha.getDate().toString();
    const mesActual = (fecha.getMonth()+1).toString();
    let fecha_actual= añoActual+"-"+mesActual+"-"+hoy

    async function amazon_raspado(fecha,web,pt_1,search,raspar) {
        const browser = await puppeteer.launch({
          headless: false,
          slowMo: 200,
        });
        const page = await browser.newPage();
        await page.goto(pt_1);

        let data_total="hola"
    
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
        await browser.close();

        if (data_total != "") {
          return data_total;
        }
    }
    let raspado_amazon= await amazon_raspado(fecha_actual, crear_tabla, "https://www.amazon.com/", busqueda_articulo, numero_paginas_escrapeadas);



    return "datos recoletados"
}
raspado_web("tabla","busqueda",1)
module.exports= raspado_web;