import {chromium} from 'k6/experimental/browser';
import { sleep } from 'k6';
//import { Trend } from 'k6/metrics';
//import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";



export let options = {
    scenarios: {
      ui: {
        executor: 'ramping-vus',
        gracefulStop: '30s',

      stages: [
        { target: 1, duration: '2m' },
        { target: 0, duration: '1m' },

    ],
      gracefulRampDown: '30s',
      exec: 'scenarios',

        options: {
          browser: {
            type: 'chromium',
          },
        },
      },
    },
    thresholds: {
      'http_req_duration': ['p(95)<450'],
      'http_req_failed': ['rate<0.1'],
    },
  };
  
  export async function scenarios() {
    const browser = chromium.launch({headless: false});
    //const context = browser.newContext();
    const page = browser.newPage();
  
    // 01. Go to the homepage//
    
        
      await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
      await page.waitForTimeout(4000);
      
    // Register//
    //    await page.locator(`//button[text()='Sign up']`).click();
    //    await page.waitForTimeout(2000);
    //    await page.locator(`//input[@id='firstName']`).fill('pearl');
    //    await page.locator(`//input[@id='lastName']`).fill('latecia');
    //    await page.locator(`//input[@id='email']`).fill('latecia@gmail.com');
    //    await page.locator(`//input[@id='password']`).fill('pearl@123456');
    //    await page.locator(`//button[text()='Submit']`).click();
    //   // await page.waitForTimeout(6000);
    //    await page.locator(`//button[text()='Logout']`).click();

     //login//

     await page.locator(`//input[@id='email']`).fill('latecia@gmail.com');
     await page.locator(`//input[@id='password']`).fill('pearl@123456');
     await page.locator(`//button[text()='Submit']`).click();
     await page.waitForTimeout(3000);

     //contact list//
     await page.locator(`//button[text()='Add a New Contact']`).click();
     await page.waitForTimeout(3000);
      

     // Add contact//
      await page.locator(`//input[@id='firstName']`).fill('Shiny');
      await page.locator(`//input[@id='lastName']`).fill('Sharon');
      await page.locator(`//input[@id='birthdate']`).fill('2000-02-22');
      await page.locator(`//input[@id='email']`).fill('shiny12@gmail.com')
      await page.locator(`//input[@id='phone']`).fill('8870745602');
      await page.locator(`//input[@id='street1']`).fill('Rajalakashmi nagar');
      await page.locator(`//input[@id='street2']`).fill('Thambaram');
      await page.locator(`//input[@id='city']`).fill('Chennai');
      await page.locator(`//input[@id='stateProvince']`).fill('Tamilnadu');
      await page.locator(`//input[@id='postalCode']`).fill('623589');
      await page.locator(`//input[@id='country']`).fill('India');
      await page.locator(`//button[@id='submit']`).click();
      await page.waitForTimeout(5000);
  
      sleep(1);

       page.close();
       browser.close();
    }
  

  // export function handleSummary(data) {
  //   return {
  //     "summary.html": htmlReport(data),
  //   };
  // }
  