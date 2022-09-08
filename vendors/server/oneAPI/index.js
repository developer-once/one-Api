// ----- 0. 获取启动参数 name address is_new
const qs = require("url");
const minimist = require('minimist');

const { getDocsData } = require("./getDocData");
const { formatData } = require("./formatData");
const { createMocksApi } = require("./createMocksApi");

const args = minimist(process.argv);
const { doc_address, is_new, robot_token, cookie, uid , project_id } = args;
const url = qs.parse(doc_address);
const host = url.host;
const protocol = url.protocol;

(async () => {
  // ----- 1. 使用 Node 获取 doc_address
  const docs_data = await getDocsData(protocol + "//" + host);

  // ----- 2. 整理 format doc_API data
  const api_data = await formatData(docs_data);

  // ----- 3. 创建 OneAPI 平台接口
  const is_success = createMocksApi(api_data, cookie, uid,  project_id);

  // ----- 4. 创建 Services 层代码

  // ----- 5. 调用通知机器人
  // reportMessage(isSuccess, robot_token);

})()
