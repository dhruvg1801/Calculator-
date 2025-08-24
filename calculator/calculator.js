const inputField = document.querySelector(".inputBox");

function addToInput(value) {
    inputField.value += value;
}

function clearInput() {
    inputField.value = "";
}

function calculate() {
    try {
        inputField.value = eval(inputField.value);
    } catch (error) {
        inputField.value = "Error";
    }
}
function deleteLast() {
    const i = inputField.value.length - 1;

    if (i >= 0) {
        inputField.value = inputField.value.slice(0, i);
    }
}