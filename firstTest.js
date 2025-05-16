const { Builder, Browser } = require('selenium-webdriver');

(async function example() {

  // launch the browser
  // let driver = new Builder().forBrowser(Browser.FIREFOX).build();
  let driver = new Builder().forBrowser(Browser.CHROME).build();

  // nevigate to the page
  await driver.get('https://www.google.com/ncr');

  // close the browser
  driver.close();
  
  
})();

