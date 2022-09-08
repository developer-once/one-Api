/**
 * 生成 OneAPI 平台接口
 * @param { Object } api_data
 * @param { String } cookie
 * @param { String } uid
 * @param { String } url
 * @param { String } project_id
 * @return { boolean }
 */
const axios = require("axios");
const { resolve } = require("json-schema-faker");
const config = require("../config.json");
const { formatUpdateData } = require("./formatData");

const createMocksApi = async(api_data, cookie, uid, project_id) => {
  // ----- 0. 获取项目配置
  const { group_id, catid } = await axios.get(config.host + config.group_id.url + `?id=${project_id}`, {
    headers: {
      cookie: "_yapi_token=" + cookie + "; _yapi_uid=" + uid,
    }
  }).then(res => {
    let data = res.data.data
    if (data) {
      return {
        group_id: data.group_id,
        catid: data.cat[0]._id
      };
    } else {
      return {
        group_id: "",
        catid: ""
      }
    }
  });

  // ----- 1. 调用生成接口
  api_data.forEach(async(item, index) => {
    await axios({
      method: "POST",
      url: config.host + config.add_api.url,
      data: {
        catid: +catid,
        method: item.methods.toUpperCase(),
        path: item.url,
        project_id: +project_id,
        title: item.url
      },
      headers: {
        cookie: "_yapi_token=" + cookie + "; _yapi_uid=" + uid,
        "Content-Type": "application/json;charset=UTF-8",
      }
    }).then(async(res) => {
      const id = res.data.data._id || res.data.data.id;
      // ---- 更新参数 ----
      await axios({
        method: "POST",
        url: config.host + config.up_api.url,
        data: {
          id: id,
          catid: catid,
          method: item.methods.toUpperCase(),
          path: item.url,
          project_id: +project_id,
          // --- 固定参数 ---
          res_body_is_json_schema: true,
          res_body_type: "json",
          status: "done",
          switch_notice: true,
          tag: [],
          title: item.url,
          req_query: [],
          req_params: [],
          markdown: "",
          api_opened: false,
          req_body_type: "raw",
          req_body_is_json_schema: true,
          // --- 入参数 ---
          req_body_form: item.params ? item.params.map((val) => {
            return {
              name: val.name || "参数获取出错",
              required: val.required ? "1" : "0",
              example: val.value || ""
              // type: item.type || "string"
            }
          }) : [],
          // --- 出参数 ---
          res_body: JSON.stringify({
            type: "object",
            title: "title",
            required: [],
            properties: formatUpdateData(item.response),
            // properties: item.response.map((val) => {
            //   return {
            //     [val.key]: {
            //       type: val.type,
            //       mock: val.value,
            //     }
            //   }
            // }),
          }),
        },
        headers: {
          cookie: "_yapi_token=" + cookie + "; _yapi_uid=" + uid,
          "Content-Type": "application/json;charset=UTF-8",
        }
      }).then((response) => {
        console.log(response);
      })
    })
  })
};

module.exports = {
  createMocksApi,
}