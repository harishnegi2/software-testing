const {Builder, Browser,By} = require('selenium-webdriver');

(async function example2 (){

    // launch the browser
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    
    // minimize the browser
    await driver.manage().window().maximize();
    // await driver.manage().window().minimize();

    // navigate to the eCommerce website
    await driver.get('https://www.campusshoes.com/collections/mens-footwear?srsltid=AfmBOoqAtD9nJ-WV1zRpWVO_KJnrLce5_WJAZNgtDkdskPXRO4SQrCpe/');

    // how to product BUY NOW button
    const fillFom = await driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div/ul/li[9]/a'));
    await fillFom.click();

    const fullName = await driver.findElement(By.xpath("@id=form_input_0"));
    await fullName.sendKeys("shivam");

}) ();  