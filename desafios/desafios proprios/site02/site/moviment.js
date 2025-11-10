window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    if (window.scrollY > 585) { 

        header.classList.add('mudar-cor');
    } else {

        header.classList.remove('mudar-cor');
    }
});