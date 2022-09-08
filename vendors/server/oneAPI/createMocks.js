/**
 * 创建 Mocks 数据
 * @param { String } name
 * @param { Object } data
 * @param { Object } dictionary
 * @return { Object } mocks data
 */
const { random_str, random_num, random_boolean } = require("../utils/utils");
const { rainbow } = require("../utils/rainbow");

const createMocks = async(name, data, dictionary) => {
  // let mocks = rainbow(name);
  // // ---- 检查是否命中 彩虹表或包含敏感字段 ----
  // if (mocks) {
  //   dictionary[name] = mocks
  //   return mocks
  // }
  // ---- 如果字典中没有生成对应的字段 ----
  if (!dictionary[name]) {
    switch (data.type) {
      case "string":
        mocks = random_str(6);
        dictionary[name] = mocks;
        break;
      case "integer":
        mocks = random_num(6);
        dictionary[name] = mocks;
        break;
      case "boolean":
        mocks = random_boolean();
        dictionary[name] = mocks;
        break;
      case "object":
        break;
    }
  } else {
    mocks = dictionary[name];
  }
  return mocks;
};

module.exports = {
  createMocks,
}