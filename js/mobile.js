function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuIcon = document.querySelector('.icon');
    
    menuMobile.classList.toggle('open');
    
    // Alterna o ícone
    if (menuMobile.classList.contains('open')) {
        menuIcon.classList.replace('bi-list', 'bi-x');
    } else {
        menuIcon.classList.replace('bi-x', 'bi-list');
    }
}