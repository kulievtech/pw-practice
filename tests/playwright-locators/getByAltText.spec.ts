import { test } from "@playwright/test";

test("getByAltText()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByAltText("toggle-switch").click();
});
