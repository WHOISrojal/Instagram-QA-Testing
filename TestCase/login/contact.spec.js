const { test, expect } = require("@playwright/test");
const testData = require("../fixtures/loginFixture.json");
import { LoginPage } from "../pageObjects/login.po.js";
const {
  authenticateUser1,
  deleteEntity,
  createEntity,
} = require("../../utils/helper.spec.js");

let interceptId;

test.beforeEach(async ({ page }) => {
  await page.goto("https://thinking-tester-contact-list.herokuapp.com");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Contact List App/);

  const login = new LoginPage(page);
  await login.login(testData.testUser.userName, testData.testUser.password);
  await login.submit();
});

// test("Add New Contacts", async ({ page }) => {
//   await page.locator('#add-contact').click();
//   await page.waitForSelector('#firstName');

//   await page.locator('#firstName').fill(testData.contact.firstname);
//   await page.locator('#lastName').fill(testData.contact.lastname);
//   await page.locator('#birthdate').fill(testData.contact.birthdate);
//   await page.locator('#email').fill(testData.contact.email);
//   await page.locator('#phone').fill(testData.contact.phone);
//   await page.locator('#street1').fill(testData.contact.street1);
//   await page.locator('#street2').fill(testData.contact.street2);
//   await page.locator('#city').fill(testData.contact.city);
//   await page.locator('#stateProvince').fill(testData.contact.stateProvince);
//   await page.locator('#postalCode').fill(testData.contact.postalCode);
//   await page.locator('#country').fill(testData.contact.country);

//   await page.locator('#submit').click();

//   await page.waitForSelector('text=Contact List');

//   // await page.waitForSelector('.contactTableBodyRow');

//   const contactRow = await page.locator('.contactTableBodyRow:has-text("Rojal Mdhr")').first();
//   await contactRow.click();

//   // await page.waitForSelector('text=Contact Details');

//   await page.locator('#edit-contact').click();

//   await page.waitForSelector('text=Edit Contact');

//   await page.locator('#firstName').fill(testData.editContact.firstname);
//   await page.locator('#lastName').fill(testData.editContact.lastname);
//   await page.locator('#birthdate').fill(testData.editContact.birthdate);
//   await page.locator('#email').fill(testData.editContact.email);
//   await page.locator('#phone').fill(testData.editContact.phone);
//   await page.locator('#street1').fill(testData.editContact.street1);
//   await page.locator('#street2').fill(testData.editContact.street2);
//   await page.locator('#city').fill(testData.editContact.city);
//   await page.locator('#stateProvince').fill(testData.editContact.stateProvince);
//   await page.locator('#postalCode').fill(testData.editContact.postalCode);
//   await page.locator('#country').fill(testData.editContact.country);

//   await page.locator('#submit').click();
//   await page.waitForSelector('text=Contact Details');

//   await page.pause();
// });

test("Contact Edit Test", async ({ context, page, request }) => {
  const Data = { firstName: "hello", lastName: "world" };
  const accessToken = await authenticateUser1({ request });
  const entityId = await createEntity(Data, accessToken, "/contacts", {
    request,
  });
  await intercept(
    "https://thinking-tester-contact-list.herokuapp.com/contacts/**",
    { context, page }
  );
  page.reload();
  await page.waitForTimeout();
  await contact.contactEdit();
  await deleteEntity(accessToken, `/contacts/${interceptId}`, { request });
  await validateEntity(accessToken, `/contacts/${interceptId}`, "404", {
    request,
  });
  await page.waitForTimeout(5000);
});

async function intercept(module, { context, page }) {
  await context.route(module, async (route) => {
    await route.continue();
    const response = await page.waitForResponse(module);
    page.waitForTimeout(5000);
    const responseBody = await response.json();
    interceptId = responseBody._id;
  });
}

test.only("Contact Delete Test", async ({ context, page, request }) => {
  await intercept("**/contacts", { context, page });
  const contact = new ContactPage(page);
  const Data = { firstName: "hello", lastName: "world" };
  const accessToken = await authenticateUse1({ request });
  const entityId = await createEntity(Data, accessToken, "/contacts", {
    request,
  });
  page.reload();
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });
  await contact.contactDelete();
  await page.waitForTimeout(3000);
});

test.afterEach(async ({ page }) => {
  await page.close();
});
