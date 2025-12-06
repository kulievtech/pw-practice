import { test } from "@playwright/test";

test("Clicking & Tapping", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Single Click
  await page.click("//button[text()='Login']");

  // Double Click
  await page.dblclick("//span[@alt='toggle-switch']");
});

test("Filling & Typing", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Filling Input Field
  await page.fill("#username", "myUsername");

  // Typing Input Field
  await page.locator("#email").pressSequentially("qa@tester.com", { delay: 300 });
});

test("Checkboxes & Radio Buttons", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Checking a Checkbox
  await page.check("div.checkbox-group input[value='Option 1']");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);

  // Unchecking a Checkbox
  await page.uncheck("div.checkbox-group input[value='Option 1']");

  // Selecting a Radio Button
  await page.getByRole("radio", { name: "Choice A" }).check();
});

test("Dropdowns", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // scroll to Dropdown section
  await page.locator("#dropdownMenu").scrollIntoViewIfNeeded();

  // Select Blue from Dropdown
  await page.selectOption("#dropdownMenu", "Blue");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);

  // Select Red from Dropdown
  await page.selectOption("#dropdownMenu", "Red");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);

  // Select Green from Dropdown
  await page.selectOption("#dropdownMenu", "Green");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);
});
