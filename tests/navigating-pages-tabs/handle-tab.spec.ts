import { test, expect } from "@playwright/test";

test("Handle new tab", async ({ page, context }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Listen for new page (tab) event
  const [newPage] = await Promise.all([
    context.waitForEvent("page"), // Wait for the new tab
    page.click("#openNewTabBtn"), // This link opens a new tab
  ]);

  // Interact with the new tab
  await newPage.waitForLoadState("domcontentloaded");
  const newPageTitle = await newPage.title();
  expect(newPageTitle).toBe("New Tab Page");

  const heading = await newPage.locator("h1").textContent();
  expect(heading).toBe("Welcome to the New Tab");
});
