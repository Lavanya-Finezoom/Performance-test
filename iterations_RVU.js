// This executor is a good fit if you need VUs to ramp up or down during specific periods of time.

import http from 'k6/http';
import { sleep } from 'k6';
//import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '20s', target: 10 },  //Ramp up to 10 VUs in 20s
        { duration: '20s', target: 10 },  // Stay at 10 VUs for 20s
        { duration: '10s', target: 0 }, // Graceful ramp down to 0 VUs in 10s
      ],
      gracefulRampDown: '0s',  //Time to wait for VUs to finish before stopping
    },
  },
};

export default function () {
  http.get('http://demo.spreecommerce.org/t/categories/men');
  // Injecting sleep
  // Sleep time is 500ms. Total iteration time is sleep + time to finish request.
  sleep(0.5);
}

// export function handleSummary(data) {
//     return {
//       "summary.html": htmlReport(data),
//     };
//   }