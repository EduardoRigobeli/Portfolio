const botoes = [
    {id: 'a1', message: 'A1 - Aqui esta sua Água!'},
    {id: 'a2', message: 'A2 - Aqui esta sua Coca-Cola!'},
    {id: 'a3', message: 'A3 - Aqui esta seu Guaraná!'},
    {id: 'a4', message: 'A4 - Aqui esta seu Sprit!'},
    {id: 'b1', message: 'B1 - Aqui esta sua Torta!'},
    {id: 'b2', message: 'B2 - Aqui esta seu Amendoim!'},
    {id: 'b3', message: 'B3 - Aqui esta seu Chips de Batata!'},
    {id: 'b4', message: 'B4 - Aqui esta seu Biscoito Salgado!'},
    {id: 'c1', message: 'C1 - Aqui esta seu Chocolate!'},
    {id: 'c2', message: 'C2 - Aqui esta seu Chiclete!'},
    {id: 'c3', message: 'C3 - Aqui esta seu Cookie!'},
    {id: 'c4', message: 'C4 - Aqui esta seu Pirulito!'}
];

const resposta = document.getElementById('res'); 

botoes.forEach(button => {
    const btnElement = document.getElementById(button.id);
    btnElement.addEventListener('click', (e) => {
        e.preventDefault();
        resposta.textContent = button.message
    });
});