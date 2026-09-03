const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (evento) {

    evento.preventDefault();

    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    
    formulario.reset();

});
