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
  // or
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

test("Check Element State", async ({ page }) => {
  // Navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");

  // Check if the login button is enabled
  await expect(page.locator("form[id='loginForm'] button[type='submit']")).toBeEnabled();

  // Check if the "Remember Me" checkbox is checked by default
  await expect(page.locator("#rememberMe")).toBeChecked();

  // Check if the disabled button is indeed disabled
  await expect(page.locator("#disabledButton")).toBeDisabled();

  // Check a checkbox and verify it's checked
  await page.locator("div.checkbox-group input[value='Option 1']").check();
  await expect(page.locator("div.checkbox-group input[value='Option 1']")).toBeChecked();
});

test("Check Element Count", async ({ page }) => {
  // Navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");

  // Count the number of buttons on the page
  const buttonCount = await page.locator("button").count();
  expect(buttonCount).toBeGreaterThan(4);

  // Count the number of fruit options in the search options list
  const fruitsCount = await page.locator("ul[id='searchOptions'] li").count();
  expect(fruitsCount).toBe(7);
});

test("Assertions on Attributes & CSS", async ({ page }) => {
  // Navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");

  // Verify the placeholder attribute of the username input field
  await expect(page.locator("#username")).toHaveAttribute("placeholder", "Username");

  // Verify the background color of the header
  await expect(page.locator("//button[text()='Login']")).toHaveCSS(
    "border-radius",
    "8px"
  );
});

test("Assertions on API Response", async ({ page }) => {
  // Make an API request to a sample endpoint and verify the response
  const response = await page.request.get("https://jsonplaceholder.typicode.com/posts/1");
  expect(response.status()).toBe(200);

  // Verify specific fields in the JSON response
  const data = await response.json();
  expect(data.id).toBe(1);
  expect(data.title).toBeTruthy();
});

test("Combining Multiple Assertions", async ({ page }) => {
  // Navigate to the target webpage
  await page.goto("https://selectors-practice.onrender.com/");

  // Locate the button output element
  const element = page.locator("#buttonOutput");

  // Perform multiple assertions on the element
  await expect(element).not.toBeVisible();
  expect(await element.textContent()).toBeFalsy();
  await expect(element).toHaveClass(/output/);
});
