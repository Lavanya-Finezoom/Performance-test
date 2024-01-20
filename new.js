import exec from 'k6/execution';
import encoding from 'k6/encoding';
import http from 'k6/http';
import { check } from 'k6';

export default function () {
    // do some long operations
    // ...
    console.log(`step1: scenario ran for ${new Date() - new Date(exec.scenario.startTime)}ms`);

    // some more long operations
    //...
    console.log(`step2: scenario ran for ${new Date() - new Date(exec.scenario.startTime)}ms`);
}

const username = 'user';
const password = 'passwd';


export const options = {

    thresholds: {
        'http_req_duration': ['p(95)<450'],
        'http_req_failed': ['rate<0.1'],
    },
    scenarios: {
        Scenario_1: {
            executor: 'ramping-vus',
            gracefulStop: '30s',
            stages: [
                { target: 10, duration: '1m' },
                //{ target: 20, duration: '3m30s' },
                { target: 0, duration: '1m' },
            ],
            gracefulRampDown: '30s',
            exec: 'scenario_1',
        },
  },
}

export function scenario_1() {
    const credentials = `${username}:${password}`;

    // Passing username and password as part of the URL will
    // allow us to authenticate using HTTP Basic Auth.
    const url = `https://${credentials}@httpbin.test.k6.io/basic-auth/${username}/${password}`;

    let res = http.get(url);

    // Verify response
    check(res, {
        'status is 200': (r) => r.status === 200,
        'is authenticated': (r) => r.json().authenticated === true,
        'is correct user': (r) => r.json().user === username,
    });

    // Alternatively you can create the header yourself to authenticate
    // using HTTP Basic Auth
    const encodedCredentials = encoding.b64encode(credentials);
    const options = {
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
        },
    };

    res = http.get(`https://httpbin.test.k6.io/basic-auth/${username}/${password}`, options);

    // Verify response (checking the echoed data from the httpbin.test.k6.io
    // basic auth test API endpoint)
    check(res, {
        'status is 200': (r) => r.status === 200,
        'is authenticated': (r) => r.json().authenticated === true,
        'is correct user': (r) => r.json().user === username,
    });
}
