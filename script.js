document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme');
    const customColorInput = document.getElementById('customColor');
    const applyThemeButton = document.getElementById('applyTheme');

    // Function to apply the theme
    function applyTheme(theme) {
        document.body.className = theme;
        if (theme === 'custom') {
            const customColor = customColorInput.value.trim() || '#eeeeee'; // Default to light gray
            document.body.style.setProperty('--custom-bg', customColor);
            document.body.style.setProperty('--custom-fg', customColor === '#ffffff' ? '#000000' : '#ffffff');
        }
        localStorage.setItem('theme', theme);
    }

    // Initial theme setting
    const savedTheme = localStorage.getItem('theme') || 'light';
    themeSelector.value = savedTheme;
    applyTheme(savedTheme);

    // Event listener for theme change
    themeSelector.addEventListener('change', () => {
        applyTheme(themeSelector.value);
    });

    // Event listener for applying custom color
    applyThemeButton.addEventListener('click', () => {
        const isValidColor = /^(#[0-9A-F]{6}|#[0-9A-F]{3})$/i.test(customColorInput.value.trim());
        if (isValidColor) {
            applyTheme('custom');
        } else {
            alert('Please enter a valid hex color code.');
        }
    });
});