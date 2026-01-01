import { test } from "@playwright/test";

test("Basics", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/", {
    waitUntil: "domcontentloaded",
  });

  await page.waitForTimeout(2000);
  await page.reload();
  await page.waitForTimeout(2000);

  await page.goBack();
  await page.waitForTimeout(2000);
  await page.goForward();
  await page.waitForTimeout(2000);
});
