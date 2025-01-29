import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {

    //beforeEach that navigate to https://https://practice.cydeo.com/ 
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });
  test("Verify that there are exactly 50 link elements with the <ul> tag", async ({ page }) => {
    let elements = await page.locator("//ul[@class='list-group']/li/a").all();
    expect(elements.length).toBe(50);
    expect(elements.length).toBeGreaterThan(30);
    
    // Empty test body
  });

  test("verify that each of the 50 link elements with the <ul> tag is visible & clicable", async ({ page }) => {
    let elements = await page.locator("//ul[@class='list-group']/li/a").all();
    for(let e of elements) {
      await expect(e).toBeVisible();
      //expect(await e.isVisible()).toBeTruthy();
      await expect(e).toBeEnabled();
      //expect(await e.isEnabled()).toBeTruthy();
    }// Empty test body
  });

  test("verify that each of the 50 links has href attribute ", async ({ page, }) => {
    let elements = await page.locator("//ul[@class='list-group']/li/a").all();

    for(let e of elements) {
      await expect (e).toHaveAttribute("href");
      console.log(await e.getAttribute("href"));

    // Empty test body
    }
  });
});

