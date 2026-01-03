import { test, expect } from "@playwright/test";

// This test is skipped because it demonstrates that to interact with iframes you cannot use page.locator
// Instead, you should use frameLocator as shown in the second test
test.skip("Interact with iframe using page", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Create a frame locator
  const iframe = page.locator("#practiceIframe");

  // Click button inside iframe
  await iframe.locator("#iframeBtn").click();

  // Assert
  await expect(iframe.locator("#iframeOutput")).toHaveText(
    "Button inside iframe clicked!"
  );

  // Fill input inside iframe
  await iframe.locator("#iframeInput").fill("Hello iFrame");

  // Assert
  await expect(iframe.locator("#iframeInput")).toHaveValue("Hello iFrame");
});

test("Interact with iframe using frameLocator", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Create a frame locator
  const iframe = page.frameLocator("#practiceIframe");

  // Click button inside iframe
  await iframe.locator("#iframeBtn").click();

  // Assert
  await expect(iframe.locator("#iframeOutput")).toHaveText(
    "Button inside iframe clicked!"
  );

  // Fill input inside iframe
  await iframe.locator("#iframeInput").fill("Hello iFrame");

  // Assert
  await expect(iframe.locator("#iframeInput")).toHaveValue("Hello iFrame");
});

test("Interact with iframe using frame object", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Get the iframe element handle
  const frameHandle = await page.$("#practiceIframe");

  if (!frameHandle) {
    throw new Error("Iframe not found");
  }

  // Get the frame object
  const frame = await frameHandle.contentFrame();

  if (!frame) {
    throw new Error("Could not get frame from iframe element");
  }

  // Click button inside iframe
  await frame.locator("#iframeBtn").click();

  // Assert
  await expect(frame.locator("#iframeOutput")).toHaveText(
    "Button inside iframe clicked!"
  );

  // Fill input inside iframe
  await frame.locator("#iframeInput").fill("Hello iFrame");

  // Assert
  await expect(frame.locator("#iframeInput")).toHaveValue("Hello iFrame");
});
