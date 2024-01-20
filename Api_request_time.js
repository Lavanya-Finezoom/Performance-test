import http from 'k6/http';
import { Trend } from 'k6/metrics';
import { group } from 'k6'
import { check} from 'k6';


const cartTrend = new Trend('Cart_api');

export let options = {
    stages: [
        { duration: '1m', target: 3 }, // simulate ramp-up of traffic from 0 to 3Vus
    ],
};

export default function () {

    group ('Response time foe thr Cart endpoint',()=>{
        const response = http.get('http://ecommerce.test.k6.io/cart/');
        cartTrend.add(response.timings.duration);
        check(response, {
            "status code should be 200": res => res.status === 200,
        });
    });

}



/*import { Trend } from 'k6/metrics';

const uptimeTrendCheck = new Trend('/GET API uptime');
const todoCreationTrend = new Trend('/POST Create a todo');

export let options = {
   stages: [
       { duration: '0.5m', target: 3 }, // simulate ramp-up of traffic from 0 to 3Vus
   ],
};

export default function () {
   group('API uptime check', () => {
       const response = http.get('https://aqueous-brook-60480.herokuapp.com/todos/');
       uptimeTrendCheck.add(response.timings.duration);
       check(response, {
           "status code should be 200": res => res.status === 200,
       });
   });*/