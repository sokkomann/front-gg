window.addEventListener("load", () => {
    const createPostButton = document.getElementById("createPostButton");
    if (!createPostButton) {
        return;
    }

    window.setTimeout(() => {
        createPostButton.click();
    }, 0);
});
