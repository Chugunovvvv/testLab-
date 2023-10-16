
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const error = document.getElementById('error');
const inputName = document.getElementById('contact-name');
function validateName() {
    const name = inputName.value;
    if(name.length == 0 || name.length < 3) {
        error.innerHTML = 'Введите корректное имя';
        inputName.style.border = '2px solid red'
        return false;
    }
    error.innerHTML = '';
    inputName.style.border = ''
    return true;
}

function allValidate() {
    if(!validateName()) {
        error.innerHTML = 'Пожалуйста, введите корректное имя';
        inputName.style.border = '2px solid red';
        return false;
    }
    error.innerHTML = '';
    inputName.style.border = ''
    return true;
}