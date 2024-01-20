import http from 'k6/http';
import { sleep, check } from 'k6';
//import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export let options = {
  vus: 1,          // Number of virtual users
  duration: '2m',   // Test duration
  thresholds: {
    'http_req_duration': ['p(95)<300'],  // 95% of requests should complete within 500ms
    'http_req_failed': ['rate<0.1'],      // Keep the error rate below 0.1%
  },
};

export default function () {
  // Replace with your real-time website URL
  const url = 'http://demo.spreecommerce.org/';

  // Simulate a user visiting the website
  let response = http.get(url);

  // Check if the response status code is 200
  check(response, {
    'is status 200': (r) => r.status === 200,
  });
  
  // Sleep for a short interval to control the throughput
  sleep(1);
}

// export function handleSummary(data) {
//   return {
//     "summary.html": htmlReport(data),
//   };
// }
 

