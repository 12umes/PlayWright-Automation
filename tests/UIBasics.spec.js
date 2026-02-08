const {test,expect} = require ('@playwright/test');
const { text } = require('node:stream/consumers');
//importing playwright package above code 

test('Browser context',async({browser})=>
   
    {
 const context= await browser.newContext();
   const page= await context.newPage();
  await page.goto("https://mail.google.com/mail/u/0/?ogbl#inbox");

});

test.only('UI Controls',async({page})=>
   
    {
 
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('#password').fill('rahulshettyacademy');
 const dropdown= await page.locator("select.form-control");
 await dropdown.selectOption("consult");
 await page.locator('.radiotextsty').last().click();
 await page.locator('#okayBtn').click();
 await page.pause();

});

test.only('Page playwright test',async({page})=>
   
    {
 
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  console.log (await page.title());
  await expect (page).toHaveTitle("Let's Shop");
  await page.locator('#userEmail').fill('umeshnair11190@gmail.com');
  await page.locator('#userPassword').fill('109@Umesh');
  await page.locator(('input[id="login"]')).click();
  console.log(await page.locator('.card').first().textContent());
  //console.log(await page.locator("[style*='block']").textContent());//to check text content
  //await expect(page.locator("[style*='block']")).toContainText('Incorrect');
  //to check assertions using expect keyword
 //console.log(await page.locator("[style*='block']").allTextContents());

await page.locator('.card').filter({ hasText: 'ZARA COAT 3' }).getByRole('button', { name: 'Add To Cart' })
  .click();

  //await page.locator('.card').filter({hasText: 'IPHONE 13 PRO'}).getByRole('button',{name:'View'}).click();
await page.locator('button[routerlink="/dashboard/cart"]').click();
//await page.locator('button[routerlink="/dashboard/myorders"]').click();
//await page.getByRole('button',{name: 'Buy Now'}).click();
await page.getByRole('button',{name: 'Checkout'}).click();
await page.locator('i[aria-hidden="true"]').click();



console.log(await page.locator('.card').allTextContents());

});