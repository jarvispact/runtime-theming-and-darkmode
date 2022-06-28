import './reset.css';
import './style.css';

const themeContainer = document.getElementById('theme') as HTMLDivElement;
const darkModeButton = document.getElementById('dark-mode-toggle') as HTMLButtonElement;
const themeButton = document.getElementById('theme-toggle') as HTMLButtonElement;

darkModeButton.addEventListener('click', () => {
    const { matches: systemDarkMode } = window.matchMedia('(prefers-color-scheme: dark');
    const darkModeAttrValue = themeContainer.getAttribute('dark-mode') as null | 'true' | 'false';

    if (systemDarkMode) {
        if (darkModeAttrValue === null || darkModeAttrValue === 'true') {
            themeContainer.setAttribute('dark-mode', 'false');
        } else {
            themeContainer.setAttribute('dark-mode', 'true');
        }
    } else {
        if (darkModeAttrValue === null || darkModeAttrValue === 'false') {
            themeContainer.setAttribute('dark-mode', 'true');
        } else {
            themeContainer.setAttribute('dark-mode', 'false');
        }
    }
});

themeButton.addEventListener('click', () => {
    const themeAttrValue = themeContainer.getAttribute('theme') as null | 'marvel' | 'dc';

    // marvel is the default
    if (themeAttrValue === null || themeAttrValue === 'marvel') {
        themeContainer.setAttribute('theme', 'dc');
    } else {
        themeContainer.setAttribute('theme', 'marvel');
    }
});
