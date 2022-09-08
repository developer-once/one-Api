## OneAPI

「OneAPI」 是基于 Yapi 开发的一款自动化 Mocks 工具，

目的在于解放前端 Mocks 与测试 API 接口的能力

当然也会帮你智能的生成 services 层代码


### 使用方法

```
cd vendors

npm install

npm run dev

// 打包
npm i ykit -g --registry=https://registry.npm.taobao.org

Ykit pack -m

npm run start
```

* 初始化账户密码 "admin@admin.com"，密码："ymfe.org”

* 项目使用 mongodb 作为数据库 请查看根目录下 config.json 文件 了解项目数据库连接配置

* 测试服务器上需要启动 mongod 才能正常 npm run start `sudo mongod --dbpath /usr/local/mongodb/data/db`

* OneAPI 核心生成 mocks 请参阅 /vendors/server/oneApi

* 如果需要查看 API 自动生成的代码可以直接在命令行输入以下启动命令，需要根据项目启动的时候创建而修改 cookie 和 project_id 与 uid

```shell
node server/oneAPI/index.js --doc_address=test --is_new=true --cookie=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjExLCJpYXQiOjE2NDIzODk1NTYsImV4cCI6MTY0Mjk5NDM1Nn0.FS-asp2GqOJNRNjp_0sTjJ_qJh8xyJXQOnBiD6gmzbc --uid=11 --project_id=29
```

* 针对 Yapi server 部分的改动 请在项目中搜索 "---- OneAPI" 根据注释的 step 一步步的来了解项目开发步骤

* 针对 Yapi FE 部分的改动 请直接 /vendors/client/ 下进行修改

更多请参阅 https://github.com/YMFE/yapi

