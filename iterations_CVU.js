// Use this executor if you need a specific number of VUs to run for a certain amount of time.

import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-vus',
      vus: 10,
      duration: '30s',
    },
  },
};

export default function () {
  http.get('http://demo.spreecommerce.org/t/categories/men');
  // Injecting sleep
  // Total iteration time is sleep + time to finish request.
  sleep(0.5);
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }