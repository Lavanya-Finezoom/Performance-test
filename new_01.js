import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 3, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
    duration: '1m', // This can be shorter or just a few iterations

    thresholds: {
        'http_req_duration': ['p(95)<300'],
        'http_req_failed': ['rate<0.1'],
    },
  }; 

export default function () {
  const payload = JSON.stringify({
    name: 'lorem',
    surname: 'ipsum',
  });
  const headers = { 'Content-Type': 'application/json' };

  let res= http.post('https://httpbin.test.k6.io/post', payload, { headers });
    
 check(res, {
    'status is 200': (r) => r.status === 200,
});

}