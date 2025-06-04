/**
 * Toggle the navigation dropdown
 */
function toggleNavDropdown(navButton) {
    const dropDown = document.querySelector("#nav-wrap");

    if (!dropDown) throw new Error("Failed to find navbar");
    dropDown.classList.toggle("nav-toggled");
    navButton.classList.toggle("nav-toggled");
}

window.addEventListener("load", () => {
    document.querySelector("#nav-mobile .nav-hamburger")?.addEventListener("click", (event) => {
        toggleNavDropdown(event.currentTarget);
    });
});

/**
 * Open the modal dialog with an image
 * @param src The path to the image to open in the modal
 */
function spawnModal(src) {
    const modal = document.querySelector("#image-modal");

    const preload = new Image();
    preload.src = src;
    preload.addEventListener("load", () => {
        modal.querySelector("img").src = preload.src;
        modal.showModal();
    })
}

window.addEventListener("load", () => {
    const modal = document.querySelector("#image-modal");
    modal.querySelector("button").addEventListener("click", () => modal.close());

    modal.addEventListener("click", (event) => {
        if (event.target === modal) modal.close()
    });

    document.querySelectorAll("picture[data-large]")
        .forEach(picture => {
            picture.addEventListener("click", () => {
                spawnModal(picture.dataset.large);
            })
        });
})
