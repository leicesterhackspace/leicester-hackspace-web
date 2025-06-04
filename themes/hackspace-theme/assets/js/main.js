/**
 * Toggle the navigation dropdown
 */
function toggleNavDropdown() {
    const dropDown = document.querySelector("#nav-wrap");

    if (!dropDown) throw new Error("Failed to find navbar");
    if (dropDown.classList.contains("nav-toggled")) {
        dropDown.classList.remove("nav-toggled");
    } else {
        dropDown.classList.add("nav-toggled");
    }
}

function registerNav() {
    document.querySelector("#nav-mobile svg:last-child")?.addEventListener("click", (event) => {
        toggleNavDropdown();
    });
}
