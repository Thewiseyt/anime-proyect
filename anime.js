const personajes = document.querySelectorAll('.personaje');
const nombre = document.getElementById('nombre');

personajes.forEach(personaje => {
    personaje.addEventListener('click', () => {
    // Animación
    anime({
    targets: personaje,
    translateY: -30,
    rotate: 15,
    duration: 500,
    easing: 'easeOutQuad',
    direction: 'alternate'
    });

    // Mostrar nombre
    nombre.textContent = personaje.dataset.nombre;
    nombre.style.opacity = 1;

    // Reproducir sonido
    const sonido = personaje.dataset.sonido;
    if (sonido) {
    const audio = new Audio(sonido);
    audio.play().catch(err => console.log("Error al reproducir:", err));
    }
    });
});
