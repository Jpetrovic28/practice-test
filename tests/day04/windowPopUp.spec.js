import { expect, test } from "@playwright/test";

test("Window pop-up practice @smoke", async ({ page }) => {
    //creating event listeners for monitoring window pop-up
    let promiseNewPage = page.waitForEvent("popup");//no await HERE
    await page.goto("https://practice.cydeo.com/windows");
    await page.click("text='Click Here'");//triggers the pop-up event
    let newPage = await promiseNewPage;//resolves promiseNewPage
    await page.waitForTimeout(3000);

    await expect(newPage).toHaveTitle("New Window");
    await expect(page).toHaveTitle("Windows");

    await page.bringToFront();
    await page.waitForTimeout(3000);
    let firstWindowElement = page.getByText("Opening a new window");
    await expect(firstWindowElement).toBeVisible();

    newPage.bringToFront();
    await page.waitForTimeout(3000);
    let secondElement = newPage.getByAltText("New Window");
    await page.waitForTimeout(3000);
  
});
