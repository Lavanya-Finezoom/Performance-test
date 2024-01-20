import { browser } from 'k6/experimental/browser';
import { sleep } from 'k6';


export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      vus:1,
      iterations:1,
      maxDuration:'30s',

      options: {
        browser: {
          type: 'chromium',
           
        },        
      },
    },
  },
       
  thresholds: {
    //'http_req_duration': ['p(95)<450'],
      'http_req_failed': ['rate<0.1'],
    },
      
};
export default async function () {
  const page = browser.newPage();

  // 01. Go to the homepage//
  try {

    
    await page.goto('http://ecommerce.test.k6.io/');
    await page.waitForTimeout(4000);

   // page.screenshot({path: 'screenshots/01_homepage.png'});

     // Record the start time// 
     const startTime1 = new Date().getTime();
     // perform the operation that we want to do//
     const response = await page.locator(`(//a[text()='Add to cart'])[3]`).click();
     // Record the end time//
     const endTime1 = new Date().getTime();
     // Calculating the duration //
     const duration1 = endTime1 - startTime1;
     //Printing the Duration in console//
     console.log(`Request_1 took ${duration1} milliseconds`);

   //await page.waitForTimeout(3000);
    

    // 02. View Cart//
    const startTime2 = new Date().getTime();
    await page.locator(`(//a[text()='View cart'])[2]`).click();
    const endTime2 = new Date().getTime();
    const duration2 = endTime2 - startTime2;
    console.log(`Request_2 took ${duration2} milliseconds`);


    //03. checkout//
    const startTime3 = new Date().getTime();
    await page.locator(`//a[contains(text(),'Proceed to checkout')]`).click();
    const endTime3 = new Date().getTime();
    const duration3 = endTime3 - startTime3;
    console.log(`Request_3 took ${duration3} milliseconds`);
    

    sleep(1);
  }
  
  finally {
    page.close();
  }

}

