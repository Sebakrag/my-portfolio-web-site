/* Useful JavaScript functions */
// confirm, prompt, alert.
// print: Opens the print dialog to print the current document

const THEME_KEY = "theme";
const DARK = "dark";
const LIGHT = "light";

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem(THEME_KEY) || LIGHT;
    const nextTheme = currentTheme === DARK ? LIGHT : DARK;
    applyTheme(nextTheme);
}

function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme) {
        applyTheme(savedTheme);
        return;
    }

    // Fallback: preferencia del sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? DARK : LIGHT);
}

function main() {
    "use strict";
    initTheme();

    const themeToggle = document.querySelector("#theme-toggle");
    themeToggle.addEventListener("click", toggleTheme);
}

main();
