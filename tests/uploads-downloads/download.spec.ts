import { test, expect } from "@playwright/test";

test("Download a file", async ({ page }) => {
  await page.goto("<https://example.com/download>");

  // Listen for download
  const [download] = await Promise.all([
    page.waitForEvent("download"), // Wait for download to start
    page.click("#downloadButton"), // Click triggers download
  ]);

  // Save downloaded file
  await download.saveAs("downloads/myFile.txt");

  // Log filename
  console.log("Downloaded filename:", download.suggestedFilename());
});
