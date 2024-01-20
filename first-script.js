
import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {

    stages: [
        {
            duration:'10s',
            target:10
        },
        {
            duration:'30s',
            target:10
        },
        {
            duration:'10s',
            target:0
        }
    ]
};

// Defining the URLs 
const urls = [
  'https://test.k6.io',
  'https://test.k6.io/contact.php',
  'https://test.k6.io/news.php',
  // Add more URLs as needed
];

// The main test scenario
export default function () {
  // Each VU goes through the list of URLs
  for (let i = 0; i < urls.length; i++) {
    // VU makes an HTTP request to the current URL
    http.get(urls[i]);
    
    // Sleep for a short duration between requests (e.g., 1 second)
    sleep(1);
  }
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
