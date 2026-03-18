const composerEmojiCategoryMeta = {
    recent: {
        label: "최근",
        sectionTitle: "최근",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweet-modal__emoji-tab-icon"><g><path d="M12 1.75A10.25 10.25 0 112.75 12 10.26 10.26 0 0112 1.75zm0 1.5A8.75 8.75 0 1020.75 12 8.76 8.76 0 0012 3.25zm.75 3.5v5.19l3.03 1.75-.75 1.3-3.78-2.18V6.75h1.5z"></path></g></svg>',
    },
    smileys: {
        label: "스마일리 및 사람",
        sectionTitle: "스마일리 및 사람",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweet-modal__emoji-tab-icon"><g><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20c-5.109 0-9.25 4.141-9.25 9.25s4.141 9.25 9.25 9.25 9.25-4.141 9.25-9.25S17.109 2.75 12 2.75zM9 11.75c-.69 0-1.25-.56-1.25-1.25S8.31 9.25 9 9.25s1.25.56 1.25 1.25S9.69 11.75 9 11.75zm6 0c-.69 0-1.25-.56-1.25-1.25S14.31 9.25 15 9.25s1.25.56 1.25 1.25S15.69 11.75 15 11.75zm-8.071 3.971c.307-.298.771-.397 1.188-.253.953.386 2.403.982 3.883.982s2.93-.596 3.883-.982c.417-.144.88-.044 1.188.253a.846.846 0 01-.149 1.34c-1.254.715-3.059 1.139-4.922 1.139s-3.668-.424-4.922-1.139a.847.847 0 01-.149-1.39z"></path></g></svg>',
    },
    animals: {
        label: "동물 및 자연",
        sectionTitle: "동물 및 자연",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweet-modal__emoji-tab-icon"><g><path d="M12 3.5c3.77 0 6.75 2.86 6.75 6.41 0 3.17-1.88 4.94-4.15 6.28-.74.44-1.54.9-1.6 1.86-.02.38-.33.68-.71.68h-.6a.71.71 0 01-.71-.67c-.07-.95-.86-1.42-1.6-1.85C7.13 14.85 5.25 13.08 5.25 9.91 5.25 6.36 8.23 3.5 12 3.5zm-4.79-.97c.61 0 1.1.49 1.1 1.1 0 .32-.14.63-.39.84-.4.34-.78.78-1.08 1.3-.18.3-.49.48-.84.48-.61 0-1.1-.49-1.1-1.1 0-.14.03-.29.09-.42.47-1.04 1.17-1.93 2.02-2.63.19-.15.43-.24.7-.24zm9.58 0c.27 0 .51.09.7.24.85.7 1.55 1.6 2.02 2.63.06.13.09.28.09.42 0 .61-.49 1.1-1.1 1.1-.35 0-.66-.18-.84-.48-.3-.52-.68-.96-1.08-1.3a1.1 1.1 0 01-.39-.84c0-.61.49-1.1 1.1-1.1z"></path></g></svg>',
    },
    food: {
        label: "음식 및 음료",
        sectionTitle: "음식 및 음료",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweet-modal__emoji-tab-icon"><g><path d="M5 10.5c0-3.59 3.36-6.5 7.5-6.5s7.5 2.91 7.5 6.5v.58a5.42 5.42 0 01-2.08 4.26L16.5 21H8.5l-1.42-5.66A5.42 5.42 0 015 11.08v-.58zm2 0v.58c0 1.08.5 2.08 1.36 2.76l.3.24.95 3.92h5.78l.95-3.92.3-.24a3.42 3.42 0 001.36-2.76v-.58c0-2.48-2.47-4.5-5.5-4.5S7 8.02 7 10.5z"></path></g></svg>',
    },
    activities: {
        label: "활동",
        sectionTitle: "활동",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweet-modal__emoji-tab-icon"><g><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75S17.385 21.75 12 21.75 2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 1.5A8.25 8.25 0 103.75 12 8.26 8.26 0 0012 3.75zm-4.1 4.5c.27 0 .53.12.71.33l1.94 2.55 3.12-2.29c.36-.27.87-.22 1.18.12l2.83 3.12a.88.88 0 01-.07 1.24.88.88 0 01-1.24-.07l-2.3-2.54-3.16 2.33a.88.88 0 01-1.23-.16L7.2 9.64a.88.88 0 01.7-1.39z"></path></g></svg>',
    },
    travel: {
        label: "여행 및 장소",
        sectionTitle: "여행 및 장소",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweet-modal__emoji-tab-icon"><g><path d="M12 2.25c-4.142 0-7.5 3.245-7.5 7.248 0 5.207 6.46 11.611 6.735 11.881a1.08 1.08 0 001.53 0c.275-.27 6.735-6.674 6.735-11.881 0-4.003-3.358-7.248-7.5-7.248zm0 17.493c-1.758-1.878-6-6.838-6-10.245 0-3.172 2.686-5.748 6-5.748s6 2.576 6 5.748c0 3.407-4.242 8.367-6 10.245zm0-13.243a3 3 0 100 6 3 3 0 000-6z"></path></g></svg>',
    },
    objects: {
        label: "사물",
        sectionTitle: "사물",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweet-modal__emoji-tab-icon"><g><path d="M12 2.5c2.07 0 3.75 1.68 3.75 3.75 0 1.45-.83 2.71-2.04 3.33l-.21.11V11h.5A2.5 2.5 0 0116.5 13.5v1.38c0 1.27-.7 2.43-1.82 3.03l-.93.5V21.5h-3.5v-3.09l-.93-.5A3.44 3.44 0 017.5 14.88V13.5A2.5 2.5 0 0110 11h.5V9.69l-.21-.11A3.75 3.75 0 018.25 6.25 3.75 3.75 0 0112 2.5zm0 1.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-2 8.5a1 1 0 00-1 1v1.38c0 .72.4 1.39 1.04 1.73l1.71.92v1.47h.5v-1.47l1.71-.92A1.97 1.97 0 0015 14.88V13.5a1 1 0 00-1-1h-4z"></path></g></svg>',
    },
    symbols: {
        label: "기호",
        sectionTitle: "기호",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweet-modal__emoji-tab-icon"><g><path d="M5 4h14v4.5h-2V6H7v2.5H5V4zm2 6h4v4H7v-4zm6 0h4v4h-4v-4zM5 16h6v4H5v-4zm8 0h6v4h-6v-4z"></path></g></svg>',
    },
    flags: {
        label: "깃발",
        sectionTitle: "깃발",
        icon: '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweet-modal__emoji-tab-icon"><g><path d="M6 2.75A.75.75 0 016.75 2h.5a.75.75 0 01.75.75V3h9.38c.97 0 1.45 1.17.76 1.85L16.1 6.9l2.05 2.05c.69.68.21 1.85-.76 1.85H8v10.45a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V2.75z"></path></g></svg>',
    },
};

const composerEmojiCategoryData = {
    smileys: [
        "😀",
        "😃",
        "😄",
        "😁",
        "😂",
        "😊",
        "😉",
        "😍",
        "🥰",
        "😎",
        "🤔",
        "😭",
        "🥳",
        "🤩",
        "😴",
        "😤",
        "🤯",
        "🫠",
    ],
    animals: [
        "🐶",
        "🐱",
        "🐻",
        "🐼",
        "🦊",
        "🐯",
        "🦁",
        "🐸",
        "🐵",
        "🐧",
        "🐦",
        "🦄",
        "🐝",
        "🦋",
        "🌸",
        "🌿",
        "🌙",
        "⭐",
    ],
    food: [
        "🍔",
        "🍕",
        "🍜",
        "🍣",
        "🍩",
        "🍪",
        "🍫",
        "🍿",
        "🥐",
        "🍎",
        "🍓",
        "🍉",
        "🍇",
        "☕",
        "🍵",
        "🥤",
    ],
    activities: [
        "⚽",
        "🏀",
        "🏈",
        "⚾",
        "🎾",
        "🎮",
        "🎧",
        "🎤",
        "🎬",
        "📚",
        "🎯",
        "🎨",
        "🧩",
        "🎻",
        "🥁",
        "🏆",
    ],
    travel: [
        "✈️",
        "🚗",
        "🚆",
        "🚢",
        "🚀",
        "🏝️",
        "🏔️",
        "🏙️",
        "🌉",
        "🗼",
        "🗽",
        "🏟️",
        "🌍",
        "🧭",
        "🧳",
        "📍",
    ],
    objects: [
        "📱",
        "💻",
        "⌚",
        "📷",
        "🎁",
        "💡",
        "🔒",
        "🧸",
        "🛍️",
        "💼",
        "📦",
        "🔋",
        "📡",
        "🧪",
        "🛠️",
        "💎",
    ],
    symbols: [
        "❤️",
        "💙",
        "💚",
        "💛",
        "🖤",
        "💯",
        "✨",
        "🔥",
        "✅",
        "❌",
        "⚠️",
        "❓",
        "➕",
        "➖",
        "♻️",
        "🔔",
    ],
    flags: [
        "🇰🇷",
        "🇺🇸",
        "🇯🇵",
        "🇨🇳",
        "🇬🇧",
        "🇫🇷",
        "🇩🇪",
        "🇸🇬",
        "🇦🇺",
        "🇨🇦",
        "🇪🇸",
        "🇮🇹",
        "🇹🇭",
        "🇻🇳",
        "🇧🇷",
        "🇮🇳",
    ],
};

window.addEventListener("DOMContentLoaded", setupPostDetailPage);

// 게시물 상세 화면의 액션 바 초기화만 연결한다.
function setupPostDetailPage() {
    setupInlineReplyComposer();
    setupPostDetailActions();
}

// 메인 게시글 모달의 답글 작성 기능 중 상세 화면에 필요한 것만 가볍게 다시 묶는다.
function setupInlineReplyComposer() {
    const composer = document.querySelector(".post-detail-inline-reply");
    if (!composer) {
        return;
    }

    const q = (selector) => composer.querySelector(selector);
    const qAll = (selector) => Array.from(composer.querySelectorAll(selector));
    const editor = q("[data-testid='tweetTextarea_0']");
    const footerBottom = composer.querySelector(".tweet-modal__footer-bottom");
    const context = q(".post-detail-inline-reply-context");
    const emojiButton = q("[data-testid='emojiButton']");
    const emojiPicker = q(".tweet-modal__emoji-picker");
    const emojiSearchInput = q("[data-testid='emojiSearchInput']");
    const emojiContent = q("[data-testid='emojiPickerContent']");
    const emojiTabs = qAll(".tweet-modal__emoji-tab");
    const mediaUploadButton = q("[data-testid='mediaUploadButton']");
    const fileInput = q("[data-testid='fileInput']");
    const attachmentPreview = q("[data-attachment-preview]");
    const attachmentMedia = q("[data-attachment-media]");
    const attachmentMetaButtons = qAll(".tweet-modal__attachment-meta-btn");
    const geoButton = q("[data-testid='geoButton']");
    const geoButtonPath = geoButton?.querySelector("path");
    const locationView = q(".tweet-modal__location-view");
    const locationCloseButton = q("[data-testid='location-back']");
    const locationSearchInput = q("[data-location-search]");
    const locationList = q("[data-location-list]");
    const locationItems = qAll(".tweet-modal__location-item");
    const locationDisplay = q("[data-location-display]");
    const locationName = q("[data-location-name]");
    const locationDeleteButton = q("[data-location-delete]");
    const locationCompleteButton = q("[data-location-complete]");
    const submitButton = q("[data-testid='tweetButton']");
    const gauge = q("#replyGauge");
    const gaugeText = q("#replyGaugeText");
    const gifButton = q("[data-testid='gifSearchButton']");
    const maxLength = 500;
    const maxAttachments = 4;
    const emojiRecentsKey = "post_detail_inline_reply_recent_emojis";
    let activeEmojiCategory = "recent";
    let selectedLocation = null;
    let pendingLocation = null;
    let attachedFiles = [];
    let attachmentPreviewUrls = [];
    let savedSelection = null;

    function getEditorLength() {
        return editor?.textContent?.replace(/\u00a0/g, " ").trim().length ?? 0;
    }

    function resetEditorIfEmpty() {
        if (!editor || getEditorLength() > 0) {
            return;
        }
        editor.innerHTML = "";
    }

    function getRecentEmojis() {
        try {
            const saved = window.localStorage.getItem(emojiRecentsKey);
            const parsed = saved ? JSON.parse(saved) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    }

    function saveRecentEmoji(emoji) {
        const next = getRecentEmojis().filter((item) => item !== emoji);
        next.unshift(emoji);
        try {
            window.localStorage.setItem(
                emojiRecentsKey,
                JSON.stringify(next.slice(0, 18)),
            );
        } catch {
            return;
        }
    }

    // 입력 상태, 첨부 상태, 글자 수를 한 번에 맞춰 submit 활성화와 게이지를 갱신한다.
    function syncInlineReplySubmitState() {
        const currentLength = getEditorLength();
        const remaining = maxLength - currentLength;
        const canSubmit =
            remaining >= 0 && (currentLength > 0 || attachedFiles.length > 0);

        if (gauge) {
            gauge.setAttribute(
                "aria-valuenow",
                String(Math.max(0, currentLength)),
            );
            gauge.style.setProperty(
                "--gauge-progress",
                `${Math.max(0, Math.min(360, (currentLength / maxLength) * 360))}deg`,
            );
        }
        if (gaugeText) {
            gaugeText.textContent = String(remaining);
            gaugeText.style.color = remaining < 0 ? "#f4212e" : "#536471";
        }
        if (submitButton) {
            submitButton.disabled = !canSubmit;
            submitButton.setAttribute("aria-disabled", String(!canSubmit));
        }
    }

    function hasDraftContent() {
        return (
            getEditorLength() > 0 ||
            attachedFiles.length > 0 ||
            Boolean(selectedLocation)
        );
    }

    function setExpanded() {
        composer.classList.toggle("has-draft", hasDraftContent());
        if (footerBottom) {
            footerBottom.hidden = false;
        }
        if (context) {
            context.hidden = false;
        }
    }

    function syncExpandedState() {
        setExpanded();
    }

    function saveEditorSelection() {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0 || !editor) {
            return;
        }
        const range = selection.getRangeAt(0);
        if (editor.contains(range.commonAncestorContainer)) {
            savedSelection = range.cloneRange();
        }
    }

    function restoreEditorSelection() {
        if (!savedSelection) {
            return false;
        }
        const selection = window.getSelection();
        if (!selection) {
            return false;
        }
        selection.removeAllRanges();
        selection.addRange(savedSelection);
        return true;
    }

    function placeCaretAtEnd() {
        if (!editor) {
            return;
        }
        const range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        saveEditorSelection();
    }

    function insertNodeAtSelection(node) {
        if (!editor) {
            return;
        }
        const selection = window.getSelection();
        if (!selection?.rangeCount) {
            placeCaretAtEnd();
        }
        const range = window.getSelection()?.rangeCount
            ? window.getSelection().getRangeAt(0)
            : null;
        if (!range || !editor.contains(range.commonAncestorContainer)) {
            return;
        }

        range.deleteContents();
        range.insertNode(node);
        range.setStartAfter(node);
        range.collapse(true);
        selection?.removeAllRanges();
        selection?.addRange(range);
        saveEditorSelection();
    }

    function clearRecentEmojis() {
        try {
            window.localStorage.removeItem(emojiRecentsKey);
        } catch {
            return;
        }
    }

    function getEmojiEntriesForCategory(category) {
        if (category === "recent") {
            return getRecentEmojis().map((emoji) => ({
                emoji,
                keywords: [emoji],
            }));
        }

        return (composerEmojiCategoryData[category] ?? []).map((emoji) => ({
            emoji,
            keywords: [emoji, composerEmojiCategoryMeta[category]?.label ?? ""],
        }));
    }

    function buildEmojiSection(
        title,
        emojis,
        { clearable = false, emptyText = "" } = {},
    ) {
        const headerAction = clearable
            ? '<button type="button" class="tweet-modal__emoji-clear" data-action="clear-recent">모두 지우기</button>'
            : "";
        const body = emojis.length
            ? `<div class="tweet-modal__emoji-grid">${emojis.map((emoji) => `<button type="button" class="tweet-modal__emoji-option" data-emoji="${emoji}" role="menuitem">${emoji}</button>`).join("")}</div>`
            : `<p class="tweet-modal__emoji-empty">${emptyText}</p>`;

        return `<section class="tweet-modal__emoji-section"><div class="tweet-modal__emoji-section-header"><h3 class="tweet-modal__emoji-section-title">${title}</h3>${headerAction}</div>${body}</section>`;
    }

    function renderEmojiTabs() {
        emojiTabs.forEach((tab) => {
            const category = tab.getAttribute("data-emoji-category");
            const meta = category ? composerEmojiCategoryMeta[category] : null;
            const isActive = category === activeEmojiCategory;

            tab.classList.toggle("tweet-modal__emoji-tab--active", isActive);
            tab.setAttribute("aria-selected", String(isActive));
            if (meta) {
                tab.innerHTML = meta.icon;
            }
        });
    }

    function renderInlineReplyEmojiPicker() {
        if (!emojiContent) {
            return;
        }

        const searchTerm = emojiSearchInput?.value.trim().toLowerCase() ?? "";
        if (searchTerm) {
            const sections = Object.keys(composerEmojiCategoryData)
                .map((category) => {
                    const entries = getEmojiEntriesForCategory(category).filter(
                        (entry) =>
                            entry.keywords.some((keyword) =>
                                keyword.toLowerCase().includes(searchTerm),
                            ),
                    );
                    if (entries.length === 0) {
                        return "";
                    }
                    return buildEmojiSection(
                        composerEmojiCategoryMeta[category].sectionTitle,
                        entries.map((entry) => entry.emoji),
                    );
                })
                .join("");

            emojiContent.innerHTML =
                sections ||
                buildEmojiSection("검색 결과", [], {
                    emptyText: "일치하는 이모티콘이 없습니다.",
                });
            renderEmojiTabs();
            return;
        }

        if (activeEmojiCategory === "recent") {
            const recent = getRecentEmojis();
            emojiContent.innerHTML =
                buildEmojiSection("최근", recent, {
                    clearable: recent.length > 0,
                    emptyText: "최근 사용한 이모티콘이 없습니다.",
                }) +
                buildEmojiSection(
                    composerEmojiCategoryMeta.smileys.sectionTitle,
                    getEmojiEntriesForCategory("smileys").map(
                        (entry) => entry.emoji,
                    ),
                );
        } else {
            emojiContent.innerHTML = buildEmojiSection(
                composerEmojiCategoryMeta[activeEmojiCategory].sectionTitle,
                getEmojiEntriesForCategory(activeEmojiCategory).map(
                    (entry) => entry.emoji,
                ),
            );
        }

        renderEmojiTabs();
    }

    function openEmojiPicker() {
        if (!emojiPicker || !emojiButton) {
            return;
        }

        renderInlineReplyEmojiPicker();
        emojiPicker.hidden = false;
        emojiButton.setAttribute("aria-expanded", "true");
    }

    function closeEmojiPicker() {
        if (!emojiPicker || !emojiButton) {
            return;
        }

        emojiPicker.hidden = true;
        emojiButton.setAttribute("aria-expanded", "false");
    }

    function toggleEmojiPicker(forceOpen) {
        if (!emojiPicker) {
            return;
        }

        if (typeof forceOpen === "boolean") {
            if (forceOpen) {
                openEmojiPicker();
            } else {
                closeEmojiPicker();
            }
            return;
        }

        if (emojiPicker.hidden) {
            openEmojiPicker();
        } else {
            closeEmojiPicker();
        }
    }

    function insertEmoji(emoji) {
        if (!editor) {
            return;
        }

        editor.focus();
        if (!restoreEditorSelection()) {
            placeCaretAtEnd();
        }
        insertNodeAtSelection(document.createTextNode(emoji));

        saveRecentEmoji(emoji);
        saveEditorSelection();
        syncInlineReplySubmitState();
        renderInlineReplyEmojiPicker();
    }

    function revokeAttachmentPreviewUrls() {
        attachmentPreviewUrls.forEach((url) => {
            URL.revokeObjectURL(url);
        });
        attachmentPreviewUrls = [];
    }

    function escapeAttachmentText(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;");
    }

    function buildAttachmentCell(file, index, className) {
        const fileUrl = attachmentPreviewUrls[index] || "";
        const safeUrl = escapeAttachmentText(fileUrl);
        const safeName = escapeAttachmentText(file.name);
        const mediaMarkup = file.type.startsWith("image/")
            ? `<img class="media-img" src="${safeUrl}" alt="${safeName}">`
            : `<video class="tweet-modal__attachment-video" controls preload="metadata"><source src="${safeUrl}" type="${file.type}"></video>`;
        const background = file.type.startsWith("image/")
            ? `<div class="media-bg" style="background-image:url('${safeUrl}')"></div>`
            : "";

        return `<div class="media-cell ${className}"><div class="media-cell-inner"><div class="media-img-container">${background}${mediaMarkup}</div><button type="button" class="media-btn-delete" data-attachment-remove-index="${index}" aria-label="첨부 삭제"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.59 12 4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></svg></button></div></div>`;
    }

    function buildAttachmentLayout() {
        if (attachedFiles.length === 0) {
            return "";
        }
        if (attachedFiles.length === 1) {
            return `<div class="media-aspect-ratio media-aspect-ratio--single"><div class="media-absolute-layer">${buildAttachmentCell(attachedFiles[0], 0, "media-cell--single")}</div></div>`;
        }
        if (attachedFiles.length === 2) {
            return `<div class="media-aspect-ratio"><div class="media-absolute-layer"><div class="media-row">${buildAttachmentCell(attachedFiles[0], 0, "media-cell--left")}${buildAttachmentCell(attachedFiles[1], 1, "media-cell--right")}</div></div></div>`;
        }
        if (attachedFiles.length === 3) {
            return `<div class="media-aspect-ratio"><div class="media-absolute-layer"><div class="media-row">${buildAttachmentCell(attachedFiles[0], 0, "media-cell--left-tall")}<div class="media-col">${buildAttachmentCell(attachedFiles[1], 1, "media-cell--right-top")}${buildAttachmentCell(attachedFiles[2], 2, "media-cell--right-bottom")}</div></div></div></div>`;
        }
        return `<div class="media-aspect-ratio"><div class="media-absolute-layer"><div class="media-row"><div class="media-col">${buildAttachmentCell(attachedFiles[0], 0, "media-cell--top-left")}${buildAttachmentCell(attachedFiles[2], 2, "media-cell--bottom-left")}</div><div class="media-col">${buildAttachmentCell(attachedFiles[1], 1, "media-cell--top-right")}${buildAttachmentCell(attachedFiles[3], 3, "media-cell--bottom-right")}</div></div></div></div>`;
    }

    function renderAttachments() {
        if (!attachmentPreview || !attachmentMedia || !mediaUploadButton) {
            return;
        }

        attachmentPreview.hidden = attachedFiles.length === 0;
        attachmentMedia.innerHTML = buildAttachmentLayout();
        attachmentMetaButtons.forEach((button) => {
            button.hidden = attachedFiles.length === 0;
        });
        mediaUploadButton.disabled = attachedFiles.length >= maxAttachments;
        composer.classList.toggle("has-draft", hasDraftContent());
        syncInlineReplySubmitState();
    }

    function setAttachments(files) {
        attachedFiles = files.slice(0, maxAttachments);
        revokeAttachmentPreviewUrls();
        attachmentPreviewUrls = attachedFiles.map((file) =>
            URL.createObjectURL(file),
        );
        renderAttachments();
    }

    function syncLocationUI() {
        const hasLocation = Boolean(selectedLocation);
        composer.classList.toggle("has-draft", hasDraftContent());
        if (locationDisplay) {
            locationDisplay.hidden = !hasLocation;
        }
        if (locationName) {
            locationName.textContent = selectedLocation ?? "";
        }
        if (geoButtonPath) {
            geoButtonPath.setAttribute(
                "d",
                hasLocation
                    ? geoButtonPath.dataset.pathActive ||
                          geoButtonPath.getAttribute("d")
                    : geoButtonPath.dataset.pathInactive ||
                          geoButtonPath.getAttribute("d"),
            );
        }
        if (locationDeleteButton) {
            locationDeleteButton.hidden = !hasLocation;
        }
        if (locationCompleteButton) {
            locationCompleteButton.disabled = !pendingLocation;
        }
    }

    // main 쪽 정적 위치 리스트를 그대로 쓰고, 필터링과 체크 표시만 바꿔서 JS를 줄인다.
    function renderInlineReplyLocationList() {
        if (locationItems.length === 0) {
            return;
        }
        const query = locationSearchInput?.value.trim() ?? "";
        locationItems.forEach((item) => {
            const label = item
                .querySelector(".tweet-modal__location-item-label")
                ?.textContent?.trim();
            const check = item.querySelector(
                ".tweet-modal__location-item-check",
            );
            const isVisible = !query || Boolean(label?.includes(query));
            const isActive = label === pendingLocation;

            item.hidden = !isVisible;
            if (check) {
                check.innerHTML = isActive
                    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"></path></svg>'
                    : "";
            }
        });
    }

    function toggleLocationPanel(forceOpen) {
        if (!locationView) {
            return;
        }
        const willOpen =
            typeof forceOpen === "boolean" ? forceOpen : locationView.hidden;
        locationView.hidden = !willOpen;
        if (willOpen) {
            pendingLocation = selectedLocation;
            renderInlineReplyLocationList();
            syncLocationUI();
            window.requestAnimationFrame(() => {
                locationSearchInput?.focus();
            });
            return;
        }
        if (locationSearchInput) {
            locationSearchInput.value = "";
        }
        renderInlineReplyLocationList();
    }

    setExpanded();
    syncInlineReplySubmitState();
    syncLocationUI();
    renderInlineReplyEmojiPicker();

    editor?.addEventListener("input", () => {
        resetEditorIfEmpty();
        saveEditorSelection();
        composer.classList.toggle("has-draft", hasDraftContent());
        syncInlineReplySubmitState();
    });

    editor?.addEventListener("keyup", saveEditorSelection);
    editor?.addEventListener("mouseup", saveEditorSelection);

    composer.addEventListener("focusin", () => {
        setExpanded();
    });

    composer.addEventListener("focusout", () => {
        window.setTimeout(() => {
            resetEditorIfEmpty();
            syncExpandedState();
        }, 0);
    });

    emojiButton?.addEventListener("mousedown", (event) =>
        event.preventDefault(),
    );
    emojiButton?.addEventListener("click", (event) => {
        event.preventDefault();
        toggleLocationPanel(false);
        toggleEmojiPicker();
    });

    emojiSearchInput?.addEventListener("input", renderInlineReplyEmojiPicker);

    emojiTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const category = tab.getAttribute("data-emoji-category");
            if (!category) {
                return;
            }
            activeEmojiCategory = category;
            renderInlineReplyEmojiPicker();
        });
    });

    emojiContent?.addEventListener("mousedown", (event) => {
        if (
            event.target.closest(
                ".tweet-modal__emoji-option, .tweet-modal__emoji-clear",
            )
        ) {
            event.preventDefault();
        }
    });
    emojiContent?.addEventListener("click", (event) => {
        if (event.target.closest("[data-action='clear-recent']")) {
            clearRecentEmojis();
            activeEmojiCategory = "recent";
            renderInlineReplyEmojiPicker();
            return;
        }

        const button = event.target.closest("[data-emoji]");
        const emoji = button?.getAttribute("data-emoji");
        if (!emoji) {
            return;
        }
        insertEmoji(emoji);
        toggleEmojiPicker(false);
    });

    mediaUploadButton?.addEventListener("click", (event) => {
        event.preventDefault();
        fileInput?.click();
    });

    fileInput?.addEventListener("change", (event) => {
        const nextFiles = Array.from(event.target.files ?? []);
        if (nextFiles.length === 0) {
            return;
        }
        const imageAndVideoFiles = nextFiles.filter(
            (file) =>
                file.type.startsWith("image/") ||
                file.type.startsWith("video/"),
        );
        setAttachments([...attachedFiles, ...imageAndVideoFiles]);
        fileInput.value = "";
    });

    attachmentMedia?.addEventListener("click", (event) => {
        const button = event.target.closest("[data-attachment-remove-index]");
        const index = Number.parseInt(
            button?.getAttribute("data-attachment-remove-index") || "",
            10,
        );
        if (Number.isNaN(index)) {
            return;
        }
        setAttachments(
            attachedFiles.filter((_, fileIndex) => fileIndex !== index),
        );
    });

    geoButton?.addEventListener("click", (event) => {
        event.preventDefault();
        toggleEmojiPicker(false);
        toggleLocationPanel();
    });

    locationDisplay?.addEventListener("click", (event) => {
        event.preventDefault();
        toggleEmojiPicker(false);
        toggleLocationPanel(true);
    });

    locationSearchInput?.addEventListener("input", () => {
        renderInlineReplyLocationList();
    });

    locationList?.addEventListener("click", (event) => {
        const button = event.target.closest(".tweet-modal__location-item");
        const location = button
            ?.querySelector(".tweet-modal__location-item-label")
            ?.textContent?.trim();
        if (!location) {
            return;
        }
        pendingLocation = location;
        renderInlineReplyLocationList();
        syncLocationUI();
    });

    locationCloseButton?.addEventListener("click", () => {
        pendingLocation = selectedLocation;
        toggleLocationPanel(false);
        syncLocationUI();
    });

    locationDeleteButton?.addEventListener("click", () => {
        selectedLocation = null;
        pendingLocation = null;
        toggleLocationPanel(false);
        syncLocationUI();
    });

    locationCompleteButton?.addEventListener("click", () => {
        selectedLocation = pendingLocation;
        toggleLocationPanel(false);
        syncLocationUI();
    });

    gifButton?.addEventListener("click", (event) => {
        event.preventDefault();
    });

    submitButton?.addEventListener("click", (event) => {
        event.preventDefault();
        if (submitButton.disabled || !editor) {
            return;
        }
        editor.innerHTML = "";
        setAttachments([]);
        fileInput.value = "";
        selectedLocation = null;
        pendingLocation = null;
        syncLocationUI();
        syncInlineReplySubmitState();
        toggleEmojiPicker(false);
        toggleLocationPanel(false);
        resetEditorIfEmpty();
        placeCaretAtEnd();
        setExpanded();
    });

    document.addEventListener("click", (event) => {
        if (!composer.contains(event.target)) {
            toggleEmojiPicker(false);
            toggleLocationPanel(false);
            syncExpandedState();
        }
    });
    window.addEventListener("beforeunload", revokeAttachmentPreviewUrls);
}

// 메인 피드의 게시글 액션 중 상세 화면에 필요한 최소 동작만 옮긴다.
function setupPostDetailActions() {
    const layersRoot = document.getElementById("layers");
    const moreDropdown = document.getElementById("postDetailMoreDropdown");
    const moreMenu = document.getElementById("postDetailMoreMenu");
    const moreFollowButton = document.getElementById("postDetailMoreFollow");
    const moreFollowLabel = document.getElementById(
        "postDetailMoreFollowLabel",
    );
    const moreFollowIconPath = document.getElementById(
        "postDetailMoreFollowIconPath",
    );
    const moreBlockButton = document.getElementById("postDetailMoreBlock");
    const moreBlockLabel = document.getElementById("postDetailMoreBlockLabel");
    const moreReportButton = document.getElementById("postDetailMoreReport");
    const moreToast = document.getElementById("postDetailMoreToast");
    const blockDialog = document.getElementById("postDetailBlockDialog");
    const blockTitle = document.getElementById("postDetailBlockTitle");
    const blockDesc = document.getElementById("postDetailBlockDesc");
    const reportDialog = document.getElementById("postDetailReportDialog");
    let activeShareDropdown = null;
    let activeShareButton = null;
    let activeShareToast = null;
    let activeShareToastTimer = null;
    let activeShareModal = null;
    let activeMoreButton = null;
    let activeMoreMeta = null;
    let moreToastTimer = null;
    const moreFollowState = new Map();
    const shareMenuIcons = {
        copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path></g></svg>',
        chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg>',
        bookmark:
            '<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18 3V0h2v3h3v2h-3v3h-2V5h-3V3zm-7.5 1a.5.5 0 00-.5.5V7h3.5A2.5 2.5 0 0116 9.5v3.48l3 2.1V11h2v7.92l-5-3.5v7.26l-6.5-3.54L3 22.68V9.5A2.5 2.5 0 015.5 7H8V4.5A2.5 2.5 0 0110.5 2H12v2zm-5 5a.5.5 0 00-.5.5v9.82l4.5-2.46 4.5 2.46V9.5a.5.5 0 00-.5-.5z"></path></g></svg>',
    };
    const moreIcons = {
        follow: "M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm4 7c-3.053 0-5.563 1.193-7.443 3.596l1.548 1.207C5.573 15.922 7.541 15 10 15s4.427.922 5.895 2.803l1.548-1.207C15.563 14.193 13.053 13 10 13zm8-6V5h-3V3h-2v2h-3v2h3v3h2V7h3z",
        unfollow:
            "M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm12.586 3l-2.043-2.04 1.414-1.42L20 7.59l2.043-2.05 1.414 1.42L21.414 9l2.043 2.04-1.414 1.42L20 10.41l-2.043 2.05-1.414-1.42L18.586 9zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z",
    };

    function escapeHtml(value) {
        return String(value).replace(
            /[&<>"']/g,
            (char) =>
                ({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                })[char] ?? char,
        );
    }

    function syncBodyModalLock() {
        document.body.classList.toggle(
            "modal-open",
            Boolean(activeShareModal) ||
                blockDialog?.hidden === false ||
                reportDialog?.hidden === false,
        );
    }

    // 좋아요와 북마크 아이콘은 path data를 바꿔 활성 상태를 맞춘다.
    function syncButtonPath(button, isActive) {
        const path = button?.querySelector("path");
        if (!path) {
            return;
        }

        path.setAttribute(
            "d",
            isActive
                ? path.dataset.pathActive || path.getAttribute("d")
                : path.dataset.pathInactive || path.getAttribute("d"),
        );
    }

    // 북마크 버튼은 시각 상태와 접근성 속성을 같이 갱신한다.
    function setBookmarkButtonState(button, isActive) {
        if (!button) {
            return;
        }

        button.classList.toggle("active", isActive);
        button.setAttribute(
            "data-testid",
            isActive ? "removeBookmark" : "bookmark",
        );
        button.setAttribute(
            "aria-label",
            isActive ? "북마크에 추가됨" : "북마크",
        );
        syncButtonPath(button, isActive);
    }

    // 공유 링크는 현재 게시글의 핸들, 포스트 id, 북마크 버튼 참조를 묶어서 만든다.
    function getSharePostMeta(button) {
        const postCard = button.closest(".postCard, [data-post-card]");
        const handle =
            postCard?.querySelector(".postHandle")?.textContent?.trim() ||
            "@user";
        const postId = postCard?.dataset.postId || "1";
        const bookmarkButton =
            postCard?.querySelector(".tweet-action-btn--bookmark") ?? null;
        const url = new URL(window.location.href);

        url.pathname = `/${handle.replace("@", "") || "user"}/status/${postId}`;
        url.search = "";
        url.hash = "";

        return {
            bookmarkButton,
            permalink: url.toString(),
        };
    }

    // 상세 화면 공통 피드백은 짧은 토스트 하나로만 보여 준다.
    function showShareToast(message) {
        if (activeShareToastTimer) {
            window.clearTimeout(activeShareToastTimer);
            activeShareToastTimer = null;
        }

        activeShareToast?.remove();
        activeShareToast = document.createElement("div");
        activeShareToast.className = "share-toast";
        activeShareToast.textContent = message;
        document.body.appendChild(activeShareToast);

        activeShareToastTimer = window.setTimeout(() => {
            activeShareToast?.remove();
            activeShareToast = null;
            activeShareToastTimer = null;
        }, 2200);
    }

    function closeShareModal() {
        if (!activeShareModal) {
            return;
        }

        activeShareModal.remove();
        activeShareModal = null;
        syncBodyModalLock();
    }

    // 공유 드롭다운은 하나만 열리도록 유지하고 열림 상태도 같이 정리한다.
    function closeShareDropdown() {
        if (!activeShareDropdown) {
            return;
        }

        activeShareDropdown.remove();
        activeShareDropdown = null;
        if (activeShareButton) {
            activeShareButton.setAttribute("aria-expanded", "false");
            activeShareButton = null;
        }
    }

    // 메인 게시글처럼 공유 메뉴에서 현재 상세 게시글 링크를 복사한다.
    function copyShareLink(button) {
        const { permalink } = getSharePostMeta(button);
        closeShareDropdown();
        if (!navigator.clipboard?.writeText) {
            showShareToast("링크를 복사하지 못했습니다");
            return;
        }

        navigator.clipboard
            .writeText(permalink)
            .then(() => showShareToast("클립보드로 복사함"))
            .catch(() => showShareToast("링크를 복사하지 못했습니다"));
    }

    function getCurrentPageTagUsers() {
        const users = [];
        const seen = new Set();
        const cards = Array.from(
            document.querySelectorAll(".postCard, [data-post-card]"),
        );

        cards.forEach((card, index) => {
            const handle =
                card.querySelector(".postHandle")?.textContent?.trim() ||
                "@user";
            if (seen.has(handle)) {
                return;
            }

            const name =
                card.querySelector(".postName")?.textContent?.trim() ||
                "사용자";
            const avatar =
                card
                    .querySelector(".post-detail-avatar img")
                    ?.getAttribute("src") ||
                document
                    .querySelector(".post-detail-inline-reply-avatar img")
                    ?.getAttribute("src") ||
                "";

            seen.add(handle);
            users.push({
                id: `${handle.replace("@", "") || "user"}-${index}`,
                name,
                handle,
                avatar,
            });
        });

        return users;
    }

    function getShareUserRows() {
        const users = getCurrentPageTagUsers();
        if (users.length === 0) {
            return `<div class="share-sheet__empty"><p>전송할 수 있는 사용자가 없습니다.</p></div>`;
        }

        return users
            .map(
                (user) =>
                    `<button type="button" class="share-sheet__user" data-share-user-id="${escapeHtml(user.id)}"><span class="share-sheet__user-avatar">${user.avatar ? `<img src="${escapeHtml(user.avatar)}" alt="${escapeHtml(user.name)}" />` : ""}</span><span class="share-sheet__user-body"><span class="share-sheet__user-name">${escapeHtml(user.name)}</span><span class="share-sheet__user-handle">${escapeHtml(user.handle)}</span></span></button>`,
            )
            .join("");
    }

    function createShareMenuItemMarkup(type, label) {
        return `<button type="button" role="menuitem" class="menu-item share-menu-item share-menu-item--${type}"><span class="menu-item__icon share-menu-item__icon">${shareMenuIcons[type] ?? ""}</span><span class="menu-item__label">${label}</span></button>`;
    }

    function openShareModal(markup, onClick) {
        closeShareDropdown();
        closeShareModal();

        const modal = document.createElement("div");
        modal.className = "share-sheet";
        modal.innerHTML = markup;
        modal.addEventListener("click", onClick);

        document.body.appendChild(modal);
        activeShareModal = modal;
        syncBodyModalLock();
        return modal;
    }

    function getMoreMeta(button) {
        const postCard = button.closest(".postCard, [data-post-card]");
        const handle =
            postCard?.querySelector(".postHandle")?.textContent?.trim() ||
            "@user";
        return { button, handle };
    }

    function closeMoreDropdown() {
        if (!moreDropdown) {
            return;
        }
        moreDropdown.hidden = true;
        moreMenu?.style.removeProperty("top");
        moreMenu?.style.removeProperty("left");
        activeMoreButton?.setAttribute("aria-expanded", "false");
        activeMoreButton = null;
        activeMoreMeta = null;
    }

    function showMoreToast(message) {
        if (!moreToast) {
            return;
        }
        moreToast.textContent = message;
        moreToast.hidden = false;
        window.clearTimeout(moreToastTimer);
        moreToastTimer = window.setTimeout(() => {
            moreToast.hidden = true;
        }, 3000);
    }

    function closeMoreDialog() {
        if (blockDialog) {
            blockDialog.hidden = true;
        }
        if (reportDialog) {
            reportDialog.hidden = true;
        }
        syncBodyModalLock();
    }

    function openBlockDialog(meta) {
        if (!blockDialog || !blockTitle || !blockDesc) {
            return;
        }
        closeMoreDropdown();
        activeMoreMeta = meta;
        blockTitle.textContent = `${meta.handle} 님을 차단할까요?`;
        blockDesc.textContent = `내 공개 게시물을 볼 수 있지만 더 이상 게시물에 참여할 수 없습니다. 또한 ${meta.handle} 님은 나를 팔로우하거나 쪽지를 보낼 수 없으며, 이 계정과 관련된 알림도 내게 표시되지 않습니다.`;
        blockDialog.hidden = false;
        syncBodyModalLock();
    }

    function openReportDialog(meta) {
        if (!reportDialog) {
            return;
        }
        closeMoreDropdown();
        activeMoreMeta = meta;
        reportDialog.hidden = false;
        syncBodyModalLock();
    }

    function openMoreDropdown(button) {
        if (!moreDropdown || !moreMenu) {
            return;
        }
        const meta = getMoreMeta(button);
        const isFollowing = moreFollowState.get(meta.handle) ?? false;
        const rect = button.getBoundingClientRect();
        const menuRect = moreMenu.getBoundingClientRect();
        const top = Math.min(
            rect.bottom + 8,
            window.innerHeight - menuRect.height - 16,
        );
        const left = Math.min(
            Math.max(16, rect.right - Math.max(menuRect.width, 240)),
            window.innerWidth - Math.max(menuRect.width, 240) - 16,
        );
        if (moreFollowLabel) {
            moreFollowLabel.textContent = isFollowing
                ? `${meta.handle} 님 언팔로우하기`
                : `${meta.handle} 님 팔로우하기`;
        }
        if (moreBlockLabel) {
            moreBlockLabel.textContent = `${meta.handle} 님 차단하기`;
        }
        if (moreFollowIconPath) {
            moreFollowIconPath.setAttribute(
                "d",
                isFollowing ? moreIcons.unfollow : moreIcons.follow,
            );
        }
        closeMoreDropdown();
        activeMoreButton = button;
        activeMoreMeta = meta;
        moreDropdown.hidden = false;
        moreMenu.style.top = `${top}px`;
        moreMenu.style.left = `${left}px`;
        button.setAttribute("aria-expanded", "true");
    }

    function openShareChatModal() {
        openShareModal(
            `<div class="share-sheet__backdrop" data-share-close="true"></div><div class="share-sheet__card" role="dialog" aria-modal="true" aria-labelledby="share-chat-title"><div class="share-sheet__header"><button type="button" class="share-sheet__icon-btn" data-share-close="true" aria-label="돌아가기"><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></button><h2 id="share-chat-title" class="share-sheet__title">공유하기</h2><span class="share-sheet__header-spacer"></span></div><div class="share-sheet__search"><input type="text" class="share-sheet__search-input" placeholder="검색" aria-label="검색" /></div><div class="share-sheet__list">${getShareUserRows()}</div></div>`,
            (e) => {
                if (
                    e.target.closest("[data-share-close='true']") ||
                    e.target.classList.contains("share-sheet__backdrop") ||
                    e.target.closest(".share-sheet__user")
                ) {
                    e.preventDefault();
                    closeShareModal();
                }
            },
        );
    }

    function openShareBookmarkModal(button) {
        const { bookmarkButton } = getSharePostMeta(button);
        const isBookmarked =
            bookmarkButton?.classList.contains("active") ?? false;
        openShareModal(
            `
            <div class="share-sheet__backdrop" data-share-close="true"></div>
            <div class="share-sheet__card share-sheet__card--bookmark" role="dialog" aria-modal="true" aria-labelledby="share-bookmark-title">
                <div class="share-sheet__header">
                    <button type="button" class="share-sheet__icon-btn" data-share-close="true" aria-label="닫기">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M10.59 12 4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                        </svg>
                    </button>
                    <h2 id="share-bookmark-title" class="share-sheet__title">폴더에 추가</h2>
                    <span class="share-sheet__header-spacer"></span>
                </div>
                <button type="button" class="share-sheet__create-folder">새 북마크 폴더 만들기</button>
                <button type="button" class="share-sheet__folder" data-share-folder="all-bookmarks">
                    <span class="share-sheet__folder-icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M2.998 8.5c0-1.38 1.119-2.5 2.5-2.5h9c1.381 0 2.5 1.12 2.5 2.5v14.12l-7-3.5-7 3.5V8.5zM18.5 2H8.998v2H18.5c.275 0 .5.224.5.5V15l2 1.4V4.5c0-1.38-1.119-2.5-2.5-2.5z"></path>
                        </svg>
                    </span>
                    <span class="share-sheet__folder-name">모든 북마크</span>
                    <span class="share-sheet__folder-check${isBookmarked ? " share-sheet__folder-check--active" : ""}">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"></path>
                        </svg>
                    </span>
                </button>
            </div>
        `,
            (event) => {
                if (
                    event.target.closest("[data-share-close='true']") ||
                    event.target.classList.contains("share-sheet__backdrop")
                ) {
                    event.preventDefault();
                    closeShareModal();
                    return;
                }

                if (event.target.closest(".share-sheet__create-folder")) {
                    event.preventDefault();
                    closeShareModal();
                    return;
                }

                if (
                    event.target.closest("[data-share-folder='all-bookmarks']")
                ) {
                    event.preventDefault();
                    setBookmarkButtonState(bookmarkButton, !isBookmarked);
                    closeShareModal();
                }
            },
        );
    }

    // 상세 화면 공유 버튼은 드롭다운 하나만 띄우고 다시 누르면 닫는다.
    function openShareDropdown(button) {
        if (!layersRoot) {
            return;
        }

        closeShareDropdown();
        const rect = button.getBoundingClientRect();
        const top = rect.bottom + 8;
        const lc = document.createElement("div");
        lc.className = "layers-dropdown-container";
        lc.innerHTML = `<div class="layers-overlay"></div><div class="layers-dropdown-inner"><div role="menu" class="dropdown-menu"><div><div class="dropdown-inner">${createShareMenuItemMarkup("copy", "링크 복사하기")}${createShareMenuItemMarkup("chat", "Chat으로 전송하기")}${createShareMenuItemMarkup("bookmark", "폴더에 북마크 추가하기")}</div></div></div></div>`;
        layersRoot.appendChild(lc);

        const menu = lc.querySelector(".dropdown-menu");
        if (menu) {
            const menuWidth = menu.offsetWidth || 0;
            const left = Math.min(
                Math.max(16, rect.right - menuWidth + 20),
                Math.max(16, window.innerWidth - menuWidth - 16),
            );
            menu.style.top = `${top}px`;
            menu.style.left = `${left}px`;
            menu.style.right = "auto";
        }

        lc.addEventListener("click", (e) => {
            const ab = e.target.closest(".share-menu-item");
            if (!ab || !activeShareButton) {
                e.stopPropagation();
                return;
            }

            e.preventDefault();
            e.stopPropagation();

            if (ab.classList.contains("share-menu-item--copy")) {
                copyShareLink(activeShareButton);
                return;
            }
            if (ab.classList.contains("share-menu-item--chat")) {
                openShareChatModal();
                return;
            }
            if (ab.classList.contains("share-menu-item--bookmark")) {
                openShareBookmarkModal(activeShareButton);
            }
        });
        activeShareDropdown = lc;
        activeShareButton = button;
        activeShareButton.setAttribute("aria-expanded", "true");
    }

    document.querySelectorAll(".tweet-action-btn--like").forEach((button) => {
        const countElement = button.querySelector(".tweet-action-count");
        let baseCount = Number.parseInt(countElement?.textContent || "0", 10);

        if (Number.isNaN(baseCount)) {
            baseCount = 0;
        }

        button.addEventListener("click", (event) => {
            event.preventDefault();
            const isActive = button.classList.toggle("active");

            if (countElement) {
                countElement.textContent = String(
                    isActive ? baseCount + 1 : baseCount,
                );
            }

            syncButtonPath(button, isActive);
        });
    });

    document
        .querySelectorAll(".tweet-action-btn--bookmark")
        .forEach((button) => {
            const path = button.querySelector("path");
            button.addEventListener("click", (event) => {
                event.preventDefault();
                const isActive = button.classList.toggle("active");

                button.setAttribute(
                    "data-testid",
                    isActive ? "removeBookmark" : "bookmark",
                );
                button.setAttribute(
                    "aria-label",
                    isActive ? "북마크에 추가됨" : "북마크",
                );

                if (path) {
                    path.setAttribute(
                        "d",
                        isActive
                            ? path.dataset.pathActive || path.getAttribute("d")
                            : path.dataset.pathInactive ||
                                  path.getAttribute("d"),
                    );
                }
            });
        });

    document.querySelectorAll(".tweet-action-btn--share").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (activeShareButton === button) {
                closeShareDropdown();
                return;
            }

            openShareDropdown(button);
        });
    });

    document.querySelectorAll(".post-detail-more-trigger").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (activeMoreButton === button && moreDropdown?.hidden === false) {
                closeMoreDropdown();
                return;
            }
            openMoreDropdown(button);
        });
    });

    moreFollowButton?.addEventListener("click", (event) => {
        event.preventDefault();
        if (!activeMoreMeta) {
            return;
        }
        const handle = activeMoreMeta.handle;
        const isFollowing = moreFollowState.get(handle) ?? false;
        moreFollowState.set(handle, !isFollowing);
        closeMoreDropdown();
        if (!isFollowing) {
            showMoreToast(`${handle} 님을 팔로우함`);
        }
    });

    moreBlockButton?.addEventListener("click", (event) => {
        event.preventDefault();
        if (activeMoreMeta) {
            openBlockDialog(activeMoreMeta);
        }
    });

    moreReportButton?.addEventListener("click", (event) => {
        event.preventDefault();
        if (activeMoreMeta) {
            openReportDialog(activeMoreMeta);
        }
    });

    blockDialog?.addEventListener("click", (event) => {
        if (event.target.closest("[data-post-detail-block-close='true']")) {
            closeMoreDialog();
            return;
        }
        if (event.target.closest("[data-post-detail-block-confirm='true']")) {
            closeMoreDialog();
        }
    });

    reportDialog?.addEventListener("click", (event) => {
        if (
            event.target.closest("[data-post-detail-report-close='true']") ||
            event.target.closest(".post-detail-notification-report__item")
        ) {
            closeMoreDialog();
        }
    });

    document
        .querySelectorAll(".tweet-action-btn[data-testid='reply']")
        .forEach((button) => {
            button.addEventListener("click", (event) => {
                event.preventDefault();
            });
        });

    document.addEventListener("click", (event) => {
        if (
            moreDropdown &&
            !moreDropdown.hidden &&
            !moreDropdown.contains(event.target) &&
            !activeMoreButton?.contains(event.target)
        ) {
            closeMoreDropdown();
        }
        if (
            activeShareDropdown &&
            !activeShareDropdown.contains(event.target) &&
            !activeShareButton?.contains(event.target)
        ) {
            closeShareDropdown();
        }
    });

    window.addEventListener(
        "scroll",
        () => {
            closeMoreDropdown();
            closeShareDropdown();
        },
        { passive: true },
    );

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMoreDialog();
            closeMoreDropdown();
            closeShareModal();
            closeShareDropdown();
        }
    });
}
