const {Builder, Browser,By} = require('selenium-webdriver');

(async function example2 (){

    // launch the browser
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    
    // minimize the browser
    await driver.manage().window().maximize();
    // await driver.manage().window().minimize();

    // navigate to the website
    await driver.get('https://www.campusshoes.com/collections/mens-footwear?srsltid=AfmBOoqAtD9nJ-WV1zRpWVO_KJnrLce5_WJAZNgtDkdskPXRO4SQrCpe/');

    const productImage = await driver.findElement(By.xpath("//ul[@class='block-inner']/li[1]")); 
    await productImage.click();  

}) ();