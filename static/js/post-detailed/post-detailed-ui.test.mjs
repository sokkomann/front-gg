import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const template = readFileSync(
  new URL("../../../templates/post-detailed/post-detailed.html", import.meta.url),
  "utf8",
);
const css = readFileSync(
  new URL("../../../static/css/post-detailed/post-detailed.css", import.meta.url),
  "utf8",
);
const js = readFileSync(
  new URL("../../../static/js/post-detailed/event.js", import.meta.url),
  "utf8",
);

function getHeroActionBarMarkup(source) {
  const match = source.match(
    /<div\s+class="post-detail-actions tweet-action-bar"[\s\S]*?<\/div>\s*<\/article>/,
  );
  assert.ok(match, "hero action bar should exist");
  return match[0];
}

const heroActionBar = getHeroActionBarMarkup(template);

const checks = [
  {
    name: "post detail hero action bar uses four equal action slots",
    run() {
      const slotMatches = heroActionBar.match(
        /class="post-detail-action-slot"/g,
      );

      assert.equal(slotMatches?.length ?? 0, 4);
      assert.match(
        heroActionBar,
        /post-detail-action-slot"[\s\S]*?data-testid="reply"/,
      );
      assert.match(
        heroActionBar,
        /post-detail-action-slot"[\s\S]*?data-testid="like"/,
      );
      assert.match(
        heroActionBar,
        /post-detail-action-slot"[\s\S]*?tweet-action-btn--bookmark[\s\S]*?data-testid="bookmark"[\s\S]*?aria-label="북마크"[\s\S]*?data-path-inactive=[\s\S]*?data-path-active=/,
      );
      const heroBookmarkPath = heroActionBar.match(
        /tweet-action-btn--bookmark[\s\S]*?<path[^>]*data-path-inactive="([^"]+)"[^>]*d="([^"]+)"/,
      );
      assert.ok(heroBookmarkPath, "hero bookmark path metadata should exist");
      assert.equal(heroBookmarkPath[1], heroBookmarkPath[2]);
      assert.match(heroActionBar, /post-detail-action-slot"[\s\S]*?id="heroShareButton"/);
      assert.doesNotMatch(heroActionBar, /tweet-action-right/);
    },
  },
  {
    name: "post detail action bar styles use a four-column detail layout",
    run() {
      assert.match(
        css,
        /\.post-detail-actions\.tweet-action-bar\s*\{[\s\S]*display:\s*grid;[\s\S]*grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\);/,
      );
      assert.match(
        css,
        /\.post-detail-action-slot\s*\{[\s\S]*display:\s*flex;[\s\S]*justify-content:\s*center;/,
      );
      assert.match(
        css,
        /\.post-detail-actions\.tweet-action-bar\s+\.post-detail-action-button,\s*[\s\S]*\.post-detail-actions\.tweet-action-bar\s+\.tweet-action-btn\s*\{[\s\S]*justify-content:\s*center;/,
      );
    },
  },
  {
    name: "reply cards use the same four-slot action bar structure as the hero post",
    run() {
      const replyBarMatches = template.match(
        /class="post-detail-actions post-detail-actions--reply tweet-action-bar"/g,
      );
      const replySlotMatches = template.match(
        /post-detail-actions post-detail-actions--reply tweet-action-bar[\s\S]*?post-detail-action-slot/g,
      );

      assert.equal(replyBarMatches?.length ?? 0, 4);
      assert.equal(replySlotMatches?.length ?? 0, 4);
      assert.doesNotMatch(
        template,
        /<div class="post-detail-reply-actions">\s*<button type="button"><span>\d+<\/span><\/button>\s*<button type="button"><span>\d+<\/span><\/button>\s*<button type="button"><span>\d+<\/span><\/button>\s*<\/div>/,
      );
      assert.match(
        template,
        /post-detail-actions--reply[\s\S]*?post-detail-action-slot[\s\S]*?data-testid="reply"[\s\S]*?post-detail-action-slot[\s\S]*?tweet-action-btn--like[\s\S]*?post-detail-action-slot[\s\S]*?tweet-action-btn--bookmark[\s\S]*?post-detail-action-slot[\s\S]*?tweet-action-btn--share/,
      );
      assert.doesNotMatch(template, /tweet-action-right/);
    },
  },
  {
    name: "reply action bars reuse the same grid layout as the hero action rail",
    run() {
      assert.match(
        css,
        /\.post-detail-actions--reply\s*\{[\s\S]*margin-top:\s*8px;/,
      );
      assert.match(
        css,
        /\.post-detail-actions\.tweet-action-bar\s*\{[\s\S]*grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\);/,
      );
      assert.doesNotMatch(css, /\.tweet-action-right\s*\{/);
      assert.doesNotMatch(css, /\.post-detail-actions--reply\s+\.tweet-action-btn\s*\{[\s\S]*min-height:\s*30px;/);
    },
  },
  {
    name: "post detail script keeps only the main action-bar behaviors with comments",
    run() {
      assert.match(
        js,
        /게시물 상세 화면의 액션 바 초기화만 연결한다\.\s*\nfunction setupPostDetailPage\(\)/,
      );
      assert.match(
        js,
        /메인 피드의 게시글 액션 중 상세 화면에 필요한 최소 동작만 옮긴다\.\s*\nfunction setupPostDetailActions\(\)/,
      );
      assert.match(js, /window\.addEventListener\("DOMContentLoaded", setupPostDetailPage\);/);
      assert.match(js, /document\.querySelectorAll\("\.tweet-action-btn--like"\)\.forEach/);
      assert.match(js, /button\.classList\.toggle\("active"\)/);
      assert.match(js, /countElement\.textContent = String\(/);
      assert.match(js, /document\s*\n\s*\.querySelectorAll\("\.tweet-action-btn--bookmark"\)\s*\n\s*\.forEach\(\(button\) => \{/);
      assert.match(js, /const path = button\.querySelector\("path"\);/);
      assert.match(js, /const isActive = button\.classList\.toggle\("active"\);/);
      assert.match(js, /path\.setAttribute\(\s*"d",\s*isActive/);
      assert.match(js, /button\.setAttribute\(\s*"data-testid",\s*isActive \? "removeBookmark" : "bookmark"/);
      assert.match(js, /button\.setAttribute\(\s*"aria-label",\s*isActive \? "북마크에 추가됨" : "북마크"/);
      assert.match(js, /navigator\.clipboard\?\.writeText/);
      assert.match(js, /function buildShareDropdownMarkup\(top, right\)/);
      assert.match(js, /button\.closest\("\.postCard, \[data-post-card\]"\)/);
      assert.match(js, /document\.addEventListener\("keydown", \(event\) => \{/);
    },
  },
];

checks.forEach(({ name, run }) => {
  run();
  console.log(`PASS ${name}`);
});
