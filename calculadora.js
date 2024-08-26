var display = document.querySelector('#display');

function mostrarDisplay(value) {
    if (value == '.') {
        display.value = '0';
    }
    display.value += value
}

function limparTudo() {
    display.value = '';
}

function resultado() {
    let r = eval(display.value);
    display.value = r;

    if (display.value == 'undefined') {
        display.value = '';
    }
}