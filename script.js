// Seleciona o formulário da página
const formulario = document.querySelector('form');

// Espera o usuário clicar em "Enviar mensagem"
formulario.addEventListener('submit', function (evento) {

    // Impede que a página recarregue
    evento.preventDefault();

    // Mostra o alerta pro usuário
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');

    // Limpa os campos do formulário
    formulario.reset();

});
