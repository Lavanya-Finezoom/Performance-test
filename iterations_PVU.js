// Use this executor if you need a specific number of VUs to complete the same number of iterations.
//  This can be useful when you have fixed sets of test data that you want to partition between VUs

import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'per-vu-iterations',
      vus: 10,
      iterations: 20,
      maxDuration: '30s',
    },
  },
};

export default function () {
  http.get('http://demo.spreecommerce.org/t/categories/men');
  // Injecting sleep
  // Sleep time is 500ms. Total iteration time is sleep + time to finish request.
  sleep(0.5);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
