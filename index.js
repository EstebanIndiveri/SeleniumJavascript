const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example(){
    const driver = new Builder().forBrowser('chrome').build();
try {
driver.get('https://facebook.com');
await driver.findElement(By.name('email')).sendKeys('testselenium', Key.RETURN);
(await driver).findElement(By.name('password')).sendKeys('constraseña',Key.RETURN);
}catch(error){console.log(error)}
 finally {
    await driver.quit();
  }
  
})();