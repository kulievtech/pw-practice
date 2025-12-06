import { test } from "@playwright/test";

test("Clicking", async ({ page }) => {
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

test("Hover Action", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Scroll to Hover section
  await page.locator("//h2[text()='Hover Menu']").scrollIntoViewIfNeeded();

  // Hover over the element
  await page.hover("div.menu");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);

  // Click on the revealed submenu item
  await page.click("#submenuItem");

  // Move mouse away to hide submenu
  await page.mouse.move(0, 0);
});

test("Mouse Actions - Drag and Drop", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Scroll to Mouse action section
  await page.locator("//h2[text()='Mouse Actions']").scrollIntoViewIfNeeded();

  // Locate the draggable element and the drop zone
  const source = await page.locator("#mouseBox").boundingBox();
  const target = await page.locator("#dropZone").boundingBox();

  if (!source || !target) {
    throw new Error("Could not find source or target");
  }

  // Move to the source element
  await page.mouse.move(source.x + source.width / 2, source.y + source.height / 2);

  // Hold mouse button down
  await page.mouse.down();

  // Drag to target
  await page.mouse.move(
    target.x + target.width / 2,
    target.y + target.height / 2,
    { steps: 20 } // smooth movement
  );

  // Release mouse
  await page.mouse.up();

  await page.waitForTimeout(2000);
});

test("Drag & Drop", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Scroll to Drag and Drop section
  await page.locator("//h2[text()='Todo Drag & Drop']").scrollIntoViewIfNeeded();

  // Get locators
  const finishReportTodo = page.locator("//li[text()='Finish report']");
  const doneZone = page.locator("#doneList");

  // Drag and Drop using dragTo
  await finishReportTodo.dragTo(doneZone);
  await page.waitForTimeout(1000);

  // Drag and Drop using dragAndDrop
  await page.dragAndDrop("//li[text()='Buy groceries']", "#doneList");
});

test("Keyboard Actions", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Focus on input field
  await page.click("#keyboardInput");

  // Type text using keyboard
  const text = "Hello World from Keyboard!";
  await page.keyboard.type("Hello World from Keyboard", { delay: 100 });
  await page.waitForTimeout(2000);

  // Press Enter key
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  // Press Backspace key
  for (let i = 0; i < text.length; i++) {
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(100);
  }
});
