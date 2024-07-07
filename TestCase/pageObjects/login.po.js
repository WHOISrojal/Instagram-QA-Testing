const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.LoginButton = page.locator('#submit');
        // this.usernameInput = '//input[name="username"]';
        // this.passwordInput = '//input[name="password"]';
    }
    async login(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.LoginButton.click();
        //await this.page.locator(this.usernameInput).fill(username);
        //await this.page.locator(this.passwordInput).fill(password);
        //await this.page.locator(this.loginButton).click();
    }
    async submit() {
        await this.LoginButton.click(); // Assuming clicking login button submits the form
        // You can add additional logic if needed after clicking submit
    }
    async verifyUsernameEmptyFields(){
        const verifyEmptyUsername = await this.page.locator(this.userNameEmptyE)
        await expect(verifyEmptyUsername).theHaveText('Username is required');
    }

    async verifyPasswordEmptyFields(){
        const verifyEmptyPassword = await this.page.locator(this.passwordEmptyE)
        await expect(verifyEmptyPassword).theHaveText('Password is required');
    }
}


// const { expect } = require('@playwright/test');

// exports.LoginPage = class LoginPage{
//     constructor(page){
//         this.page = page;
//         this.usernameInput = '//input[name="username"]';
//         this.passwordInput = '//input[name="password"]';
//         this.LoginButton = '//button[type="submit"]';
//     }
//     async login(username, password){
//         await this.page.locator(this.usernameInput).fill(username);
//         await this.page.locator(this.passwordInput).fill(password);
//         await this.page.locator(this.loginButton).click();
//     }
//     async verifyUsernameEmptyFields(){
//         const verifyEmptyUsername = await this.page.locator(this.userNameEmptyE)
//         await expect(verifyEmptyUsername).theHaveText('Username is required');
//     }

//     async verifyPasswordEmptyFields(){
//         const verifyEmptyPassword = await this.page.locator(this.passwordEmptyE)
//         await expect(verifyEmptyPassword).theHaveText('Password is required');
//     }
// }