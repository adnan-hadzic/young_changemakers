
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}


function increaseFont() {
    const root = document.documentElement;
    let currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--font-size'));
    currentSize += 2;
    root.style.setProperty('--font-size', `${currentSize}px`);
    localStorage.setItem('font-size', currentSize);
}


function decreaseFont() {
    const root = document.documentElement;
    let currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--font-size'));
    if (currentSize > 12) { 
        currentSize -= 2;
        root.style.setProperty('--font-size', `${currentSize}px`);
        localStorage.setItem('font-size', currentSize);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const savedFontSize = localStorage.getItem('font-size');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    if (savedFontSize) {
        document.documentElement.style.setProperty('--font-size', `${savedFontSize}px`);
    }
});
