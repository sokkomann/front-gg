document.addEventListener("DOMContentLoaded", () => {
    setupConnectButtons();
});

function setupConnectButtons() {
    const modal = document.getElementById("disconnectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalConfirm = document.getElementById("modalConfirm");
    const modalCancel = document.getElementById("modalCancel");
    let pendingButton = null;

    function openModal(button) {
        pendingButton = button;

        let handle = "";
        const card = button.closest("[data-handle]");
        if (card) {
            handle = card.dataset.handle;
        } else {
            const handleElement = button
                .closest(".trend-item")
                ?.querySelector(".sidebar-user-handle");
            if (handleElement) {
                handle = handleElement.textContent.trim();
            }
        }

        if (modalTitle) {
            modalTitle.textContent = handle
                ? `${handle} 님과의 연결을 끊으시겠습니까?`
                : "연결을 끊으시겠습니까?";
        }

        modal?.classList.add("active");
    }

    function closeModal() {
        modal?.classList.remove("active");
        pendingButton = null;
    }

    modalConfirm?.addEventListener("click", () => {
        if (pendingButton) {
            pendingButton.classList.remove("connected");
            pendingButton.classList.add("default");
            pendingButton.textContent = "Connect";
            pendingButton.style.borderColor = "";
            pendingButton.style.color = "";
            pendingButton.style.background = "";
        }
        closeModal();
    });

    modalCancel?.addEventListener("click", closeModal);

    modal?.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("click", (event) => {
        const button = event.target.closest(".connect-btn, .connect-btn-sm");
        if (!button) {
            return;
        }

        if (button.classList.contains("default")) {
            button.classList.remove("default");
            button.classList.add("connected");
            button.textContent = "Connected";
            return;
        }

        if (button.classList.contains("connected")) {
            openModal(button);
        }
    });

    document.addEventListener("mouseover", (event) => {
        const button = event.target.closest(
            ".connect-btn.connected, .connect-btn-sm.connected",
        );
        if (!button) {
            return;
        }

        button.textContent = "Disconnect";
        button.style.borderColor = "#f4212e";
        button.style.color = "#f4212e";
        button.style.background = "rgba(244,33,46,.1)";
    });

    document.addEventListener("mouseout", (event) => {
        const button = event.target.closest(
            ".connect-btn.connected, .connect-btn-sm.connected",
        );
        if (!button) {
            return;
        }

        button.textContent = "Connected";
        button.style.borderColor = "#cfd9de";
        button.style.color = "#0f1419";
        button.style.background = "transparent";
    });
}
