window.addEventListener("DOMContentLoaded", setupPostDetailPage);

// 게시물 상세 화면의 액션 바 초기화만 연결한다.
function setupPostDetailPage() {
    setupPostDetailActions();
}

// 메인 피드의 게시글 액션 중 상세 화면에 필요한 최소 동작만 옮긴다.
function setupPostDetailActions() {
    const layersRoot = document.getElementById("layers");
    let activeShareDropdown = null;
    let activeShareButton = null;
    let activeShareToast = null;
    let activeShareToastTimer = null;
    let activeShareModal = null;

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

    // 북마크 시트는 메인보다 작게 줄여서 단일 폴더 토글만 제공한다.
    function closeShareModal() {
        if (!activeShareModal) {
            return;
        }

        activeShareModal.remove();
        activeShareModal = null;
        document.body.classList.remove("modal-open");
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

    // 공유 메뉴 마크업은 상세 화면에서 쓰는 두 가지 액션만 남겨서 만든다.
    function buildShareDropdownMarkup(top, right) {
        return `
            <div class="layers-overlay"></div>
            <div class="layers-dropdown-inner">
                <div role="menu" class="dropdown-menu" style="top: ${top}px; right: ${right}px;">
                    <div class="dropdown-inner" data-testid="Dropdown">
                        <button type="button" role="menuitem" class="menu-item share-menu-item share-menu-item--copy">
                            <span class="menu-item__icon share-menu-item__icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path>
                                </svg>
                            </span>
                            <span class="menu-item__label">링크 복사하기</span>
                        </button>
                        <button type="button" role="menuitem" class="menu-item share-menu-item share-menu-item--bookmark">
                            <span class="menu-item__icon share-menu-item__icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18 3V0h2v3h3v2h-3v3h-2V5h-3V3zm-7.5 1a.5.5 0 00-.5.5V7h3.5A2.5 2.5 0 0116 9.5v3.48l3 2.1V11h2v7.92l-5-3.5v7.26l-6.5-3.54L3 22.68V9.5A2.5 2.5 0 015.5 7H8V4.5A2.5 2.5 0 0110.5 2H12v2zm-5 5a.5.5 0 00-.5.5v9.82l4.5-2.46 4.5 2.46V9.5a.5.5 0 00-.5-.5z"></path>
                                </svg>
                            </span>
                            <span class="menu-item__label">폴더에 북마크 추가하기</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // 메인 북마크 시트에서 필요한 부분만 남겨 상세 페이지에 재사용한다.
    function openBookmarkSheet(button) {
        const { bookmarkButton } = getSharePostMeta(button);
        const isBookmarked =
            bookmarkButton?.classList.contains("active") ?? false;

        closeShareDropdown();
        closeShareModal();

        const modal = document.createElement("div");
        modal.className = "share-sheet";
        modal.innerHTML = `
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
        `;

        modal.addEventListener("click", (event) => {
            if (
                event.target.closest("[data-share-close='true']") ||
                event.target.classList.contains("share-sheet__backdrop")
            ) {
                event.preventDefault();
                closeShareModal();
                return;
            }

            if (event.target.closest("[data-share-folder='all-bookmarks']")) {
                event.preventDefault();
                setBookmarkButtonState(bookmarkButton, !isBookmarked);
                closeShareModal();
            }
        });

        document.body.appendChild(modal);
        document.body.classList.add("modal-open");
        activeShareModal = modal;
    }

    // 상세 화면 공유 버튼은 드롭다운 하나만 띄우고 다시 누르면 닫는다.
    function openShareDropdown(button) {
        if (!layersRoot) {
            return;
        }

        closeShareDropdown();
        const rect = button.getBoundingClientRect();
        const top = rect.bottom + window.scrollY + 8;
        const right = Math.max(6, window.innerWidth - rect.right - 10);
        const layerContainer = document.createElement("div");
        layerContainer.className = "layers-dropdown-container";
        layerContainer.innerHTML = buildShareDropdownMarkup(top, right);

        layerContainer.addEventListener("click", (event) => {
            const actionButton = event.target.closest(".share-menu-item");
            if (!actionButton || !activeShareButton) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            if (actionButton.classList.contains("share-menu-item--copy")) {
                copyShareLink(activeShareButton);
                return;
            }
            if (actionButton.classList.contains("share-menu-item--bookmark")) {
                openBookmarkSheet(activeShareButton);
            }
        });

        layersRoot.appendChild(layerContainer);
        activeShareDropdown = layerContainer;
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

    document
        .querySelectorAll(".tweet-action-btn[data-testid='reply']")
        .forEach((button) => {
            button.addEventListener("click", (event) => {
                event.preventDefault();
            });
        });

    document.addEventListener("click", (event) => {
        if (
            activeShareDropdown &&
            !activeShareDropdown.contains(event.target) &&
            !activeShareButton?.contains(event.target)
        ) {
            closeShareDropdown();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeShareModal();
            closeShareDropdown();
        }
    });
}
