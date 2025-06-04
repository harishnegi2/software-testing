const { Builder, Browser, By, Key } = require('selenium-webdriver');

(async function example() {

  // launch the browser
  // let driver = new Builder().forBrowser(Browser.FIREFOX).build();
  let driver = new Builder().forBrowser(Browser.CHROME).build();

  // nevigate to the page
  await driver.get('https://www.google.com/ncr');

  // type webdriver in the search box
  await driver.findElement(By.name('q')).sendKeys('webdriver',Key.RETURN);


  // close the browser
  driver.close();
  
  
})();

