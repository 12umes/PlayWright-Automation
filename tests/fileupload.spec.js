const {test,expect} = require ('@playwright/test');

test.only('File Uploads',async({page})=>
{
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles('C:/Users/umesh/Desktop/download.jpg');
    //await page.waitForTimeout(5000);

});