const {test,expect}=require('@playwright/test')

test('Login',async({page}) =>{

    await page.goto('https://www.google.com/');
    await page.locator("//textarea[@class='gLFyf']").fill('Mobiles')
    await page.keyboard.press('Control C');
    await page.keyboard.press('Control V');
    await page.keyboard.press('Backspace');
});

test('Dropdown', async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/dropdown?utm_source=chatgpt.com');
    //await page.waitForTimeout(2000);
    await page.locator('#dropdown').click();
    await page.getByText('Option 1');
    await page.waitForTimeout(3000);



});

test('Checkbox',async({page})=>{

await page.goto('https://practice-automation.com/form-fields/?utm_source=chatgpt.com');
    await page.locator("//input[@id='drink1']").check();
    await page.waitForTimeout(3000);


});

test.only('Radio Button',async({page})=>{

await page.goto('https://practice-automation.com/form-fields/?utm_source=chatgpt.com');
    await page.locator("//input[@id='color1']").click();
    await page.waitForTimeout(3000);
    await page.locator("//input[@id='email']").fill("Test@gmail.com");
        await page.waitForTimeout(3000);
        await page.locator("//button[@id='submit-btn']").click();
        await page.waitForTimeout(3000);
        //await expect(page).toHaveTitle('Error message');
        const errormessage= await page.locator("//p[@class='red_txt']").textContent();
        console.log(errormessage); //print error message 
        await page.locator("//input[@id='name-input']").fill('Umesh');
        
});


