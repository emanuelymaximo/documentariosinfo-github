console.log("Aplicação iniciada!");

/*CRIANDO VARIAVEIS E ARMAZENANDO O VALOR DO ID DE CADA SEÇÃO DE RESULTADOS DAS PÁGINAS SECUNDÁRIAS */
let secaocientificos = document.getElementById("resultadoscientificos");

/*VARIÁVEL PARA GUARDAR OS RESULTADOS OBTIDOS */
let resultadosCientificos = "";

/*PERCORRENDO DADOSOBJETOS, DO ARQUIVO DADOS.JS*/

for (let objetos of dadosObjetos) {

    /*VERIFICANDO SE O GENERO É CIENTÍFICOS, E COLOCANDO OS RESULTADOS NA SEÇÃO DA PÁGINA CIENTÍFICOS*/

    if (objetos.genero.includes("cientificos")) {
        resultadosCientificos +=
            `<div class="item_resultado">
<h2> ${objetos.titulo} ( ${objetos.ano} ) </h2>
<p>${objetos.descricao}</p>
 </div>
`;
    }

}
secaocientificos.innerHTML = resultadosCientificos;


