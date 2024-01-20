import { browser } from 'k6/experimental/browser';
//import { sleep } from 'k6';
//import { Trend } from 'k6/metrics';


export let options = {
  scenarios: {
    ui: {
      executor: 'ramping-vus',
      gracefulStop: '30s',

      stages: [
        { target: 1, duration: '1m' },
        { target: 0, duration: '0m' },

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
    'browser_web_vital_lcp': ['p(90) < 1000'],
    'browser_web_vital_inp{url:http://ecommerce.test.k6.io/}': ['p(90) < 80'],
    'browser_web_vital_inp{url:http://ecommerce.test.k6.io/}': ['p(90) < 100'],
  },
};

export async function scenarios() {
  const page = browser.newPage();

  try{

  // 01. Go to the homepage//

  await page.goto('http://ecommerce.test.k6.io/');

}

finally {
page.close();
}

}