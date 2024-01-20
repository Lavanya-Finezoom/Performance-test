import { browser } from 'k6/experimental/browser';
import { sleep } from 'k6';
import { Trend } from 'k6/metrics';

const searchTrend = new Trend('Search_product');
const cartTrend = new Trend('Add_to_cart');
const viewCartTrend = new Trend('View_cart')
const checkoutTrend = new Trend('Checkout_process')
const placeorderTrend = new Trend('Placing_Order')


export let options = {
  scenarios: {
    ui: {
      executor: 'ramping-vus',
      gracefulStop: '30s',

      stages: [
        { target: 1, duration: '1m' },
        { target: 0, duration: '0m' },

      ],
      gracefulRampDown: '30s',
      exec: 'scenarios',

      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  // thresholds: {
  //   'http_req_duration': ['p(95)<450'],
  //   'http_req_failed': ['rate<0.1'],
  // },
};
export async function scenarios() {
  const page = browser.newPage();

  try{

  // 01. Go to the homepage//

  await page.goto('http://ecommerce.test.k6.io/');
  await page.waitForTimeout(4000);

  // 02. Search product//
  const searchStartTime = new Date();
  await page.locator(`(//input[@class='search-field'])[1]`).fill('album');
  await page.keyboard.press('Enter');
  const searchDuration = new Date() - searchStartTime;
  searchTrend.add(searchDuration);

  //03.Add to cart//
  await page.waitForTimeout(5000)
  const clickStartTime = new Date();
  await page.locator(`//button[text()='Add to cart']`).click();
  const clickDuration = new Date() - clickStartTime;
  cartTrend.add(clickDuration);
  

  //04.View Cart //
  await page.waitForTimeout(120000);
  const ViewStartTime = new Date();
  await page.locator(`(//a[@class='button wc-forward'])[2]`).click();
  const ViewDuration = new Date() - ViewStartTime;
  viewCartTrend.add(ViewDuration);


  //05.Proceed to checkout//
  const CheckStartTime = new Date();
  await page.locator(`//a[@class='checkout-button button alt wc-forward']`).click();
  const checkDuration = new Date() - CheckStartTime;
  checkoutTrend.add(checkDuration);

  //06.Billing details and placing order//
  const orderStartTime = new Date();
  await page.locator(`(//input[@class='input-text '])[1]`).fill('pearl');
  await page.locator(`(//input[@class='input-text '])[2]`).fill('latecia');
  await page.locator(`(//input[@class='input-text '])[3]`).fill('Finezoom');
  await page.waitForTimeout(5000)
  await page.locator(`(//span[@class='select2-selection__rendered'])[1]`).click();
  await page.locator(`(//li[@class='select2-results__option'])[102]`).click();
  await page.locator(`(//input[@class='input-text '])[4]`).fill('192,Yelagiri Hills');
  await page.locator(`(//input[@class='input-text '])[6]`).fill('Vellore');
  await page.locator(`(//span[@class='select2-selection__rendered'])[2]`).click();
  await page.locator(`(//li[@class='select2-results__option'])[24]`).click();
  await page.locator(`(//input[@class='input-text '])[7]`).fill('635853');
  await page.locator(`(//input[@class='input-text '])[8]`).fill('8870745602');
  await page.locator(`(//input[@class='input-text '])[9]`).fill('pearl12@gmail.com');
  await page.waitForTimeout(5000)
  await page.locator(`//button[@class='button alt']`).click();
  const orderDuration = new Date() - orderStartTime;
  placeorderTrend.add(orderDuration);

  sleep(2);
}

  finally {
  page.close();
  }

}
  


