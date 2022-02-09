const playwright = require("playwright");
const cheerio = require("cheerio");

const fixContent = (content,types="") => {
    if(!content) 
    return content
    if(types = "date")
    return content.replace(/\t?\n|\t|/g, "").trim().replace(",","").slice(0,20);
    return content.replace(/\t?\n|\t|/g, "").trim().replace(/\s+/g, " ")
}



async function main(){
  const browser = await playwright.chromium.launch({
    headless: true, // setting this to true will not run the UI
    args: ["--proxy-server=socks5://127.0.0.1:9050"],
  });

  const page = await browser.newPage();
  await page.goto(
    "http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all"
  );

  
  const content = await page.content();

  const $ = cheerio.load(content);

  const arrData = [];
  $(".col-sm-12").each((i,elem) => {
    const postData = {};
         
    let titleStr = $(elem).find("h4").text();
    let authorStr = $(elem).find(".col-sm-6").text().split("at")[0];
    let contentStr = $(elem).find(".text").children("ol").children("li").text()
    let dateStr = $(elem).find(".col-sm-6").text().split("at")[1];
    if(!titleStr || !authorStr || !contentStr || !dateStr) return
    postData.title = fixContent(titleStr);
    postData.author = fixContent(authorStr);
    postData.content = (contentStr);
    postData.date = fixContent(dateStr,"date")
    arrData.push(postData);
  });

  await browser.close();

  console.log(arrData);
  return arrData;
}

main()
// const func = async () =>{
//   const res = await main();
//   console.log(res);
// }
// func()
