import { test } from "@playwright/test";

test("Bypass auth by embedding the credentials in the url", async ({ page }) => {

    await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
    await page.waitForTimeout(2000);
  // Empty test body//no bueno
});

test("Bypass auth by encoding the credentials base 64 format", async ({ page }) => {
  // Empty test body
  let encodedCredential = Buffer.from("admin:admin").toString("base64");
  await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredential}`});
  page.goto("https://practice.cydeo.com/basic_auth");
  await page.waitForTimeout(2000);
});
