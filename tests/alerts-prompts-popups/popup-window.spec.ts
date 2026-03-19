import { test, expect } from "@playwright/test";

test("context and page - Handle popup window with", async ({
  page,
  context,
}) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Wait for the new page (popup) to open
  const [popup] = await Promise.all([
    context.waitForEvent("page"), // Capture the new page
    page.click("#popupBtn"), // Trigger popup
  ]);

  // Wait for the popup to load
  await popup.waitForLoadState("domcontentloaded");

  // Verify success message on the main page
  const popupConfirmationText = await page.locator("#popupResult").innerText();

  expect(popupConfirmationText).toBe("Popup window opened successfully");

  // Interact with the popup
  const popupTitle = await popup.locator("#popupTitle").innerText();
  expect(popupTitle).toBe("Popup Page");

  await popup.close(); // Close popup
});

test("page and popup - Handle popup window with", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Wait for the new page (popup) to open
  const [popup] = await Promise.all([
    page.waitForEvent("popup"), // Capture the new page
    page.click("#popupBtn"), // Trigger popup
  ]);

  // Wait for the popup to load
  await popup.waitForLoadState("domcontentloaded");

  // Verify success message on the main page
  const popupConfirmationText = await page.locator("#popupResult").innerText();

  expect(popupConfirmationText).toBe("Popup window opened successfully");

  // Interact with the popup
  const popupTitle = await popup.locator("#popupTitle").innerText();
  expect(popupTitle).toBe("Popup Page");

  await popup.close(); // Close popup
});
