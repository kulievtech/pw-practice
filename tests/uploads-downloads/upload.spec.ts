import { test, expect } from "@playwright/test";

test("setInputFiles - Upload a file directly", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Upload a file
  await page.setInputFiles("#fileUpload", "documents/resume.pdf");

  // Verify upload success
  await expect(page.locator("#uploadOutput")).toHaveText("Selected files: resume.pdf");
});

test("setInputFiles - Upload multiple files directly", async ({ page }) => {
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

test("fileChooser - Upload file via file chooser", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Wait for file chooser to appear when button is clicked
  const [fileChooser] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.click("#fileUpload"), // This triggers the file chooser
  ]);

  // Set files to upload
  await fileChooser.setFiles("documents/resume.pdf");

  // Verify upload
  await expect(page.locator("#uploadOutput")).toHaveText("Selected files: resume.pdf");
});
