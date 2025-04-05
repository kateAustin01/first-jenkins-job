import { test } from "@playwright/test";

test("", async ({ page }) => {
  //navigate to https://google.com
  await page.goto("https://google.com");

  //wait for 3 seconds
  await page.waitForTimeout(3000);
});
