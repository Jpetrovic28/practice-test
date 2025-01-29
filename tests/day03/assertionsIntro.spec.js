import { test , expect} from "@playwright/test";

test.describe("Test Group", () => {
    //create beforeeach that navigate to https://https://practice.cydeo.com/ 
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
        await expect(page).toHaveTitle("Practice");
        expect (await page.title()).toBe("Practice");

    });
  test("Verify checkboxes are checked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let checkboxes1 = page.locator("//input[@id='box1']");
    let checbox2 = page.locator("//input[@id='box2']");

    await checkboxes1.check();
    await page.waitForTimeout(1000);
    await checbox2.check();
    await page.waitForTimeout(1000); // wait for page to load before checking checkbox state

    await expect(checkboxes1).toBeChecked();
    await expect(checbox2).toBeChecked();
    await page.waitForTimeout(1000);

    //await checkboxes1.isChecked();
    expect(await checkboxes1.isChecked()).toBeTruthy();
    expect(await checbox2.isChecked()).toBeTruthy();

  });

  test("Verify checkboxes are unchecked", async ({ page }) => {
    await page.getByText("Checkboxes").click();
    let checkboxes1 = page.locator("//input[@id='box1']");
    let checbox2 = page.locator("//input[@id='box2']");

    await checkboxes1.uncheck();
    await checbox2.uncheck();

    await expect(checkboxes1).not.toBeChecked();
    await expect(checbox2).not.toBeChecked();
    await page.waitForTimeout(1000);

    expect(await checkboxes1.isChecked()).toBeFalsy();
    expect(await checbox2.isChecked()).toBeFalsy();


  });

  test("Verify visible text element", async ({ page }) => {
    let headerElement = page.locator("span.h1y");
    await expect(headerElement).toHaveText("Test Automation Practice");

    let actualText = await headerElement.innerText();
    console.log(actualText);
    expect(actualText).toEqual("Test Automation Practice");

  });
});
