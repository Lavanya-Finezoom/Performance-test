
//import { check } from 'k6';
import http from 'k6/http';


export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  }
}
export default async function () {
 
  

    //const response = null;
    // const URL;
    // const Status;
    // const Latency;

    
       
     await page.goto('https://ginandjuice.shop/');
     await page.waitForTimeout(5000)
   await page.screenshot({ path: 'screenshot.png' });
//  await page.locator(`(//a[text()='Products'])[1]`).click();
//    await page.goto('https://ginandjuice.shop/catalog/product?productId=1');
//    await page.screenshot({ path: 'screenshot1.png' });

   const res = http.get('https://ginandjuice.shop/');
   for (const p in res.url) {
    if (res.url.hasOwnProperty(p)) {
      console.log(p + ' : ' + res.url[p]);
    }
  }

//    page.on('console', (response) => {
//     console.log(`URL: ${response.url},
//     Status: ${response.status}, 
//     Latency: ${response.requestEnd - response.requestStart} ms`);
//    });
   
//   } finally {
//     page.close();
//   }
 }