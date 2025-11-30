import { expect, test } from "@playwright/test";

test("getByText()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  const text = await page
    .getByText("This is a sample text for Playwright assertions.")
    .isVisible();

  expect(text).toBeTruthy();
});
