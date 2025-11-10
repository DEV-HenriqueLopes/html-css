const btmenu = document.getElementById('bt-menu');
const btperfil = document.getElementById('bt-perfil');
const header = document.querySelector('header');
const menuOculto = document.getElementById('conteudo-oculto');
const perfilOculto = document.getElementById('conteudo-oculto-perfil');
const imagemAlternavel = document.getElementById('seta-alternavel');

const IMAGEM_ORIGINAL = '../imagens/setas-para-cima.png';
const IMAGEM_FECHAR = '../imagens/setas-para-baixo.png'; 


function FecharTudo(){
    header.classList.remove('menu-expandido');
    menuOculto.classList.remove('expandir-menu');
    header.classList.remove('perfil-expandido');
    perfilOculto.classList.remove('expandir-perfil');
}
function MudarTamanhoMenu() {

    if (header.classList.contains('perfil-expandido')){
        FecharTudo();
    }

    header.classList.toggle('menu-expandido');
    menuOculto.classList.toggle('expandir-menu');

    if (header.classList.contains('menu-expandido')) {
        imagemAlternavel.src = IMAGEM_FECHAR;
    } else {
        imagemAlternavel.src = IMAGEM_ORIGINAL;
    }
}

function FecharComSeta() {
    if (header.classList.contains('menu-expandido')) {
        
        header.classList.remove('menu-expandido');
        menuOculto.classList.remove('expandir-menu');
        
        imagemAlternavel.src = IMAGEM_ORIGINAL;
    }

    if (header.classList.contains('perfil-expandido')) {
        
        header.classList.remove('perfil-expandido');
        perfilOculto.classList.remove('expandir-perfil');
        
        imagemAlternavel.src = IMAGEM_ORIGINAL;
    }
}

function MudarTamanhoPerfil() {

    if (header.classList.contains('menu-expandido')) {
        FecharTudo();
    }

    header.classList.toggle('perfil-expandido');
    perfilOculto.classList.toggle('expandir-perfil');

    if (header.classList.contains('perfil-expandido')) {
        imagemAlternavel.src = IMAGEM_FECHAR;
    } else {
        imagemAlternavel.src = IMAGEM_ORIGINAL;
    }
}

imagemAlternavel.addEventListener('click', FecharComSeta)
btmenu.addEventListener('click', MudarTamanhoMenu);
btperfil.addEventListener('click', MudarTamanhoPerfil);

