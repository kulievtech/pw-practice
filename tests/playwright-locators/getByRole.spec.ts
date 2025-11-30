import { test } from "@playwright/test";

test("getByRole()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByRole("checkbox", { name: "Option 1" }).check();
  await page.getByRole("radio", { name: "Choice A" }).check();
});
