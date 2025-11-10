document.addEventListener('DOMContentLoaded', function() {
    const menuBotao = document.getElementById('menu');
    const navHidden = document.getElementById('nav-hidden');

    if (menuBotao && navHidden) {
        menuBotao.addEventListener('click', function() {
            
            navHidden.classList.toggle('active');

            const estaAberto = navHidden.classList.contains('active');
            menuBotao.setAttribute('aria-expanded', estaAberto);
        });
    } else {
        console.error("Erro: Um ou ambos os elementos do menu hamburger não foram encontrados.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const history = document.getElementById('history');
    const body = document.body

    if (history) {
        history.addEventListener('click', function() {
            
            history.classList.toggle('open');
            body.classList.toggle('no-scroll')

            const open = history.classList.contains('open');
            history.setAttribute('aria-expanded', open);
        });
    } else {
        console.error("Erro: Um ou ambos os elementos do menu hamburger não foram encontrados.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const cardapio = document.getElementById('cardapio');
    const body = document.body

    if (cardapio) {
        cardapio.addEventListener('click', function() {
            
            cardapio.classList.toggle('open');
            body.classList.toggle('no-scroll')

            const open = cardapio.classList.contains('open');
            cardapio.setAttribute('aria-expanded', open);
        });
    } else {
        console.error("Erro: Um ou ambos os elementos do menu hamburger não foram encontrados.");
    }
});