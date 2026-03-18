document.addEventListener("DOMContentLoaded", () => {
    const wraps = document.querySelectorAll(".name-placeholder-wrap, .phone-number-placeholder");
    const userIdInput = document.querySelector(".phone-number-placeholder .phone-input");

    wraps.forEach((wrap) => {
        const input = wrap.querySelector("input");
        const label = wrap.querySelector(".name-placeholder, .phone-placeholder");
        const labelText = wrap.querySelector(".name-text, .phone-text");

        if (!input || !label || !labelText) {
            return;
        }

        if (input.value.trim() !== "") {
            shrink(labelText);
        }

        input.addEventListener("focus", () => {
            label.style.borderColor = "rgb(29, 155, 240)";
            label.style.borderWidth = "2px";
            shrink(labelText);
        });

        input.addEventListener("input", () => {
            shrink(labelText);
            updateNextButtonState(userIdInput);
        });

        input.addEventListener("blur", () => {
            label.style.borderColor = "rgb(207, 217, 222)";
            label.style.borderWidth = "1px";

            if (input.value.trim() === "" && !input.readOnly) {
                expand(labelText);
            }
        });
    });

    updateNextButtonState(userIdInput);
});

function shrink(labelText) {
    labelText.style.fontSize = "12px";
    labelText.style.paddingTop = "8px";
    labelText.style.color = "rgb(29, 155, 240)";
}

function expand(labelText) {
    labelText.style.fontSize = "17px";
    labelText.style.paddingTop = "16px";
    labelText.style.color = "rgb(83, 100, 113)";
}

function updateNextButtonState(input) {
    const nextButton = document.querySelector(".next-button");
    const nextText = document.querySelector(".next-button-wrap-in-text-next");

    if (!input || !nextButton || !nextText) {
        return;
    }

    const hasUserId = input.value.trim() !== "";
    nextText.textContent = hasUserId ? "\uB2E4\uC74C" : "\uAC74\uB108\uB6F0\uAE30";
    nextButton.style.backgroundColor = "rgb(15, 20, 25)";
    nextButton.style.opacity = hasUserId ? "1" : "0.5";
}


// 공통 X(닫기) 버튼 동작
function bindJoinModalClose() {
    const closeButtons = document.querySelectorAll(".join-modal-header-close-button, .join-modal-close");
    if (!closeButtons.length) return;

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modal = document.querySelector(".join-modal");
            const root = modal?.closest(".join-modal-line1") || document.querySelector(".join-modal-line1");
            const overlay = document.querySelector(".join-modal-overlay") || document.querySelector(".join-modal-all");

            if (modal) modal.style.display = "none";
            if (root) root.style.display = "none";
            if (overlay) overlay.style.display = "none";
        });
    });
}

document.addEventListener("DOMContentLoaded", bindJoinModalClose);
