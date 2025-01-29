import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  //pause for 3 seconds to allow the page to load completely
  await page.waitForTimeout(1000);

  let actualTitle = await page.title();
  console.log(actualTitle);
});

test("Getting the current url of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  let actualURL = page.url();
});
test("Set the window size", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    await page.waitForTimeout(1000);

    //await page.setViewportSize({ width: 1850, height: 1080 });
    await page.waitForTimeout(1000);

});
