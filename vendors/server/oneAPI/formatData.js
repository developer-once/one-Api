/**
 * 格式化数据, 生成字典，将接口中的入参与出参对应
 * 例如 get("xx?id=1") & post({id: 1})
 * 请求中使用的入参名称一致的话则认为数据有关联性
 * 优先在 get 请求中查找字典内已经生成的数据集
 * @param { Object } data
 * @return { Object }
 */
const { createMocks } = require("./createMocks");

const dictionary = {};

const formatResponse = async(data, key) => {
  if (!key) {return {}}
  let current = key.split("/");
  current = current[current.length - 1];
  let res = [];
  for (let i in data[current].properties) {
    let index_value = data[current].properties[i]
    // ---- 还有引用 类型为 object 或 array ---
    if (index_value.$ref !== undefined) {
      let response = await formatResponse(data, index_value.$ref)
      // console.log(1111, response);
      res.push({
        type: 'object',
        key: i,
        value: response
      })
    }
    if (index_value.type !== 'array') {
      let response = await createMocks(i, index_value, dictionary)
      // console.log(2222, response);
      res.push({
        type: index_value.type,
        key: i,
        value: response
      });
    } else if (index_value.type === 'array') {
      let response = await formatResponse(data, index_value.items.$ref || (index_value.items ? index_value.items.value : ""))
      // console.log(333, response);
      res.push({
        type: index_value.type,
        key: i,
        value: response
      })
    }
  }
  return res;
};

const formatData = async(data) => {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    let path = data[i].paths;
    for (let j in path) {
      let res = data[i].paths[j];
      for (let k in res) {
        // ---- 添加待填充数据的接口 ----
        if (res[k].responses["200"].schema.$ref === "#/definitions/apiGetServiceDescReply") {
          break
        }
        let response = await formatResponse(data[i].definitions, res[k].responses["200"].schema.$ref);
        array.push({
          url: j,
          methods: k,
          headers: {},
          params: res[k].parameters,
          tags: res[k].tags,
          response: response,
        })
      }
    }
  }
  return array;
};

// ----- formatUpdateData -----
const formatUpdateData = (data) => {
  let properties = {};
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    if (item.type !== 'object' || item.type !== 'array') {
      properties[item.key] = {
        type: item.type === 'integer' ? "number" : item.type,
        mock: {
          mock: item.value
        }
      }
    }

    if (item.type === 'object') {
      properties[item.key] = {
        type: item.type,
        properties: {}
      };
      for (let j = 0; j < item.value.length; j++) {
        properties[item.key].properties = {
          ...properties[item.key].properties,
          ...item.value[j],
        }
      }
    }

    if (item.type === 'array') {
      properties[item.key] = {
        type: "object",
        properties: {
        },
      };
      for (let j = 0; j < item.value.length; j++) {
        let index = item.value[j];
        properties[item.key].properties[index.key] = {
          type: index.type === 'integer' ? "number" : index.type,
          mock: {
            mock: index.value
          }
        }
      }
    }

  }

  return properties
}
 
module.exports = {
  formatData,
  formatUpdateData,
}