function toggleForms() {
    const login = document.getElementById('form-login');
    const registro = document.getElementById('form-register');
    login.classList.toggle('hidden');//ADICIONAR UMA CLASSE - CHAMADA - HIDDEN
    registro.classList.toggle('hidden');
}

function entrar() {
    alert('Bem-Vindo de volta! Temos novidades para você:)');
}

function registro() {
    alert('Bem-Vindo! Aproveite bem o nosso site:)');
}