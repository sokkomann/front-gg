import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const template = readFileSync(
  new URL("../../../templates/main/main.html", import.meta.url),
  "utf8",
);
const js = readFileSync(new URL("./event.js", import.meta.url), "utf8");

const checks = [
  {
    name: "main template loads only the main event script for page behavior",
    run() {
      const scriptMatches =
        template.match(/<script\s+src="\.\.\/\.\.\/static\/js\/main\/[^"]+"/g) ??
        [];

      assert.deepEqual(scriptMatches, [
        '<script src="../../static/js/main/event.js"',
      ]);
      assert.doesNotMatch(template, /event-helpers\.js/);
    },
  },
  {
    name: "main event script defines local utility helpers instead of window helper dependency",
    run() {
      assert.match(js, /function escapeHtml\(value\)\s*\{/);
      assert.match(js, /function calculateMoreMenuPosition\(\s*\{/);
      assert.match(js, /function getCollapsedPostTextState\(text, maxLength\)\s*\{/);
      assert.match(js, /function parseTwemoji\(scope\)\s*\{/);
      assert.doesNotMatch(js, /window\.mainEventHelpers/);
    },
  },
  {
    name: "reply media trigger uses local reply modal state checks",
    run() {
      const replySyncStart = js.indexOf("const can = isReplyImageSet();");

      assert.notEqual(replySyncStart, -1, "reply media trigger block should exist");
      const replySyncBlock = js.slice(replySyncStart, replySyncStart + 500);
      assert.match(js, /function syncMediaAltTrigger\(\)\s*\{/);
      assert.match(
        js,
        /if \(!can && replyMediaView && !replyMediaView\.hidden\) \{/,
      );
      assert.doesNotMatch(replySyncBlock, /isMediaEditorOpen\(\)/);
    },
  },
];

checks.forEach(({ name, run }) => {
  run();
  console.log(`PASS ${name}`);
});
