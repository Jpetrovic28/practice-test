import { test } from "@playwright/test";

test.describe("", () => {
  //create BeforeEach that navigate to https://https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });


  test("Check() checks the radio buttons and check boxes if they haven't been checked yet", async ({ page }) => {
    let checkboxes = page.locator("a[href='/checkboxes']");
    await checkboxes.click();
    
    let checkbox1 = page.locator("//input[@id='box1']");
    await checkbox1.click();
    

  });

  test("Unchecked", async ({ page }) => {
    let checkboxes = page.locator("a[href='/checkboxes']");
    await checkboxes.click();

    let checkbox2 = page.locator("//input[@id='box2']");
    
    await checkbox2.uncheck();
    
  });

  test("SelectOption used for dropdown", async ({ page }) => {
    let dropdown = page.getByText("Dropdown");
    await dropdown.click();
    

    let simpleDropdown = page.locator("//select[@id='dropdown']");
    //await simpleDropdown.selectOption("1"); selecting by value
    
    //await simpleDropdown.selectOption({label: "Option 1"}); //selecting by text
    
    await simpleDropdown.selectOption({index: 1}); //selecting by index
    
  });
});
