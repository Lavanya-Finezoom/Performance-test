import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 10 },  // Ramp-up to 10 virtual users in 1 minute
    { duration: '5m', target: 10 },  // Stay at 10 virtual users for 5 minutes
    { duration: '1m', target: 0 },   // Ramp-down to 0 virtual users in 1 minute
  ],
};

export default function () {
  // Simulate a user making an HTTP GET request to an API endpoint
  let response = http.get('https://wordpress.com/');

  // Check if the response was successful (status code 200)
  check(response, {
    'is status 200': (r) => r.status === 200,
  });

  // Log the latency of the request
  console.log(`Latency for request: ${response.timings.duration} ms`);

  // Simulate user think time (random delay between 1 and 3 seconds)
  sleep(Math.random() * 2 + 1);
}
