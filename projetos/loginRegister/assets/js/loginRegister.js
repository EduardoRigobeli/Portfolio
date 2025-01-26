function toggleForms() {
    const loginForm = document.getElementById('form-login');//Pegar as divs que contenham os inputs e etc
    const registerForm = document.getElementById('form-register');
    loginForm.classList.toggle('hidden');//adiciona e também remove uma class dentro da tag 
    registerForm.classList.toggle('hidden');
}

function entrar() {
    alert("Login não enviara nada, mas obrigado por testar :)");
}

function register() {
    alert("Registrar-se não enviara nada, mas obrigado por testar :)");
}