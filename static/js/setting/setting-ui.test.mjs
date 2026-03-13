import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const template = readFileSync(
  new URL("../../../templates/setting/setting.html", import.meta.url),
  "utf8",
);
const js = readFileSync(new URL("./event.js", import.meta.url), "utf8");

const staticDetailRoutes = [
  "account-info-auth",
  "account-info-list",
  "username-edit",
  "password-edit",
  "deactivate-edit",
  "notification-filter-edit",
  "notification-muted-edit",
  "notification-preferences-edit",
  "notification-email-edit",
  "notification-push-edit",
  "privacy-mute-block-edit",
  "privacy-chat-edit",
  "privacy-discoverability-edit",
  "privacy-blocked-accounts-edit",
  "privacy-muted-accounts-edit",
  "privacy-muted-words-edit",
  "privacy-muted-words-add-edit",
  "privacy-posts-edit",
  "privacy-posts-location-edit",
  "phone-edit",
  "email-edit",
  "country-edit",
  "language-edit",
];

const checks = [
  {
    name: "setting template keeps static hidden detail route views in html",
    run() {
      assert.match(template, /id="settingsDetailRoutes"/);
      staticDetailRoutes.forEach((routeName) => {
        assert.match(
          template,
          new RegExp(`data-detail-route-view="${routeName}"`),
          `${routeName} static route should exist in setting.html`,
        );
      });
      assert.match(
        template,
        /data-detail-route-view="account-info-auth"[\s\S]*?hidden/,
      );
      assert.match(
        template,
        /data-detail-route-view="privacy-muted-words-add-edit"[\s\S]*?hidden/,
      );
    },
  },
  {
    name: "setting script toggles existing static route views instead of injecting detail markup",
    run() {
      assert.match(js, /function showDetailRouteView\(routeName\)/);
      assert.match(js, /querySelectorAll\("\[data-detail-route-view\]"\)/);
      assert.match(js, /routeView\.hidden = routeView !== nextRouteView;/);
      assert.doesNotMatch(js, /detailContent\.insertAdjacentHTML\(/);
    },
  },
];

checks.forEach(({ name, run }) => {
  run();
  console.log(`PASS ${name}`);
});
