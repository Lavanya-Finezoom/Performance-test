import { browser } from 'k6/experimental/browser';
import { sleep } from 'k6';
import { Trend } from 'k6/metrics';
import { check} from 'k6';


const cartTrend = new Trend('Add_to_cart');

export let options = {
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

    // export default function () {
      //  group ('Response time for the Cart endpoint',()=>{
        const response = await page.locator(`(//a[text()='Add to cart'])[3]`).click();
        cartTrend.add(response.timings.duration);
        check(response, {
            "status code should be 200": res => res.status === 200,
        });
    //});

    // 02. View Cart//

    await page.locator(`(//a[text()='View cart'])[2]`).click();

    //03. checkout//
    
    await page.locator(`//a[contains(text(),'Proceed to checkout')]`).click();
    

    sleep(1);
  }

  
  finally {
    page.close();
  }

}






/*import http from 'k6/http';
import { Trend } from 'k6/metrics';
import { group } from 'k6'
import { check} from 'k6';


const cartTrend = new Trend('Cart_api');

export let options = {
    stages: [
        { duration: '1m', target: 3 }, // simulate ramp-up of traffic from 0 to 3Vus
    ],
};

export default function () {

    group ('Response time foe thr Cart endpoint',()=>{
        const response = http.get('http://ecommerce.test.k6.io/cart/');
        cartTrend.add(response.timings.duration);
        check(response, {
            "status code should be 200": res => res.status === 200,
        });
    });

}*/


