const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Cargar el modo guardado en localStorage al inicio
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    // Alternar la clase dark-mode en el body
    body.classList.toggle('dark-mode');

    // Guardar la preferencia del usuario en localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
