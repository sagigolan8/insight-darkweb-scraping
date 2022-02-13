const puppeteer = require('puppeteer');


const fixContent = (content,types="") => {
    if(!content) 
    return content
    if(types = "date")
    return content.replace(/\t?\n|\t|/g, "").trim().replace(",","").slice(0,20);
    return content.replace(/\t?\n|\t|/g, "").trim().replace(/\s+/g, " ")
}



async function main(){
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 40, // setting this to true will not run the UI
    args: ["--proxy-server=socks5://127.0.0.1:9050"],
  });

  const page = await browser.newPage();
  await page.goto(
    "http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all"
  );

  
  const content = await page.content();


  const arrData = [];
  const textContent = await page.evaluate(() => {
    return document.querySelector('#list');
 });
 
 console.log(textContent); 
  await browser.close();

  return arrData;
}

main()



/**
 * await page.waitForNavigation(); -- https://stackoverflow.com/questions/46948489/puppeteer-wait-page-load-after-form-submit
 * 
 */