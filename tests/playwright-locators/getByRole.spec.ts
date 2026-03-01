import { test } from "@playwright/test";

test("getByRole()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("checkbox", { name: "Option 1" }).check();
  await page.getByRole("radio", { name: "Choice A" }).check();
  await page.getByRole("textbox", { name: "Email" }).fill("test@example.com");

  //

  // These two below also work even though there is no aria-label attribute or label element
  // If getByRole(..., { name }) can’t find an element,
  // the fallback is to use the ID (page.locator('#id'))
  // or the placeholder (getByPlaceholder('text')) to locate the input directly.
  await page.getByRole("textbox", { name: "Username" }).fill("Alex");
  await page.getByRole("textbox", { name: "Search" }).fill("Grape");

  //

  await page.getByRole("heading", { name: "Welcome" }).isVisible();
  await page.getByRole("listitem", { name: "Laptop" }).isVisible();
  await page.getByRole("link", { name: "Example Website" }).click();
});
