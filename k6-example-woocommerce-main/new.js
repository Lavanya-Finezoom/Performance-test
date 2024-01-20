import http from 'k6/http';
import { check, group, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 10 },  // Ramp up to 10 VUs over 1 minute
    { duration: '5m', target: 10 },  // Stay at 10 VUs for 5 minutes
    { duration: '1m', target: 0 },   // Ramp down to 0 VUs over 1 minute
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
    error_rate: ['rate<0.1'],
  },
  summaryTrendStats: ['avg', 'p(95)', 'p(99)', 'min', 'med', 'max', 'count'],
};

export default function () {
  group('User Flow: Add to Cart -> Checkout', function () {
    // Step 1: Simulate user adding a product to the cart
    let productId = 123; // Replace with the actual product ID
    let addToCartRes = http.post(`http://ecommerce.test.k6.io/api/cart/add/${productId}`);
    check(addToCartRes, {
      'Add to Cart successful': (res) => res.status === 200,
    });

    // Step 2: Simulate user viewing the cart
    let viewCartRes = http.get('http://ecommerce.test.k6.io/cart');
    check(viewCartRes, {
      'View Cart successful': (res) => res.status === 200,
    });

    // Step 3: Simulate user initiating checkout
    let checkoutRes = http.post('http://ecommerce.test.k6.io/checkout');
    check(checkoutRes, {
      'Checkout successful': (res) => res.status === 200,
    });

    // Introduce a sleep to simulate user "think time" between actions
    sleep(1);
  });
}

