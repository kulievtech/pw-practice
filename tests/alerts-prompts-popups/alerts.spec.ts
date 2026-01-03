import { expect, test } from "@playwright/test";

test("Handle alert", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Listen for the alert event
  page.once("dialog", async (dialog) => {
    console.log(dialog.message()); // Prints: Hello! This is an alert
    await page.waitForTimeout(2000);
    await dialog.accept(); // Clicks OK
  });

  // Trigger the alert
  await page.click("#alertBtn");
});

test("Accept - Handle confirm dialog", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  page.once("dialog", async (dialog) => {
    console.log(dialog.message()); // Prints: Do you want to continue?
    await page.waitForTimeout(2000);
    await dialog.accept(); // Clicks OK
    // await dialog.dismiss(); // Clicks Cancel
  });

  await page.click("#confirmBtn");

  // Verify result
  const resultText = await page.textContent("#confirmResult");
  expect(resultText).toBe("Accepted");
});

test("Dismiss - Handle confirm dialog", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  page.once("dialog", async (dialog) => {
    console.log(dialog.message()); // Prints: Do you want to continue?
    await page.waitForTimeout(2000);
    // await dialog.accept(); // Clicks OK
    await dialog.dismiss(); // Clicks Cancel
  });

  await page.click("#confirmBtn");

  // Verify result
  const resultText = await page.textContent("#confirmResult");
  expect(resultText).toBe("Cancelled");
});
