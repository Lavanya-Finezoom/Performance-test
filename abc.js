import { browser } from 'k6/experimental/browser';
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
  const page = browser.newPage();
  
  try {

    // Track network events
    page.on('response', (response) => {
      console.log(`URL: ${response.url}, Status: ${response.status}, Latency: ${response.requestEnd - response.requestStart} ms`);
    });

    // Navigate to the homepage
   await page.goto('https://ginandjuice.shop/');

    // Wait for homepage to load
    page.waitForSelector('https://ginandjuice.shop/');

    // Click on a link to the product page
    page.click('https://ginandjuice.shop/catalog');

    // Wait for the product page to load
    page.waitForSelector('https://ginandjuice.shop/catalog ');
  } finally{
    page.close();
  }
}

//     // Close the browser page
//     browser.close();
//   });

//   // Introduce some sleep time between iterations
//   sleep(5);
// }
