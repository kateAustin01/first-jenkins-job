//const{test}= require("@playwright/test"); old way of importing

import {test} from "@playwright/test";// new way of importing
test("Simple google test",async({page}) => {
    //test codes
    await page.goto("https://www.google.com");

    await page.waitForTimeout(3000);
});