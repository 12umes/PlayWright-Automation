// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({

 
  reporter: 'html',

  use: {
   
    trace: "on",
    video:"on",
    screenshot:"only-on-failure",
    headless:true
    
 
 
   
   
    
  }

 
});

