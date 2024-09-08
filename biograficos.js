console.log("Aplicação iniciada!");

/*CRIANDO VARIAVEIS E ARMAZENANDO O VALOR DO ID DE CADA SEÇÃO DE RESULTADOS DAS PÁGINAS SECUNDÁRIAS */
let secaobiograficos = document.getElementById("resultadosbiograficos");

/*VARIÁVEL PARA GUARDAR OS RESULTADOS OBTIDOS */
let resultadosBiograficos = "";


/*PERCORRENDO DADOSOBJETOS, DO ARQUIVO DADOS.JS*/

for (let objetos of dadosObjetos) {
    /*VERIFICANDO SE O GENERO É BIOGRÁFICOS, E COLOCANDO OS RESULTADOS NA SEÇÃO DA PÁGINA BIOGRÁFICOS*/
    if (objetos.genero.includes("biograficos")) {
        resultadosBiograficos +=
            `<div class="item_resultado">
<h2> ${objetos.titulo} ( ${objetos.ano} ) </h2>
<p>${objetos.descricao}</p>
 </div>
`;

    }
}
secaobiograficos.innerHTML = resultadosBiograficos;



