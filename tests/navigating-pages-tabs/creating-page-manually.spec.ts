import { test } from "@playwright/test";

test("Create a new page manually", async ({ context }) => {
  const newPage = await context.newPage();
  await newPage.goto("https://selectors-practice.onrender.com/");
});
