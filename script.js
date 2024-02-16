const nameBox = document.getElementById('nameBox');
const emailBox = document.getElementById('emailBox');
const phoneBox = document.getElementById('phoneBox');
const actionButton = document.getElementById('actionButton');
const textMessage = document.getElementById('textMessage');

function validateForm() {
    const name = nameBox.value.trim();
    const email = emailBox.value.trim();
    const phone = phoneBox.value.trim();
    const labels = document.querySelectorAll('label');

    if (name === '' || email === '' || phone === '') {
        displayErrorMessage('Preencha todos os campos ou coloque os valores corretos.');
        labels.forEach(label => label.style.color = 'red');
        return
    } 
        clearErrorMessages();
        displaySuccessMessage();
}

function displayErrorMessage(message) {
    textMessage.innerText = message;
    textMessage.style.color = 'red';
}

function clearErrorMessages() {
    textMessage.innerText = '';
    document.querySelectorAll('label').forEach(label => label.style.color = '');
}

function displaySuccessMessage() {
    actionButton.innerText = 'Enviado!';
    actionButton.style.backgroundColor = '#00FF00';
    displayMessage();
}

function displayMessage() {
    document.getElementById('validation-message').style.display = 'block';
    setTimeout(closeMessage, 5000);
}

function closeMessage() {
    document.getElementById('validation-message').style.display = 'none';
}

function resetForm() {
    nameBox.value = '';
    emailBox.value = '';
    phoneBox.value = '';
    actionButton.innerText = 'Enviar';
    actionButton.style.backgroundColor = '';
    clearErrorMessages();
}
