import { test, expect } from "@playwright/test";

test("Upload a file directly", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Upload a file
  await page.setInputFiles("#fileUpload", "documents/resume.pdf");

  // Verify upload success
  await expect(page.locator("#uploadOutput")).toHaveText("Selected file: resume.pdf");
});

test("Upload multiple files directly ", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Upload a file
  await page.setInputFiles("#fileUpload", [
    "documents/resume.pdf",
    "documents/miami.jpeg",
  ]);

  // Verify upload success
  await expect(page.locator("#uploadOutput")).toHaveText(
    "Selected files: resume.pdf, miami.jpeg"
  );
});
