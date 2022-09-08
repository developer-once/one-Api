const docs_data = [{
  "swagger": "2.0",
  "info": {
    "title": "api/order/v1/order.proto",
    "version": "version not set"
  },
  "tags": [
    {
      "name": "OrderService"
    }
  ],
  "schemes": [
    "HTTP",
    "HTTPS",
    "WS",
    "WSS"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/api/v1/orders": {
      "get": {
        "operationId": "OrderService_GetOrderList",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/v1GetOrderListReply"
            }
          }
        },
        "parameters": [
          {
            "name": "pageNum",
            "description": "页数. 分页页数",
            "in": "query",
            "required": false,
            "type": "number",
            "format": "number"
          },
          {
            "name": "pageSize",
            "description": "条数. 分页条数",
            "in": "query",
            "required": false,
            "type": "number",
            "format": "number"
          },
          {
            "name": "status",
            "description": "订单状态. 订单状态: 1-未支付; 2-已支付; 3-支付失败; 4-取消or作",
            "in": "query",
            "required": false,
            "type": "number",
            "format": "number"
          },
          {
            "name": "orderNos",
            "description": "订单号列表. 按照订单号过滤",
            "in": "query",
            "required": false,
            "type": "array",
            "items": {
              "type": "string"
            },
            "collectionFormat": "multi"
          },
          {
            "name": "isPact",
            "description": "是否关联合同. 关联合同: 默认0-所有; 1-未关联",
            "in": "query",
            "required": false,
            "type": "number",
            "format": "number"
          },
          {
            "name": "isBill",
            "description": "是否关联发票. 关联合同: 默认0-所有; 1-未关联",
            "in": "query",
            "required": false,
            "type": "number",
            "format": "number"
          }
        ],
        "tags": [
          "OrderService"
        ]
      },
      "post": {
        "operationId": "OrderService_CreateOrder",
        "responses": {
          "200": {
            "description": "A successful response.",
            "schema": {
              "$ref": "#/definitions/v1CreateOrderReply"
            }
          }
        },
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/v1CreateOrderRequest"
            }
          }
        ],
        "tags": [
          "OrderService"
        ]
      }
    },
  },
  "definitions": {
    "protobufNullValue": {
      "type": "number",
      "format": "int32",
      "enum": [
        "0"
      ],
      "default": "0"
    },
    "v1BillMonthlyTotalStatReply": {
      "type": "object",
      "properties": {
        "data": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/v1Chart"
          }
        }
      }
    },
    "v1CancelOrderReply": {
      "type": "object"
    },
    "v1Chart": {
      "type": "object",
      "properties": {
        "month": {
          "type": "string"
        },
        "total": {
          "type": "number",
          "format": "int64"
        }
      }
    },
    "v1CreateOrderReply": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "format": "int64"
        }
      }
    },
    "v1CreateOrderRequest": {
      "type": "object",
      "properties": {
        "config": {
          "type": "object"
        },
        "amount": {
          "type": "number",
          "format": "int64"
        },
        "orderType": {
          "type": "string",
          "description": "订单类型,new-新购, renew-续费, upgrade-升级"
        },
        "title": {
          "type": "string",
          "description": "订单标题"
        },
        "commodityId": {
          "type": "number",
          "format": "int64",
          "description": "商品ID"
        },
        "quantity": {
          "type": "number",
          "format": "int64",
          "description": "数量"
        }
      }
    },
    "v1GetOrderListReply": {
      "type": "object",
      "properties": {
        "pageNum": {
          "type": "number",
          "format": "number",
          "description": "分页页数",
          "title": "页数",
          "pattern": "^[0-9]$"
        },
        "pageSize": {
          "type": "number",
          "format": "number",
          "description": "分页条数",
          "title": "条数",
          "pattern": "^[0-9]$"
        },
        "total": {
          "type": "number",
          "format": "number",
          "description": "订单总数",
          "title": "总数",
          "pattern": "^[0-9]$"
        },
        "orders": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/v1Order"
          }
        }
      }
    },
    "v1GetOrderReply": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "format": "int64"
        },
        "title": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "orderNo": {
          "type": "string"
        },
        "orderType": {
          "type": "string"
        },
        "config": {
          "type": "object"
        },
        "startTime": {
          "type": "string"
        },
        "endTime": {
          "type": "string"
        },
        "amount": {
          "type": "number",
          "format": "int64"
        },
        "status": {
          "type": "number",
          "format": "int64"
        },
        "reason": {
          "type": "string"
        },
        "extra": {
          "type": "object"
        },
        "payChannel": {
          "type": "number",
          "format": "int64"
        },
        "price": {
          "type": "number",
          "format": "int64"
        },
        "quantity": {
          "type": "number",
          "format": "int64"
        },
        "payNo": {
          "type": "string"
        },
        "paidAt": {
          "type": "string"
        },
        "createdAt": {
          "type": "string"
        },
        "updatedAt": {
          "type": "string"
        },
        "voidAt": {
          "type": "string",
          "format": "datetime",
          "title": "未支付订单作废日期"
        }
      }
    },
    "v1Order": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "format": "number",
          "description": "订单ID",
          "title": "订单ID",
          "pattern": "^[0-9]$"
        },
        "title": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "orderNo": {
          "type": "string"
        },
        "orderType": {
          "type": "string"
        },
        "config": {
          "type": "object"
        },
        "startTime": {
          "type": "string"
        },
        "endTime": {
          "type": "string"
        },
        "amount": {
          "type": "number",
          "format": "number",
          "description": "订单金额",
          "title": "订单金额"
        },
        "status": {
          "type": "number",
          "format": "number",
          "description": "订单状态: 1-未支付; 2-已支付; 3-支付失败; 4-取消or作废",
          "title": "订单状态",
          "pattern": "^[0-9]$"
        },
        "reason": {
          "type": "string"
        },
        "extra": {
          "type": "object"
        },
        "payChannel": {
          "type": "number",
          "format": "number",
          "description": "订单支付渠道: 1-余额支付; 2-支付宝; 3-微信支付",
          "title": "订单支付渠道",
          "pattern": "^[0-9]$"
        },
        "price": {
          "type": "number",
          "format": "number",
          "description": "购买的商品单价",
          "title": "单价"
        },
        "quantity": {
          "type": "number",
          "format": "number",
          "description": "购买的商品数量",
          "title": "数量"
        },
        "payNo": {
          "type": "string"
        },
        "paidAt": {
          "type": "string",
          "format": "datetime",
          "description": "订单支付时间",
          "title": "订单支付时间"
        },
        "createdAt": {
          "type": "string"
        },
        "updatedAt": {
          "type": "string"
        },
        "voidAt": {
          "type": "string",
          "format": "datetime",
          "title": "未支付订单作废日期"
        }
      }
    },
    "v1PayOrderReply": {
      "type": "object",
      "properties": {
        "payUrl": {
          "type": "string"
        },
        "qrcodeBase64": {
          "type": "string"
        }
      }
    }
  }
}



]

const all = [
  {
    "swagger": "2.0",
    "info": {
      "title": "api/pay/v1/pay.proto",
      "version": "version not set"
    },
    "tags": [
      {
        "name": "Payer"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/api/v1/pay/close": {
        "post": {
          "operationId": "Payer_TradeClose",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1TradeCloseReply"
              }
            }
          },
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/v1TradeCloseRequest"
              }
            }
          ],
          "tags": [
            "Payer"
          ]
        }
      },
      "/api/v1/pay/pagepay": {
        "post": {
          "operationId": "Payer_PagePay",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1PayReply"
              }
            }
          },
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/v1PayRequest"
              }
            }
          ],
          "tags": [
            "Payer"
          ]
        }
      }
    },
    "definitions": {
      "protobufNullValue": {
        "type": "integer",
        "format": "int32",
        "enum": [
          "0"
        ],
        "default": "0"
      },
      "v1PayReply": {
        "type": "object",
        "properties": {
          "payUrl": {
            "type": "string"
          },
          "qrcodeBase64": {
            "type": "string"
          }
        }
      },
      "v1PayRequest": {
        "type": "object",
        "properties": {
          "payType": {
            "type": "string"
          },
          "payload": {
            "$ref": "#/definitions/v1Payload"
          }
        }
      },
      "v1Payload": {
        "type": "object",
        "properties": {
          "tradeType": {
            "type": "string"
          },
          "subject": {
            "type": "string"
          },
          "outTradeNo": {
            "type": "string"
          },
          "nonceStr": {
            "type": "string"
          },
          "totalFee": {
            "type": "integer",
            "format": "int64"
          },
          "spbillCreateIp": {
            "type": "string"
          },
          "outTradeType": {
            "type": "integer",
            "format": "int64"
          },
          "iamId": {
            "type": "string"
          },
          "attach": {
            "type": "object"
          }
        }
      },
      "v1TradeCloseReply": {
        "type": "object",
        "properties": {
          "isOk": {
            "type": "boolean"
          }
        }
      },
      "v1TradeCloseRequest": {
        "type": "object",
        "properties": {
          "payType": {
            "type": "string"
          },
          "payload": {
            "type": "object"
          }
        }
      }
    }
  },
  {
    "swagger": "2.0",
    "info": {
      "title": "grpc/health/v1/health.proto",
      "version": "version not set"
    },
    "tags": [
      {
        "name": "Health"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {},
    "definitions": {
      "HealthCheckResponseServingStatus": {
        "type": "integer",
        "format": "int32",
        "enum": [
          "0",
          "1",
          "2",
          "3"
        ],
        "default": "0"
      },
      "v1HealthCheckResponse": {
        "type": "object",
        "properties": {
          "status": {
            "$ref": "#/definitions/HealthCheckResponseServingStatus"
          }
        }
      }
    }
  },
  {
    "swagger": "2.0",
    "info": {
      "title": "api/bill/v1/info.proto",
      "version": "version not set"
    },
    "tags": [
      {
        "name": "Info"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/api/v1/bill/info": {
        "get": {
          "operationId": "Info_Get",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1InfoMessage"
              }
            }
          },
          "tags": [
            "Info"
          ]
        },
        "put": {
          "operationId": "Info_Save",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1NullReply"
              }
            }
          },
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/v1InfoMessage"
              }
            }
          ],
          "tags": [
            "Info"
          ]
        }
      }
    },
    "definitions": {
      "v1InfoMessage": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          },
          "belongType": {
            "type": "string"
          },
          "belong": {
            "type": "string"
          },
          "creditNo": {
            "type": "string"
          },
          "bankName": {
            "type": "string"
          },
          "bankAccount": {
            "type": "string"
          },
          "companyAddress": {
            "type": "string"
          },
          "companyPhone": {
            "type": "string"
          }
        }
      },
      "v1NullReply": {
        "type": "object"
      }
    }
  },
  {
    "swagger": "2.0",
    "info": {
      "title": "api/order/v1/order.proto",
      "version": "version not set"
    },
    "tags": [
      {
        "name": "OrderService"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/api/v1/orders": {
        "get": {
          "operationId": "OrderService_GetOrderList",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1GetOrderListReply"
              }
            }
          },
          "parameters": [
            {
              "name": "pageNum",
              "description": "页数. 分页页数",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "integer"
            },
            {
              "name": "pageSize",
              "description": "条数. 分页条数",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "integer"
            },
            {
              "name": "status",
              "description": "订单状态. 订单状态: 1-未支付; 2-已支付; 3-支付失败; 4-取消or作",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "integer"
            },
            {
              "name": "orderNos",
              "description": "订单号列表. 按照订单号过滤",
              "in": "query",
              "required": false,
              "type": "array",
              "items": {
                "type": "string"
              },
              "collectionFormat": "multi"
            },
            {
              "name": "isPact",
              "description": "是否关联合同. 关联合同: 默认0-所有; 1-未关联",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "integer"
            },
            {
              "name": "isBill",
              "description": "是否关联发票. 关联合同: 默认0-所有; 1-未关联",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "integer"
            }
          ],
          "tags": [
            "OrderService"
          ]
        },
        "post": {
          "operationId": "OrderService_CreateOrder",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1CreateOrderReply"
              }
            }
          },
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/v1CreateOrderRequest"
              }
            }
          ],
          "tags": [
            "OrderService"
          ]
        }
      },
      "/api/v1/orders/stat/bill-monthly-total": {
        "get": {
          "operationId": "OrderService_BillMonthlyTotalStat",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1BillMonthlyTotalStatReply"
              }
            }
          },
          "parameters": [
            {
              "name": "startMonth",
              "in": "query",
              "required": false,
              "type": "string"
            },
            {
              "name": "endMonth",
              "in": "query",
              "required": false,
              "type": "string"
            }
          ],
          "tags": [
            "OrderService"
          ]
        }
      },
      "/api/v1/orders/{id}": {
        "get": {
          "operationId": "OrderService_GetOrder",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1GetOrderReply"
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "description": "订单ID",
              "in": "path",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "OrderService"
          ]
        }
      },
      "/api/v1/orders/{id}/cancel": {
        "get": {
          "operationId": "OrderService_CancelOrder",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1CancelOrderReply"
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "description": "订单ID",
              "in": "path",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "OrderService"
          ]
        }
      },
      "/api/v1/orders/{id}/pay": {
        "post": {
          "operationId": "OrderService_PayOrder",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1PayOrderReply"
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "description": "订单ID",
              "in": "path",
              "required": true,
              "type": "integer",
              "format": "int64"
            },
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "type": "object",
                "properties": {
                  "payChannel": {
                    "type": "integer",
                    "format": "integer",
                    "description": "订单支付渠道: 1-余额支付; 2-支付宝; 3-微信支付",
                    "title": "订单支付渠道"
                  }
                }
              }
            }
          ],
          "tags": [
            "OrderService"
          ]
        }
      }
    },
    "definitions": {
      "protobufNullValue": {
        "type": "integer",
        "format": "int32",
        "enum": [
          "0"
        ],
        "default": "0"
      },
      "v1BillMonthlyTotalStatReply": {
        "type": "object",
        "properties": {
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/v1Chart"
            }
          }
        }
      },
      "v1CancelOrderReply": {
        "type": "object"
      },
      "v1Chart": {
        "type": "object",
        "properties": {
          "month": {
            "type": "string"
          },
          "total": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "v1CreateOrderReply": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "v1CreateOrderRequest": {
        "type": "object",
        "properties": {
          "config": {
            "type": "object"
          },
          "amount": {
            "type": "integer",
            "format": "int64"
          },
          "orderType": {
            "type": "string",
            "description": "订单类型,new-新购, renew-续费, upgrade-升级"
          },
          "title": {
            "type": "string",
            "description": "订单标题"
          },
          "commodityId": {
            "type": "integer",
            "format": "int64",
            "description": "商品ID"
          },
          "quantity": {
            "type": "integer",
            "format": "int64",
            "description": "数量"
          }
        }
      },
      "v1GetOrderListReply": {
        "type": "object",
        "properties": {
          "pageNum": {
            "type": "integer",
            "format": "integer",
            "description": "分页页数",
            "title": "页数",
            "pattern": "^[0-9]$"
          },
          "pageSize": {
            "type": "integer",
            "format": "integer",
            "description": "分页条数",
            "title": "条数",
            "pattern": "^[0-9]$"
          },
          "total": {
            "type": "integer",
            "format": "integer",
            "description": "订单总数",
            "title": "总数",
            "pattern": "^[0-9]$"
          },
          "orders": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/v1Order"
            }
          }
        }
      },
      "v1GetOrderReply": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "orderNo": {
            "type": "string"
          },
          "orderType": {
            "type": "string"
          },
          "config": {
            "type": "object"
          },
          "startTime": {
            "type": "string"
          },
          "endTime": {
            "type": "string"
          },
          "amount": {
            "type": "integer",
            "format": "int64"
          },
          "status": {
            "type": "integer",
            "format": "int64"
          },
          "reason": {
            "type": "string"
          },
          "extra": {
            "type": "object"
          },
          "payChannel": {
            "type": "integer",
            "format": "int64"
          },
          "price": {
            "type": "integer",
            "format": "int64"
          },
          "quantity": {
            "type": "integer",
            "format": "int64"
          },
          "payNo": {
            "type": "string"
          },
          "paidAt": {
            "type": "string"
          },
          "createdAt": {
            "type": "string"
          },
          "updatedAt": {
            "type": "string"
          },
          "voidAt": {
            "type": "string",
            "format": "datetime",
            "title": "未支付订单作废日期"
          }
        }
      },
      "v1Order": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "integer",
            "description": "订单ID",
            "title": "订单ID",
            "pattern": "^[0-9]$"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "orderNo": {
            "type": "string"
          },
          "orderType": {
            "type": "string"
          },
          "config": {
            "type": "object"
          },
          "startTime": {
            "type": "string"
          },
          "endTime": {
            "type": "string"
          },
          "amount": {
            "type": "integer",
            "format": "number",
            "description": "订单金额",
            "title": "订单金额"
          },
          "status": {
            "type": "integer",
            "format": "integer",
            "description": "订单状态: 1-未支付; 2-已支付; 3-支付失败; 4-取消or作废",
            "title": "订单状态",
            "pattern": "^[0-9]$"
          },
          "reason": {
            "type": "string"
          },
          "extra": {
            "type": "object"
          },
          "payChannel": {
            "type": "integer",
            "format": "integer",
            "description": "订单支付渠道: 1-余额支付; 2-支付宝; 3-微信支付",
            "title": "订单支付渠道",
            "pattern": "^[0-9]$"
          },
          "price": {
            "type": "integer",
            "format": "number",
            "description": "购买的商品单价",
            "title": "单价"
          },
          "quantity": {
            "type": "integer",
            "format": "number",
            "description": "购买的商品数量",
            "title": "数量"
          },
          "payNo": {
            "type": "string"
          },
          "paidAt": {
            "type": "string",
            "format": "datetime",
            "description": "订单支付时间",
            "title": "订单支付时间"
          },
          "createdAt": {
            "type": "string"
          },
          "updatedAt": {
            "type": "string"
          },
          "voidAt": {
            "type": "string",
            "format": "datetime",
            "title": "未支付订单作废日期"
          }
        }
      },
      "v1PayOrderReply": {
        "type": "object",
        "properties": {
          "payUrl": {
            "type": "string"
          },
          "qrcodeBase64": {
            "type": "string"
          }
        }
      }
    }
  },
  {
    "swagger": "2.0",
    "info": {
      "title": "metadata.proto",
      "version": "version not set"
    },
    "tags": [
      {
        "name": "Metadata"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/services": {
        "get": {
          "operationId": "Metadata_ListServices",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/apiListServicesReply"
              }
            }
          },
          "tags": [
            "Metadata"
          ]
        }
      },
      "/services/{name}": {
        "get": {
          "operationId": "Metadata_GetServiceDesc",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/apiGetServiceDescReply"
              }
            }
          },
          "parameters": [
            {
              "name": "name",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
            "Metadata"
          ]
        }
      }
    },
    "definitions": {
      "DescriptorProtoExtensionRange": {
        "type": "object",
        "properties": {
          "start": {
            "type": "integer",
            "format": "int32"
          },
          "end": {
            "type": "integer",
            "format": "int32"
          },
          "options": {
            "$ref": "#/definitions/protobufExtensionRangeOptions"
          }
        }
      },
      "DescriptorProtoReservedRange": {
        "type": "object",
        "properties": {
          "start": {
            "type": "integer",
            "format": "int32"
          },
          "end": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "EnumDescriptorProtoEnumReservedRange": {
        "type": "object",
        "properties": {
          "start": {
            "type": "integer",
            "format": "int32"
          },
          "end": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "FieldDescriptorProtoLabel": {
        "type": "integer",
        "format": "int32",
        "enum": [
          "1",
          "2",
          "3"
        ],
        "default": "0"
      },
      "FieldDescriptorProtoType": {
        "type": "integer",
        "format": "int32",
        "enum": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18"
        ],
        "default": "0"
      },
      "FieldOptionsCType": {
        "type": "integer",
        "format": "int32",
        "enum": [
          "0",
          "1",
          "2"
        ],
        "default": "0"
      },
      "FieldOptionsJSType": {
        "type": "integer",
        "format": "int32",
        "enum": [
          "0",
          "1",
          "2"
        ],
        "default": "0"
      },
      "FileOptionsOptimizeMode": {
        "type": "integer",
        "format": "int32",
        "enum": [
          "1",
          "2",
          "3"
        ],
        "default": "0"
      },
      "MethodOptionsIdempotencyLevel": {
        "type": "integer",
        "format": "int32",
        "enum": [
          "0",
          "1",
          "2"
        ],
        "default": "0"
      },
      "SourceCodeInfoLocation": {
        "type": "object",
        "properties": {
          "path": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            }
          },
          "span": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            }
          },
          "leadingComments": {
            "type": "string"
          },
          "trailingComments": {
            "type": "string"
          },
          "leadingDetachedComments": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "UninterpretedOptionNamePart": {
        "type": "object",
        "properties": {
          "namePart": {
            "type": "string"
          },
          "isExtension": {
            "type": "boolean"
          }
        }
      },
      "apiGetServiceDescReply": {
        "type": "object",
        "properties": {
          "fileDescSet": {
            "$ref": "#/definitions/protobufFileDescriptorSet"
          }
        }
      },
      "apiListServicesReply": {
        "type": "object",
        "properties": {
          "services": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "methods": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "protobufDescriptorProto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "field": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufFieldDescriptorProto"
            }
          },
          "extension": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufFieldDescriptorProto"
            }
          },
          "nestedType": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufDescriptorProto"
            }
          },
          "enumType": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufEnumDescriptorProto"
            }
          },
          "extensionRange": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/DescriptorProtoExtensionRange"
            }
          },
          "oneofDecl": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufOneofDescriptorProto"
            }
          },
          "options": {
            "$ref": "#/definitions/protobufMessageOptions"
          },
          "reservedRange": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/DescriptorProtoReservedRange"
            }
          },
          "reservedName": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "protobufEnumDescriptorProto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufEnumValueDescriptorProto"
            }
          },
          "options": {
            "$ref": "#/definitions/protobufEnumOptions"
          },
          "reservedRange": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/EnumDescriptorProtoEnumReservedRange"
            }
          },
          "reservedName": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "protobufEnumOptions": {
        "type": "object",
        "properties": {
          "allowAlias": {
            "type": "boolean"
          },
          "deprecated": {
            "type": "boolean"
          },
          "uninterpretedOption": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufUninterpretedOption"
            }
          }
        }
      },
      "protobufEnumValueDescriptorProto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "number": {
            "type": "integer",
            "format": "int32"
          },
          "options": {
            "$ref": "#/definitions/protobufEnumValueOptions"
          }
        }
      },
      "protobufEnumValueOptions": {
        "type": "object",
        "properties": {
          "deprecated": {
            "type": "boolean"
          },
          "uninterpretedOption": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufUninterpretedOption"
            }
          }
        }
      },
      "protobufExtensionRangeOptions": {
        "type": "object",
        "properties": {
          "uninterpretedOption": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufUninterpretedOption"
            }
          }
        }
      },
      "protobufFieldDescriptorProto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "number": {
            "type": "integer",
            "format": "int32"
          },
          "label": {
            "$ref": "#/definitions/FieldDescriptorProtoLabel"
          },
          "type": {
            "$ref": "#/definitions/FieldDescriptorProtoType"
          },
          "typeName": {
            "type": "string"
          },
          "extendee": {
            "type": "string"
          },
          "defaultValue": {
            "type": "string"
          },
          "oneofIndex": {
            "type": "integer",
            "format": "int32"
          },
          "jsonName": {
            "type": "string"
          },
          "options": {
            "$ref": "#/definitions/protobufFieldOptions"
          },
          "proto3Optional": {
            "type": "boolean"
          }
        }
      },
      "protobufFieldOptions": {
        "type": "object",
        "properties": {
          "ctype": {
            "$ref": "#/definitions/FieldOptionsCType"
          },
          "packed": {
            "type": "boolean"
          },
          "jstype": {
            "$ref": "#/definitions/FieldOptionsJSType"
          },
          "lazy": {
            "type": "boolean"
          },
          "deprecated": {
            "type": "boolean"
          },
          "weak": {
            "type": "boolean"
          },
          "uninterpretedOption": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufUninterpretedOption"
            }
          }
        }
      },
      "protobufFileDescriptorProto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "package": {
            "type": "string"
          },
          "dependency": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "publicDependency": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            }
          },
          "weakDependency": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            }
          },
          "messageType": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufDescriptorProto"
            }
          },
          "enumType": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufEnumDescriptorProto"
            }
          },
          "service": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufServiceDescriptorProto"
            }
          },
          "extension": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufFieldDescriptorProto"
            }
          },
          "options": {
            "$ref": "#/definitions/protobufFileOptions"
          },
          "sourceCodeInfo": {
            "$ref": "#/definitions/protobufSourceCodeInfo"
          },
          "syntax": {
            "type": "string"
          }
        }
      },
      "protobufFileDescriptorSet": {
        "type": "object",
        "properties": {
          "file": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufFileDescriptorProto"
            }
          }
        }
      },
      "protobufFileOptions": {
        "type": "object",
        "properties": {
          "javaPackage": {
            "type": "string"
          },
          "javaOuterClassname": {
            "type": "string"
          },
          "javaMultipleFiles": {
            "type": "boolean"
          },
          "javaGenerateEqualsAndHash": {
            "type": "boolean"
          },
          "javaStringCheckUtf8": {
            "type": "boolean"
          },
          "optimizeFor": {
            "$ref": "#/definitions/FileOptionsOptimizeMode"
          },
          "goPackage": {
            "type": "string"
          },
          "ccGenericServices": {
            "type": "boolean"
          },
          "javaGenericServices": {
            "type": "boolean"
          },
          "pyGenericServices": {
            "type": "boolean"
          },
          "phpGenericServices": {
            "type": "boolean"
          },
          "deprecated": {
            "type": "boolean"
          },
          "ccEnableArenas": {
            "type": "boolean"
          },
          "objcClassPrefix": {
            "type": "string"
          },
          "csharpNamespace": {
            "type": "string"
          },
          "swiftPrefix": {
            "type": "string"
          },
          "phpClassPrefix": {
            "type": "string"
          },
          "phpNamespace": {
            "type": "string"
          },
          "phpMetadataNamespace": {
            "type": "string"
          },
          "rubyPackage": {
            "type": "string"
          },
          "uninterpretedOption": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufUninterpretedOption"
            }
          }
        }
      },
      "protobufMessageOptions": {
        "type": "object",
        "properties": {
          "messageSetWireFormat": {
            "type": "boolean"
          },
          "noStandardDescriptorAccessor": {
            "type": "boolean"
          },
          "deprecated": {
            "type": "boolean"
          },
          "mapEntry": {
            "type": "boolean"
          },
          "uninterpretedOption": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufUninterpretedOption"
            }
          }
        }
      },
      "protobufMethodDescriptorProto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "inputType": {
            "type": "string"
          },
          "outputType": {
            "type": "string"
          },
          "options": {
            "$ref": "#/definitions/protobufMethodOptions"
          },
          "clientStreaming": {
            "type": "boolean"
          },
          "serverStreaming": {
            "type": "boolean"
          }
        }
      },
      "protobufMethodOptions": {
        "type": "object",
        "properties": {
          "deprecated": {
            "type": "boolean"
          },
          "idempotencyLevel": {
            "$ref": "#/definitions/MethodOptionsIdempotencyLevel"
          },
          "uninterpretedOption": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufUninterpretedOption"
            }
          }
        }
      },
      "protobufOneofDescriptorProto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "options": {
            "$ref": "#/definitions/protobufOneofOptions"
          }
        }
      },
      "protobufOneofOptions": {
        "type": "object",
        "properties": {
          "uninterpretedOption": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufUninterpretedOption"
            }
          }
        }
      },
      "protobufServiceDescriptorProto": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "method": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufMethodDescriptorProto"
            }
          },
          "options": {
            "$ref": "#/definitions/protobufServiceOptions"
          }
        }
      },
      "protobufServiceOptions": {
        "type": "object",
        "properties": {
          "deprecated": {
            "type": "boolean"
          },
          "uninterpretedOption": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/protobufUninterpretedOption"
            }
          }
        }
      },
      "protobufSourceCodeInfo": {
        "type": "object",
        "properties": {
          "location": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/SourceCodeInfoLocation"
            }
          }
        }
      },
      "protobufUninterpretedOption": {
        "type": "object",
        "properties": {
          "name": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/UninterpretedOptionNamePart"
            }
          },
          "identifierValue": {
            "type": "string"
          },
          "positiveIntValue": {
            "type": "string",
            "format": "uint64"
          },
          "negativeIntValue": {
            "type": "string",
            "format": "int64"
          },
          "doubleValue": {
            "type": "number",
            "format": "double"
          },
          "stringValue": {
            "type": "string",
            "format": "byte"
          },
          "aggregateValue": {
            "type": "string"
          }
        }
      }
    }
  },
  {
    "swagger": "2.0",
    "info": {
      "title": "api/user/v1/user.proto",
      "version": "version not set"
    },
    "tags": [
      {
        "name": "UserService"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/api/v1/user/login": {
        "get": {
          "operationId": "UserService_Login",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1RedirectReply"
              }
            }
          },
          "tags": [
            "UserService"
          ]
        }
      },
      "/api/v1/user/logout": {
        "get": {
          "operationId": "UserService_Logout",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1RedirectReply"
              }
            }
          },
          "tags": [
            "UserService"
          ]
        }
      },
      "/api/v1/user/redirect": {
        "get": {
          "operationId": "UserService_Redirect",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1RedirectReply"
              }
            }
          },
          "tags": [
            "UserService"
          ]
        }
      },
      "/api/v1/user/validate": {
        "get": {
          "operationId": "UserService_Validate",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1ValidateReplay"
              }
            }
          },
          "tags": [
            "UserService"
          ]
        }
      },
      "/api/v1/user/view": {
        "get": {
          "operationId": "UserService_LoginCallback",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1ValidateReplay"
              }
            }
          },
          "parameters": [
            {
              "name": "code",
              "in": "query",
              "required": false,
              "type": "string"
            },
            {
              "name": "state",
              "in": "query",
              "required": false,
              "type": "string"
            }
          ],
          "tags": [
            "UserService"
          ]
        }
      }
    },
    "definitions": {
      "v1RedirectReply": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string"
          },
          "statusCode": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "v1UserInfo": {
        "type": "object",
        "properties": {
          "preferredUsername": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "sub": {
            "type": "string"
          }
        }
      },
      "v1ValidateData": {
        "type": "object",
        "properties": {
          "token": {
            "type": "string"
          },
          "isLogin": {
            "type": "string",
            "format": "int64"
          },
          "url": {
            "type": "string"
          },
          "loginUrl": {
            "type": "string"
          },
          "user": {
            "$ref": "#/definitions/v1UserInfo"
          }
        }
      },
      "v1ValidateReplay": {
        "type": "object",
        "properties": {
          "status": {
            "$ref": "#/definitions/v1ValidateStatus"
          },
          "data": {
            "$ref": "#/definitions/v1ValidateData"
          }
        }
      },
      "v1ValidateStatus": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string",
            "format": "int64"
          },
          "message": {
            "type": "string"
          },
          "createAt": {
            "type": "string"
          }
        }
      }
    }
  },
  {
    "swagger": "2.0",
    "info": {
      "title": "reflection/grpc_reflection_v1alpha/reflection.proto",
      "version": "version not set"
    },
    "tags": [
      {
        "name": "ServerReflection"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {},
    "definitions": {
      "v1alphaErrorResponse": {
        "type": "object",
        "properties": {
          "errorCode": {
            "type": "integer",
            "format": "int32"
          },
          "errorMessage": {
            "type": "string"
          }
        }
      },
      "v1alphaExtensionNumberResponse": {
        "type": "object",
        "properties": {
          "baseTypeName": {
            "type": "string"
          },
          "extensionNumber": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            }
          }
        }
      },
      "v1alphaExtensionRequest": {
        "type": "object",
        "properties": {
          "containingType": {
            "type": "string"
          },
          "extensionNumber": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "v1alphaFileDescriptorResponse": {
        "type": "object",
        "properties": {
          "fileDescriptorProto": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "byte"
            }
          }
        }
      },
      "v1alphaListServiceResponse": {
        "type": "object",
        "properties": {
          "service": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/v1alphaServiceResponse"
            }
          }
        }
      },
      "v1alphaServerReflectionRequest": {
        "type": "object",
        "properties": {
          "host": {
            "type": "string"
          },
          "fileByFilename": {
            "type": "string"
          },
          "fileContainingSymbol": {
            "type": "string"
          },
          "fileContainingExtension": {
            "$ref": "#/definitions/v1alphaExtensionRequest"
          },
          "allExtensionNumbersOfType": {
            "type": "string"
          },
          "listServices": {
            "type": "string"
          }
        }
      },
      "v1alphaServerReflectionResponse": {
        "type": "object",
        "properties": {
          "validHost": {
            "type": "string"
          },
          "originalRequest": {
            "$ref": "#/definitions/v1alphaServerReflectionRequest"
          },
          "fileDescriptorResponse": {
            "$ref": "#/definitions/v1alphaFileDescriptorResponse"
          },
          "allExtensionNumbersResponse": {
            "$ref": "#/definitions/v1alphaExtensionNumberResponse"
          },
          "listServicesResponse": {
            "$ref": "#/definitions/v1alphaListServiceResponse"
          },
          "errorResponse": {
            "$ref": "#/definitions/v1alphaErrorResponse"
          }
        }
      },
      "v1alphaServiceResponse": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          }
        }
      }
    }
  },
  {
    "swagger": "2.0",
    "info": {
      "title": "api/account/v1/account.proto",
      "version": "version not set"
    },
    "tags": [
      {
        "name": "Account"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/api/v1/account": {
        "get": {
          "operationId": "Account_Get",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1AccountReply"
              }
            }
          },
          "tags": [
            "Account"
          ]
        }
      },
      "/api/v1/account/check-income": {
        "get": {
          "operationId": "Account_CheckIncome",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1CheckIncomeReply"
              }
            }
          },
          "parameters": [
            {
              "name": "rechargeNo",
              "description": "充值订单号.",
              "in": "query",
              "required": false,
              "type": "string"
            }
          ],
          "tags": [
            "Account"
          ]
        }
      },
      "/api/v1/account/funds": {
        "get": {
          "operationId": "Account_Funds",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1FundsReply"
              }
            }
          },
          "parameters": [
            {
              "name": "fundsNo",
              "in": "query",
              "required": false,
              "type": "string"
            },
            {
              "name": "startTradeDate",
              "in": "query",
              "required": false,
              "type": "string"
            },
            {
              "name": "endTradeDate",
              "in": "query",
              "required": false,
              "type": "string"
            },
            {
              "name": "orderNo",
              "in": "query",
              "required": false,
              "type": "string"
            },
            {
              "name": "tradeType",
              "in": "query",
              "required": false,
              "type": "string"
            },
            {
              "name": "tradeNo",
              "in": "query",
              "required": false,
              "type": "string"
            },
            {
              "name": "type",
              "in": "query",
              "required": false,
              "type": "string"
            },
            {
              "name": "pageNum",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "int64"
            },
            {
              "name": "pageSize",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "Account"
          ]
        }
      },
      "/api/v1/account/income": {
        "post": {
          "operationId": "Account_Income",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1IncomeReply"
              }
            }
          },
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/v1IncomeRequest"
              }
            }
          ],
          "tags": [
            "Account"
          ]
        }
      },
      "/api/v1/account/income/qrcode": {
        "get": {
          "operationId": "Account_QrCode",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1QrCodeReply"
              }
            }
          },
          "parameters": [
            {
              "name": "data",
              "description": "data. 第三方返回的data数据",
              "in": "query",
              "required": false,
              "type": "string"
            }
          ],
          "tags": [
            "Account"
          ]
        }
      },
      "/api/v1/account/pay": {
        "post": {
          "operationId": "Account_Pay",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1PayReply"
              }
            }
          },
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/v1PayRequest"
              }
            }
          ],
          "tags": [
            "Account"
          ]
        }
      }
    },
    "definitions": {
      "v1AccountReply": {
        "type": "object",
        "properties": {
          "account": {
            "type": "string"
          },
          "balance": {
            "type": "integer",
            "format": "int64"
          },
          "invoiceAmount": {
            "type": "integer",
            "format": "int64"
          },
          "efficientContractCount": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "v1CheckIncomeReply": {
        "type": "object",
        "properties": {
          "amount": {
            "type": "integer",
            "format": "int64"
          },
          "rechargeNo": {
            "type": "string",
            "title": "充值订单号"
          },
          "status": {
            "type": "integer",
            "format": "int32",
            "description": "支付状态: 1-未支付; 2-已支付; 3-已过期",
            "title": "支付状态"
          },
          "payChannel": {
            "type": "integer",
            "format": "int32",
            "description": "支付方式: 1-余额支付; 2-微信; 3-支付宝; 4-银联",
            "title": "交易渠道"
          },
          "payNo": {
            "type": "string",
            "title": "交易渠道流水号"
          },
          "paidAt": {
            "type": "string",
            "title": "支付时间"
          },
          "createdAt": {
            "type": "string",
            "title": "创建时间"
          }
        }
      },
      "v1FundsReply": {
        "type": "object",
        "properties": {
          "pageNum": {
            "type": "integer",
            "format": "int64"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64"
          },
          "total": {
            "type": "integer",
            "format": "int64"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/v1InOut"
            }
          }
        }
      },
      "v1InOut": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "tradeDate": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "tradeType": {
            "type": "string"
          },
          "tradeChannel": {
            "type": "integer",
            "format": "int32"
          },
          "tradeNo": {
            "type": "string"
          },
          "orderNo": {
            "type": "string"
          },
          "remark": {
            "type": "string"
          },
          "amount": {
            "type": "integer",
            "format": "int64"
          },
          "balance": {
            "type": "integer",
            "format": "int64"
          },
          "userName": {
            "type": "string"
          },
          "fundsNo": {
            "type": "string"
          }
        }
      },
      "v1IncomeReply": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string",
            "description": "支付地址，只支持支付宝，银联",
            "title": "支付地址"
          },
          "qrcodeBase64": {
            "type": "string",
            "description": "支付二维码图片，只支持微信",
            "title": "支付二维码"
          },
          "payChannel": {
            "type": "integer",
            "format": "int32",
            "description": "支付方式: 1-余额支付; 2-微信; 3-支付宝; 4-银联",
            "title": "充值渠道"
          },
          "rechargeNo": {
            "type": "string",
            "title": "充值订单号"
          }
        }
      },
      "v1IncomeRequest": {
        "type": "object",
        "properties": {
          "amount": {
            "type": "integer",
            "format": "int64",
            "description": "整数，单位分",
            "title": "充值金额"
          },
          "payChannel": {
            "type": "integer",
            "format": "int32",
            "description": "支付方式: 1-余额支付; 2-微信; 3-支付宝; 4-银联",
            "title": "充值渠道"
          }
        }
      },
      "v1PayReply": {
        "type": "object",
        "properties": {
          "payNo": {
            "type": "string"
          }
        }
      },
      "v1PayRequest": {
        "type": "object",
        "properties": {
          "orderNo": {
            "type": "string"
          },
          "amount": {
            "type": "integer",
            "format": "int64"
          },
          "remark": {
            "type": "string"
          }
        }
      },
      "v1QrCodeReply": {
        "type": "object",
        "properties": {
          "qrImg": {
            "type": "string",
            "description": "图片base64值",
            "title": "二维码数据"
          }
        }
      }
    }
  },
  {
    "swagger": "2.0",
    "info": {
      "title": "api/account/v1/email.proto",
      "version": "version not set"
    },
    "tags": [
      {
        "name": "Email"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/api/v1/account/email": {
        "get": {
          "operationId": "Email_GetList",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1EmailListReply"
              }
            }
          },
          "parameters": [
            {
              "name": "pageNum",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "int64"
            },
            {
              "name": "pageSize",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "Email"
          ]
        },
        "post": {
          "operationId": "Email_Add",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1NullReply"
              }
            }
          },
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/v1CreateEmailRequest"
              }
            }
          ],
          "tags": [
            "Email"
          ]
        }
      },
      "/api/v1/account/email/{id}": {
        "get": {
          "operationId": "Email_Get",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1EmailReply"
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "Email"
          ]
        },
        "delete": {
          "operationId": "Email_Delete",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1NullReply"
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "Email"
          ]
        },
        "put": {
          "operationId": "Email_Update",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1NullReply"
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "integer",
              "format": "int64"
            },
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "type": "object",
                "properties": {
                  "email": {
                    "type": "string"
                  },
                  "isDefault": {
                    "type": "integer",
                    "format": "int64",
                    "description": "0-否，1-是",
                    "title": "是否默认邮箱"
                  }
                }
              }
            }
          ],
          "tags": [
            "Email"
          ]
        }
      }
    },
    "definitions": {
      "v1CreateEmailRequest": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string"
          },
          "isDefault": {
            "type": "integer",
            "format": "int64",
            "description": "0-否，1-是",
            "title": "是否默认邮箱"
          }
        }
      },
      "v1EmailListReply": {
        "type": "object",
        "properties": {
          "pageNum": {
            "type": "integer",
            "format": "int64"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64"
          },
          "total": {
            "type": "string",
            "format": "uint64"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/v1EmailReply"
            }
          }
        }
      },
      "v1EmailReply": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "email": {
            "type": "string"
          },
          "isDefault": {
            "type": "integer",
            "format": "int64",
            "description": "0-否，1-是",
            "title": "是否默认邮箱"
          },
          "createAt": {
            "type": "string"
          }
        }
      },
      "v1NullReply": {
        "type": "object"
      }
    }
  },
  {
    "swagger": "2.0",
    "info": {
      "title": "api/account/v1/address.proto",
      "version": "version not set"
    },
    "tags": [
      {
        "name": "Address"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/api/v1/account/address": {
        "get": {
          "operationId": "Address_GetList",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1AddressListReply"
              }
            }
          },
          "parameters": [
            {
              "name": "pageNum",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "int64"
            },
            {
              "name": "pageSize",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "Address"
          ]
        },
        "post": {
          "operationId": "Address_Add",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1ActionReply"
              }
            }
          },
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/v1CreateAddressRequest"
              }
            }
          ],
          "tags": [
            "Address"
          ]
        }
      },
      "/api/v1/account/address/{id}": {
        "get": {
          "operationId": "Address_Get",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1AddressReply"
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "Address"
          ]
        },
        "delete": {
          "operationId": "Address_Delete",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1ActionReply"
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "Address"
          ]
        },
        "put": {
          "operationId": "Address_Update",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1ActionReply"
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "integer",
              "format": "int64"
            },
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "type": "object",
                "properties": {
                  "receiver": {
                    "type": "string"
                  },
                  "province": {
                    "type": "string"
                  },
                  "city": {
                    "type": "string"
                  },
                  "area": {
                    "type": "string"
                  },
                  "address": {
                    "type": "string"
                  },
                  "phone": {
                    "type": "string"
                  },
                  "postCode": {
                    "type": "string"
                  },
                  "isDefault": {
                    "type": "integer",
                    "format": "int64"
                  }
                }
              }
            }
          ],
          "tags": [
            "Address"
          ]
        }
      }
    },
    "definitions": {
      "v1ActionReply": {
        "type": "object"
      },
      "v1AddressListReply": {
        "type": "object",
        "properties": {
          "pageNum": {
            "type": "integer",
            "format": "int64"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64"
          },
          "total": {
            "type": "string",
            "format": "uint64"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/v1AddressReply"
            }
          }
        }
      },
      "v1AddressReply": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "receiver": {
            "type": "string"
          },
          "province": {
            "type": "string"
          },
          "city": {
            "type": "string"
          },
          "area": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "phone": {
            "type": "string"
          },
          "postCode": {
            "type": "string"
          },
          "isDefault": {
            "type": "integer",
            "format": "int64"
          },
          "createdAt": {
            "type": "string"
          }
        }
      },
      "v1CreateAddressRequest": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "receiver": {
            "type": "string"
          },
          "province": {
            "type": "string"
          },
          "city": {
            "type": "string"
          },
          "area": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "phone": {
            "type": "string"
          },
          "postCode": {
            "type": "string"
          },
          "isDefault": {
            "type": "integer",
            "format": "int64"
          }
        }
      }
    }
  },
  {
    "swagger": "2.0",
    "info": {
      "title": "api/pact/v1/pact.proto",
      "version": "version not set"
    },
    "tags": [
      {
        "name": "Pact"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/api/v1/pact": {
        "get": {
          "operationId": "Pact_GetList",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1ListPactReply"
              }
            }
          },
          "parameters": [
            {
              "name": "pageNum",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "int64"
            },
            {
              "name": "pageSize",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "int64"
            },
            {
              "name": "status",
              "description": "合同状态. 1-生成中; 2-已生成; 3-无效",
              "in": "query",
              "required": false,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "Pact"
          ]
        },
        "post": {
          "operationId": "Pact_Create",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1CreatePactReply"
              }
            }
          },
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/v1CreatePactRequest"
              }
            }
          ],
          "tags": [
            "Pact"
          ]
        }
      },
      "/api/v1/pact/download": {
        "get": {
          "operationId": "Pact_Download",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "#/definitions/v1DownloadReply"
              }
            }
          },
          "parameters": [
            {
              "name": "pactNo",
              "description": "合同编号.",
              "in": "query",
              "required": false,
              "type": "string"
            }
          ],
          "tags": [
            "Pact"
          ]
        }
      }
    },
    "definitions": {
      "v1CreatePactReply": {
        "type": "object",
        "properties": {
          "pactNo": {
            "type": "string",
            "title": "合同编号"
          }
        }
      },
      "v1CreatePactRequest": {
        "type": "object",
        "properties": {
          "kind": {
            "type": "string",
            "description": "性质 paper-纸质，electron-电子",
            "title": "合同类型"
          },
          "orderNos": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "title": "关联订单id列表"
          },
          "address": {
            "type": "string",
            "title": "地址"
          },
          "receiver": {
            "type": "string",
            "title": "联系人"
          },
          "phone": {
            "type": "string",
            "title": "联系电话"
          },
          "sendAddressId": {
            "type": "integer",
            "format": "int64",
            "title": "邮寄地址ID"
          }
        }
      },
      "v1DownloadReply": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string",
            "title": "合同下载地址"
          }
        }
      },
      "v1ListPactReply": {
        "type": "object",
        "properties": {
          "pageNum": {
            "type": "integer",
            "format": "int64"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64"
          },
          "total": {
            "type": "integer",
            "format": "int64"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/v1PactData"
            }
          }
        }
      },
      "v1PactData": {
        "type": "object",
        "properties": {
          "pactNo": {
            "type": "string",
            "title": "合同编号"
          },
          "kind": {
            "type": "string",
            "description": "性质 paper-纸质，electron-电子",
            "title": "合同类型"
          },
          "createAt": {
            "type": "string",
            "title": "创建日期"
          },
          "orderNos": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "订单no列表",
            "title": "订单号"
          }
        }
      }
    }
  },
  {
    "swagger": "2.0",
    "info": {
      "title": "api/bill/v1/record.proto",
      "version": "version not set"
    },
    "tags": [
      {
        "name": "Record"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/api/v1/bill/record": {
        "get": {
          "operationId": "Record_List",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "# / definitions / v1ListReply"
              }
            }
          },
          "parameters": [
            {
              "name": "subject",
              "in ": "query",
              "required": false,
              "type": "string"
            },
            {
              "name": "pageNum",
              "in ": "query",
              "required": false,
              "type": "integer",
              "format": "int64"
            },
            {
              "name": "pageSize",
              "in ": "query",
              "required": false,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "Record"
          ]
        },
        "post": {
          "operationId": "Record_Add",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "# / definitions / v1AddReply"
              }
            }
          },
          "parameters": [
            {
              "name": "body",
              "in ": "body",
              "required": true,
              "schema": {
                "$ref": "# / definitions / v1AddRequest"
              }
            }
          ],
          "tags": [
            "Record"
          ]
        }
      },
      "/api/v1 / bill / record / { id }": {
        "get": {
          "operationId": "Record_Get",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "# / definitions / v1RecordReply"
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "in ": "path",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "Record"
          ]
        }
      },
      "/api/v1 / bill / stat": {
        "get": {
          "operationId": "Record_Stat",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "# / definitions / v1StatReply"
              }
            }
          },
          "parameters": [
            {
              "name": "subject",
              "in ": "query",
              "required": false,
              "type": "string"
            }
          ],
          "tags": [
            "Record"
          ]
        }
      }
    },
    "definitions": {
      "StatReplyStatInfo": {
        "type": "object",
        "properties": {
          "subject": {
            "type": "string"
          },
          "enableAmount": {
            "type": "integer",
            "format": "int64"
          },
          "usedAmount": {
            "type": "integer",
            "format": "int64"
          },
          "unableAmount": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "v1AddReply": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "v1AddRequest": {
        "type": "object",
        "properties": {
          "subject": {
            "type": "string"
          },
          "kind": {
            "type": "string"
          },
          "belongType": {
            "type": "string"
          },
          "belong": {
            "type": "string"
          },
          "sendEmailId": {
            "type": "integer",
            "format": "int64"
          },
          "orderNos": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "v1ListReply": {
        "type": "object",
        "properties": {
          "pageNum": {
            "type": "integer",
            "format": "int64"
          },
          "pageSize": {
            "type": "integer",
            "format": "int64"
          },
          "total": {
            "type": "integer",
            "format": "int64"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "# / definitions / v1RecordReply"
            }
          }
        }
      },
      "v1RecordReply": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "subject": {
            "type": "string"
          },
          "belongType": {
            "type": "string"
          },
          "belong": {
            "type": "string"
          },
          "amount": {
            "type": "integer",
            "format": "int64"
          },
          "kind": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "status": {
            "type": "integer",
            "format": "int64"
          },
          "CreatedAt": {
            "type": "string"
          }
        }
      },
      "v1StatReply": {
        "type": "object",
        "properties": {
          "list": {
            "type": "array",
            "items": {
              "$ref": "# / definitions / StatReplyStatInfo"
            }
          }
        }
      }
    }
  },
  {
    "swagger": "2.0",
    "info": {
      "title": "api / goods / v1 / commodity.proto",
      "version": "version not set "
    },
    "tags": [
      {
        "name": "Commodity"
      }
    ],
    "schemes": [
      "HTTP",
      "HTTPS",
      "WS",
      "WSS"
    ],
    "consumes": [
      "application / json"
    ],
    "produces": [
      "application / json"
    ],
    "paths": {
      "/api/v1 / commodity / calculate": {
        "post": {
          "operationId": "Commodity_Calculate",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "# / definitions / v1CalculateReply"
              }
            }
          },
          "parameters": [
            {
              "name": "body",
              "in ": "body",
              "required": true,
              "schema": {
                "$ref": "# / definitions / v1CalculateRequest"
              }
            }
          ],
          "tags": [
            "Commodity"
          ]
        }
      },
      "/api/v1 / commodity / { id } / attrs": {
        "get": {
          "operationId": "Commodity_Attrs",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "# / definitions / v1CommodityAttrsReply"
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "in ": "path",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "Commodity"
          ]
        }
      },
      "/api/v1 / commodity / { id } / render_data": {
        "get": {
          "operationId": "Commodity_RenderData",
          "responses": {
            "200": {
              "description": "A successful response.",
              "schema": {
                "$ref": "# / definitions / v1CommodityRenderDataReply"
              }
            }
          },
          "parameters": [
            {
              "name": "id",
              "in ": "path",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "tags": [
            "Commodity"
          ]
        }
      }
    },
    "definitions": {
      "protobufNullValue": {
        "type": "integer",
        "format": "int32",
        "enum": [
          "0"
        ],
        "default": "0"
      },
      "v1CalculateReply": {
        "type": "object",
        "properties": {
          "unitPrice": {
            "type": "integer",
            "format": "int64"
          },
          "totalPrice": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "v1CalculateRequest": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "opts": {
            "type": "object"
          }
        }
      },
      "v1CommodityAttr": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "valueType": {
            "type": "string"
          },
          "valueEnum": {
            "type": "object",
            "additionalProperties": {
              "type": "string"
            }
          },
          "props": {
            "type": "object"
          }
        }
      },
      "v1CommodityAttrsReply": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          },
          "attrs": {
            "type": "array",
            "items": {
              "$ref": "# / definitions / v1CommodityAttr"
            }
          }
        }
      },
      "v1CommodityRenderDataReply": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          },
          "renderData": {
            "type": "string"
          }
        }
      }
    }
  }
]