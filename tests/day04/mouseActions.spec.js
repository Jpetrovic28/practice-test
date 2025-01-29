import { test } from "@playwright/test";

test.describe("Test Group", () => {
    //create a Before each to navigate to https://practice.cydeo.com/
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
        await page.waitForTimeout(3000);
    });
    test.afterEach(async ({ page }) => {
      await page.waitForTimeout(3000);
    }); 
    test("Left Click", async({page}) => {
      await page.click("text='A/B Testing'");
    });

    test("Right Click", async ({ page }) => {
    await page.click("text='A/B Testing'", {button: "right"});
  });

    test("Hover", async ({ page }) => {
    await page.click("text='Hovers'");
    //await page.waitForTimeout(3000);
    //await page.hover("//img[@alt='User Avatar']"); one element
    let elements = await page.locator("//img[@alt='User Avatar']").all();
    await page.waitForTimeout(3000);

    for (let each of elements) {
      await page.waitForTimeout(1000);
      await each.hover();
    }

  });
    test("Mouse wheel scrolling", async ({ page }) => {
    await page.mouse.wheel(0, 2000);
    
  });
    test("Scrolling to specific element", async ({ page }) => {
    let inputButton = page.locator("//li[a[@href='/inputs']]");
    await inputButton.scrollIntoViewIfNeeded();
    //await page.waitForTimeout(3000);
    await inputButton.click();

  });
  test("Drag and Drop", async ({ page }) => {
    await page.click("text='Drag and Drop'");

    await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");
    await page.waitForTimeout(3000);

    //let squareA = ... and let squareB = ...   await squareA.dragTo(squareB);
  });
});
