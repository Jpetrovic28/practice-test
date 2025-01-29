/*

Test case: verify that all the links under the ul tag are displayed and enabled.
    step1: Open chrome browser
    step2: Navigate to "https://practice.cydeo.com/"
    step3: The url should contain "practice.cydeo"
    step4: The title should be "Practice"
    step5: All the links under the ul HTML tag are visible and clickable 

Here is the xpath locator for locating the links elements that are under the ul tag: 
"//ul[@class='list-group']/li/a"
*/
import { test, expect } from "@playwright/test";

test("Verify links under ul tag are displayed and enabled", async ({
  page,
}) => {
  // Step 1 and 2: Open browser and navigate to the URL
  await page.goto("https://practice.cydeo.com/");

  // Step 3: Verify the URL contains "practice.cydeo"
  await expect(page).toHaveURL(/practice\.cydeo/);

  // Step 4: Verify the title is "Practice"
  await expect(page).toHaveTitle("Practice");

  // Step 5: Verify all links under the ul tag are visible and clickable
  const links = page.locator("//ul[@class='list-group']/li/a");
  const count = await links.count();

  for (let i = 0; i < count; i++) {
    const link = links.nth(i);
    await expect(link).toBeVisible();
    await expect(link).toBeEnabled();
  }
});

/*

Test Case: Search CYDEO on google
    step1: Open chrome browser.
    step2: Navigate to "https://www.google.com/".
    step3: The title should be "Google".
    Step4: Enter "CYDEO" in the searchbox and press enter key
    Step5: Page title contains "CYDEO".

Here is the xpath locator for locating the search box on google page:
"//textarea[@class='gLFyf']""
*/

test("Search CYDEO on Google", async ({ page }) => {
  // Step 1: Open chrome browser (Playwright handles this automatically)

  // Step 2: Navigate to Google
  await page.goto("https://www.google.com/");

  // Step 3: Verify the title is "Google"
  await expect(page).toHaveTitle("Google");

  // Step 4: Enter "CYDEO" in the searchbox and press enter key
  const searchBox = page.locator("//textarea[@class='gLFyf']");
  await searchBox.fill("CYDEO");
  await searchBox.press("Enter");

  // Step 5: Verify page title contains "CYDEO"
  await expect(page).toHaveTitle(/CYDEO/);
});