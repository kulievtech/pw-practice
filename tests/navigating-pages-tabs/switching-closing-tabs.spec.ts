import { test } from "@playwright/test";

test("Handle new tab", async ({ page, context }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Listen for new page (tab) event
  const [newPage] = await Promise.all([
    context.waitForEvent("page"), // Wait for the new tab
    page.click("#openNewTabBtn"), // This link opens a new tab
  ]);

  // Switching between tabs
  page.bringToFront(); // Switch focus back to the original tab
  await page.waitForTimeout(2000);
  await newPage.bringToFront(); // Switch focus to new tab
  await newPage.waitForTimeout(2000);

  // Or if you have multiple tabs and want to get all of them
  const pages = context.pages(); // Returns all open pages/tabs
  const firstPage = pages[0];
  const secondPage = pages[1];

  // Switching between tabs using the pages array
  await firstPage.bringToFront();
  await firstPage.waitForTimeout(2000);
  await secondPage.bringToFront();
  await secondPage.waitForTimeout(2000);

  // Closing tabs
  await newPage.close(); // Close the new tab
  await page.waitForTimeout(2000);
  await page.close(); // Close the original tab
});
