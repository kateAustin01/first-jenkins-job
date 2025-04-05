import { test } from "@playwright/test"; // new way of importing
test("Simple google test", async ({ page }) => {
  //test codes
  await page.goto("https://www.google.com");
  await page.waitForTimeout(3000);
  let searchBox = page.locator("//textarea[@id='APjFqb']");
  await page.waitForTimeout(3000);
  await searchBox.fill("Cydeo");
  await page.waitForTimeout(3000);
  await searchBox.press("Enter");
  await page.waitForTimeout(3000);
});

/*
<textarea class="gLFyf" aria-controls="Alh6id" 
aria-owns="Alh6id" autofocus="" title="Search" 
value="" aria-label="Search" placeholder="" 
aria-autocomplete="both" aria-expanded="false" 
aria-haspopup="false" autocapitalize="off" 
autocomplete="off" autocorrect="off" id="APjFqb" 
maxlength="2048" name="q" role="combobox" rows="1" 
spellcheck="false" jsaction="paste:puy29d" 
data-ved="0ahUKEwi10aTO65yMAxUTM1kFHY7zBJEQ39UDCAY"
aria-activedescendant="" style=""></textarea>
*/

//textarea[@id = "APjFqb"]
