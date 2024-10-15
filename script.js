document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o formulário e os campos de input
    const form = document.querySelector('.form-contato');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const nameInput = document.querySelector('#name');

    // Função para verificar se o email é válido
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar email
        return emailPattern.test(email);
    }

    // Função para verificar se a mensagem foi preenchida
    function isMessageFilled(message) {
        return message.trim() !== ''; // Verifica se a mensagem não está vazia ou com espaços
    }

    // Função para verificar se o nome foi preenchido
    function isNameFilled(name) {
        return name.trim() !== ''; // Verifica se o nome não está vazio ou com espaços
    }

    // Manipula o envio do formulário
    form.addEventListener('submit', function (event) {
        const emailValue = emailInput.value;
        const messageValue = messageInput.value;
        const nameValue = nameInput.value;

        // Verificações
        if (!isNameFilled(nameValue)) {
            alert('Por favor, insira seu nome.');
            event.preventDefault(); // Impede o envio do formulário
            return;
        }

        if (!isValidEmail(emailValue)) {
            alert('Por favor, insira um email válido.');
            event.preventDefault(); // Impede o envio do formulário
            return;
        }

        if (!isMessageFilled(messageValue)) {
            alert('Por favor, escreva uma mensagem antes de enviar.');
            event.preventDefault(); // Impede o envio do formulário
            return;
        }

        // Caso tudo esteja correto, o formulário pode ser enviado
        alert('Formulário enviado com sucesso!');
    });
});