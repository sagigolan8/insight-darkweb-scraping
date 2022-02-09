const moment = require("moment")

var a = moment(("08 Feb 2022 04:00:18 z"))
var b = moment(("08 Feb 2022 04:00:17 z"))
console.log(a.isAfter(b));


// console.log(Date(Date.now()));
// console.log(Date(Date.now()));

date = "Feb 08 2022 01:00".split(" ")
const day = date[1]
date[1] = date[0]
date[0] = day 
return date.join("")
console.log(s.join(" "));

let st = "Feb 08 2022 01:00".split(" ").splice(0,1).join(" ")
const month = st[0]
console.log(st);

// let result = s.replace(month,day)
// console.log(result);
// result = result.split(""),
// console.log(result);