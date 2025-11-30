import { test } from "@playwright/test";

test("getByPlaceholder()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByPlaceholder("Username").fill("test@test.com");
  await page.getByPlaceholder("Password").fill("password123");
});
