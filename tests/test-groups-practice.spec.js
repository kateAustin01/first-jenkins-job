import { test } from "@playwright/test";

test.describe("Practice.cydeo", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("https://practice.cydeo.com/");
  });
  test("title of page", async ({page}) => {
    console.log(await page.title());
    await page.waitForTimeout(3000);
  });
  test("url of page", async ({page}) => {
    console.log(await page.url());
    await page.waitForTimeout(3000);
  });
});
