const {test,expect} = require ('@playwright/test');

test.only('Actions',async({page})=>
   
    {

await page.goto('https://freelance-learn-automation.vercel.app/signup');
 console.log (await page.title());
 await expect(page).toHaveTitle("Learn Automation Courses");
 await page.locator('#state').selectOption({value:"Andhra Pradesh"});
 await page.waitForTimeout(5000)
 await page.locator('#state').selectOption({label:"Kerala"});
  await page.waitForTimeout(5000)
  //await page.locator('#state').selectOption({index:"Arunachal Pradesh"});
//await page.waitForTimeout(5000)
const value=await page.locator('#state').textContent();
console.log(value);
await expect(value.includes("Kerala")).toBe(true);
});