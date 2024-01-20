const puppeteer = require('puppeteer');
const fs = require('fs');


(async () =>{
// Function to capture network requests using Puppeteer
// async function captureNetworkRequests(url) {
  const browser = await puppeteer.launch({headless:false})
//   const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const backendCalls = page.on('request', req => console.log(`>> :` + req.url()))
  await page.goto("https://wordpress.com/setup/site-setup/designSetup?siteSlug=newhellos43.wordpress.com&siteId=227221415")
  fs.writeFileSync('backendCalls.json', JSON.stringify(backendCalls));
  console.log('Captured Backend Service Calls:');
  console.log(backendCalls);
  await browser.close()

})()



