// Selecionar os elementos do formulário e contêineres
const form = document.getElementById("multiplication-form");
const multiplicationTable = document.getElementById("multiplication-table");
const multiplicationTitle = document.getElementById("multiplication-title");
const multiplicationOperations = document.getElementById("multiplication-operations");

// Adicionar evento de submissão ao formulário
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o recarregamento da página

    // Obter os valores dos inputs
    const number = document.getElementById("number").value;
    const multiplicator = document.getElementById("multiplicator").value;

    // Validar os valores fornecidos
    if (number === "" || multiplicator === "") {
        alert("Por favor, insira os dois valores.");
        return;
    }

    // Limpar o conteúdo anterior da tabuada
    multiplicationOperations.innerHTML = "";

    // Atualizar o título da tabuada
    multiplicationTitle.querySelector("span").textContent = number;

    // Gerar a tabuada
    for (let i = 1; i <= multiplicator; i++) {
        const result = number * i;
        const operation = document.createElement("p");
        operation.textContent = `${number} x ${i} = ${result}`;
        multiplicationOperations.appendChild(operation);
    }
});
