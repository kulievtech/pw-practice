import test, { expect } from "@playwright/test";

test("Check if element is visible", async ({ page }) => {
  // Navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");

  // Grab the selector for the "Text Section" header
  const selector = "//h2[text()='Text Section']";
  await page.locator(selector).scrollIntoViewIfNeeded();

  // Assert that the "Text Section" header is visible
  const isTextSectionHeaderVisible = await page.locator(selector).isVisible();
  expect(isTextSectionHeaderVisible).toBe(true);
  expect(isTextSectionHeaderVisible).toBeTruthy();
});

test("Check Element Text", async ({ page }) => {
  // Navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");

  // Verify the text content of the paragraph in the Text Section
  const textSectionParagraph = await page.locator("#textParagraph").textContent();
  expect(textSectionParagraph).toContain("sample text");
});

test("Check Input Value", async ({ page }) => {
  // Navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");

  // Type into the input field
  const inputField = page.locator("#username");
  await inputField.fill("testuser@qa.com");

  // Verify the value of the input field
  const inputValue = await inputField.inputValue();
  expect(inputValue).toBe("testuser@qa.com");
});
