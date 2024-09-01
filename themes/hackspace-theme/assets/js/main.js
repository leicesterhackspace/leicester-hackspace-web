/**
 * Toggle the navigation dropdown
 */
function toggleNavDropdown(navButton) {
    const dropDown = document.querySelector("#nav-wrap");

    if (!dropDown) throw new Error("Failed to find navbar");
    dropDown.classList.toggle("nav-toggled");
    navButton.classList.toggle("nav-toggled");
}

function registerNav() {
    document.querySelector("#nav-mobile .nav-hamburger")?.addEventListener("click", (event) => {
        toggleNavDropdown(event.currentTarget);
    });
}
