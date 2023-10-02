// Função para alternar a exibição do menu hambúrguer
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
}

// Adicione um evento de clique ao ícone do menu hambúrguer
const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', toggleMenu);

// Função para fechar o menu ao clicar em um item
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        menu.classList.remove('show-menu');
    });
});