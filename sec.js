const{Builder, Key, By} = require("selenium-webdriver");
const assert = require("assert");


async function exam (){
    
    // lanuch the browser 
    let driver = await new Builder().forBrowser("firefox").build();

    // navigate to the page
    await driver.get("https://secure.login.gov");

    // select email input field
    let emailInput = await driver.findElement(By.id('user_email')).sendKeys('ok@1230'); 
    let passWord = await driver.findElement(By.className('usa-input usa-input--big password required password-toggle__input validated-field__input')).sendKeys('1234', Key.RETURN); 

    
    // what is assert?
    // assert is a built-in module in Node.js that provides a set of assertion functions for verifying invariants in your code. It is commonly used in testing to ensure that certain conditions hold true during the execution of your program.
    

    //assert the title of the page 
    // let submitDriver = await driver.findElement(By.xpath('//*[@id="new_user"]/lg-captcha-submit-button/lg-spinner-button/button')).getText().then(function(value){
    //     return value;
    // });

    // assert.strictEqual(submitDriver,'user_email');



    // close the browser
    await driver.quit();
}
exam()



