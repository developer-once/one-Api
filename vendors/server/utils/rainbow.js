/**
 * 生成随机返回值的字典
 * @param { String } name
 * @returns { String | Number } 
 */
const { random_num, random_boolean, random_CN } = require("./utils");
const rainbow = (name) => {
  name = name.match(/[a-z]+|[A-Z][a-z]+/g);
  let value = "";
  if (name.length > 1 ) {
    const result = name.filter((item) => rainbow(item.toLowerCase()));
    return result[0] ? rainbow(result[0].toLowerCase()) : ""
  }
  switch (name[0]) {
    // ---- ID ----
    case "location":
    case "description":
    case "area":
    case "address":
    case "city":
    case "name":
      value = random_CN(6);
      break
    case "status":
      value = random_num(1)
      break
    // ---- Table ----
    case "num":
      value = random_boolean() ? 1 : 2
      break
    case "size":
      value = 10
      break
    // ---- Name ----
    // ---- 时间 ----
    case "create":
    case "update":
    case "created":
    case "updated":
      value = (new Date().getTime() - random_num(2) * 100)
      break
    // ---- url ---
    case "url":
      value = 'www.baishan.com'
      break
    case "account":
    case "email":
      value = 'baishan@baishan.com'
      break;
    case "phone":
      value = 188 + random_num(8)
      break
    default:
      return ""
  }
  // console.log(111111111, value, new Date().getTime());
  return value
};

module.exports = {
  rainbow,
}