import http from 'k6/http';
import { check, sleep } from 'k6';

// Read the captured network requests from the JSON file
const backendCalls = JSON.parse(open('./backendCalls.json'));

export let options = {
  vus: 10,
  duration: '1m',
};

// k6 script to replay the captured backend service calls and log their latency
export default function () {
  for (const call of backendCalls) {
    const response = http.get(call.url);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });

    console.log(`[${new Date().toISOString()}] Latency for ${call.method} ${call.url}: ${response.timings.duration} ms`);

    sleep(1);
  }
}