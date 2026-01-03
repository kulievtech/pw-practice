import { test, expect } from "@playwright/test";

test("Handle prompt dialog", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  page.once("dialog", async (dialog) => {
    console.log(dialog.message()); // Prints: Please enter your name:
    await dialog.accept("John"); // Enter "John" and click OK
    // await dialog.dismiss();     // Click Cancel
  });

  await page.click("#promptBtn");

  // Verify result
  const resultText = await page.textContent("#promptResult");
  expect(resultText).toBe("Hello, John");
});
