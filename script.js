function toggleDarkMode() {
    const DarkMode = document.querySelector("#modeSombre");
    const body = document.querySelector("body");

    if (DarkMode) {
        function modeSombre() {
            body.classList.toggle("sombre");

            if (body.classList.contains("sombre")) {
                DarkMode.textContent = "☀";
                document.documentElement.style.setProperty('--color-black', '#d9cdc7');
                document.documentElement.style.setProperty('--color-neutral', '#0a0805');
                document.documentElement.style.setProperty('--color-grey', '#8e8e8e');
                document.documentElement.style.setProperty('--color-d-grey', '#b2b2b2');
                document.documentElement.style.setProperty('--color-white', '#000000');

            } else {
                DarkMode.textContent = "🌙";
                document.documentElement.style.setProperty('--color-black', '#263238');
                document.documentElement.style.setProperty('--color-neutral', '#F5F7FA');
                document.documentElement.style.setProperty('--color-grey', '#717171');
                document.documentElement.style.setProperty('--color-d-grey', '#4D4D4D');
                document.documentElement.style.setProperty('--color-white', '#ffffff');
            }
        }
        DarkMode.addEventListener("click", modeSombre);
    }
}

window.addEventListener("DOMContentLoaded", function () {
    toggleDarkMode();
});
