/**
 * 获取文档接口数据 生成 Array
 * @param { string } doc_address 文档地址
 * @returns { Array<Object> }
 */
const axios = require("axios");

const getDocsData = async(address) => {
  let services = [];
  let doc_array = [];
  let doc_data = {
    paths: {},
    definitions: {},
  };
  // --- 1. 获取 services ---
  const url = address;
  await axios.get(url + "/q/services").then(res => {
    services = res.data.services;
  });
  
  for (let item of services) {
    await axios.get(url + "/q/service/" +  item).then((res) => {
      doc_array.push(res.data);
      doc_data.paths = {
        ...doc_data.paths,
        ...res.data.paths,
      };
      doc_data.definitions = {
        ...doc_data.definitions,
        ...res.data.definitions,
      };
    })
  }
  // --- 2. 获取全部数据组成数组 ---
  return [doc_data];
};

module.exports = {
  getDocsData,
}