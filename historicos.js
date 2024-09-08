console.log("Aplicação iniciada!");



/*CRIANDO VARIAVEIS E ARMAZENANDO O VALOR DO ID DE CADA SEÇÃO DE RESULTADOS DAS PÁGINAS SECUNDÁRIAS */
let secaohistoricos = document.getElementById("resultadoshistoricos");


/*VARIÁVEL PARA GUARDAR OS RESULTADOS OBTIDOS */
let resultadosHistoricos = "";



/*PERCORRENDO DADOSOBJETOS, DO ARQUIVO DADOS.JS*/

for (let objetos of dadosObjetos) {
    /*VERIFICANDO SE O GENERO É HISTÓRICOS, E COLOCANDO OS RESULTADOS NA SEÇÃO DA PÁGINA HISTÓRICOS*/
    if (objetos.genero.includes("historicos")) {
        resultadosHistoricos +=
            `<div class="item_resultado">
<h2> ${objetos.titulo} ( ${objetos.ano} )</h2>
<p>${objetos.descricao}</p>
</div> `;
    }

}
secaohistoricos.innerHTML = resultadosHistoricos;


