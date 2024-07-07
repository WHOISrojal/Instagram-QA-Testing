const { test, expect } = require('@playwright/test');
const testData = require('../fixtures/loginFixture.json');
import { LoginPage } from '../pageObjects/login.po.js';
// const tests = require('../pageObjects/login.po.js');

//To check if the page title contains "Instagram"
test.beforeEach('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Instagram/);
});


//To check if the login button is visible
test('loginbutton', async ({ page }) => {
  // await page.goto('https://www.instagram.com/');

  // Check if the login button is visible
  const loginButton = await page.locator('button[type="submit"]');
  await expect(loginButton).toBeVisible();
});


//To fil in username and password and click the login button
// test.only('loginbuttonclick', async ({ page }) => {
//   // await page.goto('https://www.instagram.com/');

//   // Fill in the username and password fields
//   await page.fill('input[name="username"]', 'rose_all_manandhar');
//   await page.fill('input[name="password"]', 'instagramisshit');

//   // Click the login button
//   await page.locator('button[type="submit"]').click();

//   // Expect the title to contain "Instagram" after logging in
//   await expect(page).toHaveTitle(/Instagram/);
// });


//To check if the username input field is available
test('email input is visible', async ({ page }) => {
  // await page.goto('https://www.instagram.com/');

  // Check if the username input field is visible
  const usernameInput = await page.locator('input[name="username"]');
  await expect(usernameInput).toBeVisible();
});


//To check if the "Forgot password" link is visible
test('forgot password link is visible', async ({ page }) => {
    // await page.goto('https://www.instagram.com/');
  
    // Check if the "Forgot password?" link is visible
    const forgotPasswordLink = await page.locator('text=Forgot password?');
    await expect(forgotPasswordLink).toBeVisible();
  });
  

  test.describe('Valid login test', () =>{
    test.only('loginbuttonclick', async ({ page }) => {
    
      // Fill in the username and password fields
      await page.fill('input[name="username"]', 'testData.validUser.userName');
      await page.fill('input[name="password"]', 'testData.validUser.password');
    
      // Click the login button
      await page.locator('button[type="submit"]').click();
    });
  });


  test.describe('Valid login test', () =>{
    test.only('login using valid username and password', async ({ page }) => {

      const login = new LoginPage(page);
      await login.login(testData.validUser.userName, testData.validUser.password);
    
      // Click the login button
      await page.locator('button[type="submit"]').click();
    });
  });

//new one not needed
  test('add to cart button', async ({ page }) => {
    await page.goto('https://saucedemo.com/'); // Replace with the actual URL where the button is located
  
    // Check if the "ADD TO CART" button is visible
    const addToCartButton = await page.locator('button.btn_primary.btn_inventory');
    await expect(addToCartButton).toBeVisible();
  
    // Click the "ADD TO CART" button
    await addToCartButton.click();
  
  });


  // To fil in username and password and click the login button
  test.only('addnewcontact', async ({ page }) => {
  // await page.goto('https://www.thinking-tester-contact-list.herokuapp.com/');

  // Fill in the username and password fields
  await page.fill('input[name="username"]', 'rojal');
  await page.fill('input[name="password"]', 'rojal123');

  // Click the login button
  await page.locator('button[type="submit"]').click();


});














































// // // @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://facebook.com/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Facebook/);
// });

// test('loginbutton', async ({ page }) => {
//   await page.goto('https://facebook.com/');

//    await page.getByTestId('royal_login_button', { name: 'login' }).click();

//   await expect(page).toHaveTitle(/Facebook/);
// });


// test.only('loginbuttonclick', async ({ page }) => {
//   await page.goto('https://facebook.com/');

//    await page.getByTestId('royal_login_button').click();

//   await expect(page).toHaveTitle(/Facebook/);
// });

// test('email input is visible', async ({ page }) => {
//   await page.goto('https://facebook.com/');

//   // Check if the email input field is visible
//   const emailInput = await page.getByTestId('email');
//   await expect(emailInput).toBeVisible();
// });

