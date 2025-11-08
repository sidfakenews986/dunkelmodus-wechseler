document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme');
    const customColorInput = document.getElementById('customColor');
    const applyThemeButton = document.getElementById('applyTheme');

    // Funktion zum Anwenden des Themas
    function applyTheme(theme) {
        document.body.className = theme;
        if (theme === 'custom') {
            document.body.style.setProperty('--custom-bg', customColorInput.value);
            document.body.style.setProperty('--custom-fg', customColorInput.value === '#ffffff' ? '#000000' : '#ffffff');
        }
        localStorage.setItem('theme', theme);
    }

    // Erstes Setzen des Themas
    const savedTheme = localStorage.getItem('theme') || 'light';
    themeSelector.value = savedTheme;
    applyTheme(savedTheme);

    // Ereignis-Listener für das Thema wechseln
    themeSelector.addEventListener('change', () => {
        applyTheme(themeSelector.value);
    });

    // Ereignis-Listener für benutzerdefinierte Farbe anwenden
    applyThemeButton.addEventListener('click', () => {
        applyTheme('custom');
    });
});
