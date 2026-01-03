import { test, expect } from "@playwright/test";

test("Handle popup window", async ({ page, context }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Wait for the new page (popup) to open
  const [popup] = await Promise.all([
    context.waitForEvent("page"), // Capture the new page
    page.click("#popupBtn"), // Trigger popup
  ]);

  await popup.waitForLoadState("domcontentloaded");
  console.log(await popup.title());

  const popupConfirmationText = await page.locator("#popupResult").textContent();
  expect(popupConfirmationText).toBe("Popup window opened successfully");

  await page.waitForTimeout(3000);

  // Interact with popup
  await popup.close(); // Close popup
});
