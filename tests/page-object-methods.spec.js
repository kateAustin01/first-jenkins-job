import { test } from "@playwright/test";

test("Getting the title of the psge", async ({ page }) => {
  await page.goto("https://practice.cydeo.com");
  //pause for three seconds
  await page.waitForTimeout(3000);

  let actualTitle = await page.title();
  console.log(actualTitle);
});

test("Getting the current url of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com");
  //pause for three seconds
  await page.waitForTimeout(3000);

  let actualUrl = await page.url();
  console.log(actualUrl);
});

test("Set the window size", async ({ page }) => {
  await page.goto("https://practice.cydeo.com");

  //wait for 3 seconds
  await page.waitForTimeout(3000);

  page.setViewportSize({ width: 1850, height: 1080 });
  await page.waitForTimeout(3000);
});
