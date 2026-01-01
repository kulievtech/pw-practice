import { test, expect, Download } from "@playwright/test";

test("Download a single file", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Listen for download
  const [download] = await Promise.all([
    page.waitForEvent("download"), // Wait for download to start
    page.click("#singleDownloadBtn"), // Click triggers download
  ]);

  // Save downloaded file
  await download.saveAs("downloads/myFile.txt");

  // Verify download
  await expect(page.locator("#singleDownloadOutput")).toHaveText(
    "Single file download initiated!"
  );
});

test("Download multiple files", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.click("#multiDownloadBtn");

  // Collect downloads in an array
  const downloads: Download[] = [];
  for (let i = 0; i < 3; i++) {
    downloads.push(await page.waitForEvent("download"));
  }

  // Save them
  await Promise.all(
    downloads.map((download, i) => download.saveAs(`downloads/file${i + 1}.txt`))
  );

  // Verify UI text
  await expect(page.locator("#multiDownloadOutput")).toHaveText(
    "Three files downloaded!"
  );
});
