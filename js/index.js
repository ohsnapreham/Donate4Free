const menuButton = document.querySelector('.menu-toggle');
const drawer = document.querySelector('.drawer');

function setMenuOpen(isOpen) {
    drawer.inert = !isOpen;
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

menuButton.addEventListener('click', () => {
    setMenuOpen(drawer.inert);
});

drawer.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;

    const section = document.querySelector(link.hash);
    section.tabIndex = -1;
    section.focus({ preventScroll: true });
    setMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !drawer.inert) {
        setMenuOpen(false);
        menuButton.focus();
    }
});
