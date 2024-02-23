// Elementos
const inputElement = document.querySelector("#input")
const fromElement = document.querySelector("#from")
const toElement = document.querySelector("#to")
const outputElement = document.querySelector("#output")
const convertButton = document.querySelector("#convert-btn")
const messageElement = document.querySelector("#message")

// Função

function convert () {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
    }

    // Converso metros

    let meters
    switch (fromValue) {
        case "m":
            meters = inputElement.value  
            break;
        case "km":
            meters = inputElement.value * 1000
            break;
        case "cm":
            meters = inputElement.value / 100
            break;
        case "mm":
            meters = inputElement.value / 1000
            break;
    }

    // Metros unidade de saída

    switch (toValue) {
        case "m":
            result = meters  
            break;
        case "km":
            result = meters / 1000
            break;
        case "cm":
            result = meters * 100
            break;
        case "mm":
            result = meters * 1000
            break;
    }

    // Exibir resultado
    outputElement.value = result;

    // Exibir mensagem
    
    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text 
    
    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
    messageElement.textContent = message;

    return;
}

convertButton.addEventListener("click", convert);
