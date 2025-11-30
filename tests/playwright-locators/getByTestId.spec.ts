import { test } from "@playwright/test";

test("getByTestId()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByTestId("submit-button").click();
});
