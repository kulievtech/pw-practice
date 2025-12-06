import { expect, test } from "@playwright/test";

test("getByTitle()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  const title = await page.getByTitle("Login-form").textContent();
  expect(title).toBe("Login Form");
});
