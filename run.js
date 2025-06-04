const{Builder} = require("selenium-webdriver");

(async function example3(){

    // lauch the browser
    let driver = await new Builder().forBrowser("firefox").build();

    // nevigate the our application
    await driver.get("http://127.0.0.1:5500/test/index.html");

    // minimize the browser
    await driver.manage().window().maximize();


    // add a todo
    


    // click the browser

})();