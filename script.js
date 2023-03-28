const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password') // DOM OBJECT
const requiredInputs = document.querySelectorAll('.required');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    requiredInputs.forEach((input) => {
        validateInput(input)
    })
    form.classList.add('form-submitted')
})

requiredInputs.forEach((input) => {
    input.addEventListener('keyup', () => {
        if (form.classList.contains('form-submitted')) {
            validateInput(input)
        }
    })
})

function validateInput(input) {
    let valid = true;

    if (input.value == '')
        valid = false

    if (input.type == 'password')
        valid = validPassword(input)

    if (input.type == 'email')
        valid = validEmail(input)

    if (!valid) {
        input.classList.remove('dia-input-valid')
        input.classList.add('dia-input-invalid')
        toggleValidationText(input, 'show')
    }
    else {
        input.classList.remove('dia-input-invalid')
        input.classList.add('dia-input-valid')
        toggleValidationText(input, 'hide')
    }
}

function validPassword(input) {
    return input.value.length > 6
}

function validEmail(input) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input.value).toLowerCase());
}

function toggleValidationText(input, toggleShow) {
    let parent = input.parentNode;
    let required = parent.querySelector('.required-text')
    if (toggleShow == 'show') {
        required.classList.remove('hide')
        required.classList.add('show')
    }
    else if (toggleShow == 'hide') {
        required.classList.remove('show')
        required.classList.add('hide')
    }
}


