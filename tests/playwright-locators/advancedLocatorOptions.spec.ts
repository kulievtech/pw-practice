import { test } from "@playwright/test";

test("Advanced Locator Options", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // hasText option
  await page.locator("ul li", { hasText: "Fig" }).hover();

  // has option
  // Find the input inside the form and fill it
  await page
    .locator("form", { has: page.locator("input[placeholder='Password']") })
    .locator("input[placeholder='Password']")
    .fill("Text here");
});
