import { test } from "@playwright/test";

test.describe("Practice Cydeo", () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");

    });
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(1000);
    });

    test("title of page", async ({ page }) => {
        console.log(await page.title());
        
         
    });
    test("url of page", async ({ page }) => {
    console.log( page.url());
    

   });
});