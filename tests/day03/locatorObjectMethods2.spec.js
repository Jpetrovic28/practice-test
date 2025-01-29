import { test } from "@playwright/test";

test.describe("Test Group", () => {

    //create beforeeach that navigate to https://https://practice.cydeo.com/ 
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });   

  test("innerText() retries visible text", async ({ page }) => {

    let headerElement = page.locator("//h1[@class='h1']/span[@class='h1y']");
    let actualText = await headerElement.innerText();
    console.log(actualText);
  });

  test("inputValue() only works with <input>, tesxtArea, <select>, retrieves the input value", async ({ page }) => {

    let inputsLink = page.getByText("Inputs");
    await inputsLink.click();
    let inputBox = page.locator("//input[@type='number']");
    await page.waitForTimeout(1000);

    await inputBox.fill("123");

    let actualInput = await inputBox.inputValue();
    console.log(actualInput);

  });

  test("getAttributes() retrieves the attribute value", async ({ page }) => {

    let abcTestingLink = page.locator("text='A/B Testing'");
    let hrefLink = await abcTestingLink.getAttribute("href");
    console.log(hrefLink);

  });
});
