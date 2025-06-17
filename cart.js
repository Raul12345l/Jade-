const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

// Obtener el audio (asumiendo que ya tienes <audio id="audioCarta" src="..."></audio> en tu HTML)
const audio = document.getElementById('audioCarta');

btnOpenElement.addEventListener('click', () => {
    btnOpenElement.disabled = true;
    btnCloseElement.disabled = false;

    const coverElement = document.querySelector('.cover');
    coverElement.classList.add('open-cover');

    setTimeout(() => {
        coverElement.style.zIndex = -1;

        const paperElement = document.querySelector('.paper');
        paperElement.classList.remove('close-paper');
        paperElement.classList.add('open-paper');
    }, 500);

    // Animacion del corazon
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';

    // Reproducir audio al abrir
    audio.play();
});

btnCloseElement.addEventListener('click', () => {
    btnOpenElement.disabled = false;
    btnCloseElement.disabled = true;

    const coverElement = document.querySelector('.cover');
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('open-paper');
    paperElement.classList.add('close-paper');

    setTimeout(() => {
        coverElement.style.zIndex = 0;
        coverElement.classList.remove('open-cover');

        // Animacion del corazon
        const heartElement = document.querySelector('.heart');
        heartElement.style.display = 'none';
    }, 500);

    // Pausar y reiniciar audio al cerrar
    audio.pause();
    audio.currentTime = 0;
});
