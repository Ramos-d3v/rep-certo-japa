document.addEventListener("DOMContentLoaded", () => {
    // Configura o observador de interseção (detecta quando o elemento entra na tela)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que mostra o elemento com animação
                entry.target.classList.add('js-show');
            }
        });
    }, { 
        threshold: 0.1 // O elemento anima quando 10% dele estiver visível
    });

    // Seleciona todos os elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.card, .video-section, .header, .btn-produto');
    
    // Adiciona a classe oculta inicialmente e põe o observador para vigiar
    elementsToAnimate.forEach(el => {
        el.classList.add('js-hidden');
        observer.observe(el);
    });
});