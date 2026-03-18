const btn = document.getElementById("addr-search-btn");
if (btn) {
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    let isOpen = false;

    newBtn.addEventListener("click", () => {
        if (isOpen) return;
        isOpen = true;

        new daum.Postcode({
            oncomplete: function (data) {
                const fullAddr = data.roadAddress || data.jibunAddress;
                setReadonlyValue("postcode", data.zonecode);
                setReadonlyValue("addr-main", fullAddr);
                document.getElementById("addr-detail").focus();
                isOpen = false;
            },
            onclose: function () {
                isOpen = false;
            },
        }).open();
    });
}
document.getElementById("addr-search-btn").addEventListener("click", () => {
    new daum.Postcode({
        oncomplete: function (data) {
            const fullAddr = data.roadAddress || data.jibunAddress;
            document.getElementById("postcode").value = data.zonecode;
            document.getElementById("addr-main").value = fullAddr;
            document.getElementById("addr-detail").focus();
        },
    }).open();
});

document.addEventListener("DOMContentLoaded", () => {
    const fields = document.querySelectorAll(
        ".name-placeholder-wrap, .phone-number-placeholder",
    );

    fields.forEach((wrap) => {
        const input = wrap.querySelector("input");
        const label = wrap.querySelector(
            ".name-placeholder, .phone-placeholder",
        );
        const labelText = wrap.querySelector(".name-text, .phone-text");

        if (!input || !label) return;

        // ?먮윭 硫붿떆吏 ?붿냼 ?앹꽦
        const errorMsg = document.createElement("span");
        errorMsg.textContent = "?ㅼ떆 ?낅젰?섏꽭??;
        errorMsg.style.cssText = `
            display: none;
            color: rgb(244, 33, 46);
            font-size: 12px;
            font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin-top: 4px;
            padding-left: 8px;
        `;
        wrap.appendChild(errorMsg);

        // 珥덇린 ?곹깭 - ?대? 媛??덉쑝硫??쇰꺼 ?묎쾶
        if (input.value.trim() !== "") {
            shrink(labelText);
        }

        // ?ъ빱??- ?뚮? ?뚮몢由?+ ?쇰꺼 ?묎쾶
        input.addEventListener("focus", () => {
            label.style.borderColor = "rgb(29, 155, 240)";
            label.style.borderWidth = "2px";
            shrink(labelText);
        });

        // ?낅젰 以?- 媛??덉쑝硫??먮윭 ?④?, ?놁쑝硫??먮윭 ?쒖떆
        input.addEventListener("input", () => {
            if (input.value.trim() !== "") {
                errorMsg.style.display = "none";
            } else {
                errorMsg.style.display = "block";
            }
        });

        // 釉붾윭 - ?뚮? ?뚮몢由??쒓굅 + ?먮윭 臾댁“嫄??④?
        input.addEventListener("blur", () => {
            label.style.borderColor = "rgb(207, 217, 222)";
            label.style.borderWidth = "1px";
            errorMsg.style.display = "none";

            if (input.value.trim() === "" && !input.readOnly) {
                expand(labelText);
            }
        });
    });

    // 二쇱냼 ?먮룞 ?낅젰 ???쇰꺼 泥섎━
    document
        .getElementById("addr-search-btn")
        ?.addEventListener("click", () => {
            new daum.Postcode({
                oncomplete: function (data) {
                    const fullAddr = data.roadAddress || data.jibunAddress;
                    setReadonlyValue("postcode", data.zonecode);
                    setReadonlyValue("addr-main", fullAddr);
                    document.getElementById("addr-detail").focus();
                },
            }).open();
        });

    function setReadonlyValue(id, value) {
        const input = document.getElementById(id);
        if (!input) return;
        input.value = value;

        const wrap = input.closest(".phone-number-placeholder");
        const labelText = wrap?.querySelector(".phone-text");
        if (labelText) shrink(labelText);

        const label = wrap?.querySelector(".phone-placeholder");
        if (label) {
            label.style.borderColor = "rgb(207, 217, 222)";
            label.style.borderWidth = "1px";
        }
    }
});

function shrink(labelText) {
    if (!labelText) return;
    labelText.style.fontSize = "12px";
    labelText.style.paddingTop = "8px";
    labelText.style.color = "rgb(29, 155, 240)";
}

function expand(labelText) {
    if (!labelText) return;
    labelText.style.fontSize = "17px";
    labelText.style.paddingTop = "16px";
    labelText.style.color = "rgb(83, 100, 113)";
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
