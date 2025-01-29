import { test } from "@playwright/test";

test.describe("Test Group", () => {

    //crete beforeeach that navigate to https://https://practice.cydeo.com/ 
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/javascript_alerts");
    });
  test("Regular Alert", async ({ page }) => {
    let clickForJSAlert = page.locator("//button[@onclick='jsAlert()']");
    await clickForJSAlert.click();
    await page.waitForTimeout(2000);
    // Empty test body
  });

  test("Confirmation Alert", async ({ page }) => {
    
    // Empty test body
  });

  test("Prompt Alert", async ({ page }) => {
    // Empty test body
  });
});
