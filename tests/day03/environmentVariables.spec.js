import { test } from "@playwright/test";

test("@env-test Testing environment variables", async ({ page }) => {

    //console.log(process.env.PRACTICE_USERNAME);
    //console.log(process.env.PRACTICE_PASSWORD);

    console.log(`Username is: ${process.env.PRACTICE_USERNAME}`);
    console.log(`Paswordis: ${process.env.PRACTICE_PASSWORD}`);
  // Empty test body
});

test("Bypass auth by encoding the credentials base 64 format", async ({
  page,
}) => {
  // Empty test body
  let encodedCredential = Buffer.from(
    `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredential}`,
  });
  page.goto("https://practice.cydeo.com/basic_auth");
  await page.waitForTimeout(2000);
  
});