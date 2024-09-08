console.log("Aplicação iniciada!");



/*CRIANDO VARIAVEIS E ARMAZENANDO O VALOR DO ID DE CADA SEÇÃO DE RESULTADOS DAS PÁGINAS SECUNDÁRIAS */
let secaosociedade = document.getElementById("resultadossociedade");

/*VARIÁVEL PARA GUARDAR OS RESULTADOS OBTIDOS */
let resultadosSociedade = "";


/*PERCORRENDO DADOSOBJETOS, DO ARQUIVO DADOS.JS*/

for (let objetos of dadosObjetos) {
    /*VERIFICANDO SE O GENERO É SOCIEDADE, E COLOCANDO OS RESULTADOS NA SEÇÃO DA PÁGINA SOCIEDADE CONTEMPORÂNEA*/
    if (objetos.genero.includes("sociedade")) {
        resultadosSociedade +=
            `<div class="item_resultado">
<h2> ${objetos.titulo} ( ${objetos.ano} )</h2>
<p>${objetos.descricao}</p>
</div> `;
    }
}

secaosociedade.innerHTML = resultadosSociedade;



