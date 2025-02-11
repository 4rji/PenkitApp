const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    // Aquí puedes exponer funciones seguras al proceso de renderizado
    platform: process.platform
});

window.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle')
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode')
        })
    }

    const buttons = document.querySelectorAll('.buttons button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Aquí puedes agregar la lógica para filtrar posts
            console.log(`Filter by: ${button.textContent}`)
        })
    })
}) 