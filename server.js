const express = require("express")
const axios = require("axios")
const app = express()


/*
  请求地址： http://localhost:3000/search/users?q=aa

  后台路由
    key： /search/users
    value： function () {}
*/

app.get("/more/goods", function (req, res) {
  res.json({
    "users": [
      {
        "id": 1,
        "username": "root",
        "password": "123456"
      }, {
        "id": 2,
        "username": "张晓花",
        "password": "325916"
      }, {
        "id": 3,
        "username": "刘亮",
        "password": "325916"
      }, {
        "id": 4,
        "username": "王平",
        "password": "325916"
      }
    ],

    "now": [],



    "goods": [
      {
        "id": 1,
        "name": "测试1",
        "price": 10,
        "last": 100,
        "add": false
      },
      {
        "id": 2,
        "name": "测试2",
        "price": 100,
        "last": 100,
        "add": false
      },
      {
        "id": 3,
        "name": "测试3",
        "price": 65,
        "last": 100,
        "add": false
      },
      {
        "id": 4,
        "name": "测试4",
        "price": 34,
        "last": 100,
        "add": false
      },
      {
        "id": 5,
        "name": "测试5",
        "price": 23,
        "last": 10,
        "add": true
      },
      {
        "id": 6,
        "name": "测试6",
        "price": 11,
        "last": 1300,
        "add": false
      },
      {
        "id": 7,
        "name": "测试7",
        "price": 5,
        "last": 1200,
        "add": false
      },
      {
        "id": 8,
        "name": "测试8",
        "price": 55,
        "last": 1024,
        "add": false
      },
      {
        "id": 9,
        "name": "测试9",
        "price": 167,
        "last": 500,
        "add": false
      },
      {
        "id": 10,
        "name": "测试10",
        "price": 225,
        "last": 2219,
        "add": false
      },
      {
        "id": 11,
        "name": "测试11",
        "price": 24,
        "last": 1532,
        "add": false
      },
      {
        "id": 12,
        "name": "测试12",
        "price": 3,
        "last": 15432,
        "add": false
      },
      {
        "id": 13,
        "name": "测试13",
        "price": 12,
        "last": 4588,
        "add": false
      },
      {
        "id": 14,
        "name": "测试14",
        "price": 5,
        "last": 56342,
        "add": false
      },
      {
        "id": 15,
        "name": "测试15",
        "price": 51,
        "last": 1532,
        "add": false
      },
      {
        "id": 16,
        "name": "测试16",
        "price": 37,
        "last": 4654,
        "add": false
      },
      {
        "id": 17,
        "name": "测试17",
        "price": 24,
        "last": 1532,
        "add": false
      },
      {
        "id": 18,
        "name": "测试18",
        "price": 69,
        "last": 7532,
        "add": false
      },
      {
        "id": 19,
        "name": "测试19",
        "price": 52,
        "last": 1532,
        "add": false
      },
      {
        "id": 20,
        "name": "测试20",
        "price": 4,
        "last": 15232,
        "add": false
      }
    ],















    "operating": [
      {
        "id": 1,
        "roomnum": 100,
        "use": false
      },
      {
        "id": 2,
        "roomnum": 101,
        "use": false
      },
      {
        "id": 3,
        "roomnum": 102,
        "use": true
      },
      {
        "id": 4,
        "roomnum": 103,
        "use": true
      },
      {
        "id": 5,
        "roomnum": 104,
        "use": false
      },
      {
        "id": 6,
        "roomnum": 105,
        "use": false
      },
      {
        "id": 7,
        "roomnum": 106,
        "use": true
      },
      {
        "id": 8,
        "roomnum": 107,
        "use": false
      },
      {
        "id": 9,
        "roomnum": 108,
        "use": false
      },
      {
        "id": 10,
        "roomnum": 109,
        "use": false
      },
      {
        "id": 11,
        "roomnum": 200,
        "use": true
      },
      {
        "id": 12,
        "roomnum": 201,
        "use": false
      },
      {
        "id": 13,
        "roomnum": 202,
        "use": false
      },
      {
        "id": 14,
        "roomnum": 203,
        "use": true
      },
      {
        "id": 15,
        "roomnum": 204,
        "use": false
      },
      {
        "id": 16,
        "roomnum": 205,
        "use": false
      },
      {
        "id": 17,
        "roomnum": 206,
        "use": true
      },
      {
        "id": 18,
        "roomnum": 207,
        "use": false
      },
      {
        "id": 19,
        "roomnum": 208,
        "use": false
      },
      {
        "id": 20,
        "roomnum": 209,
        "use": true
      },
      {
        "id": 21,
        "roomnum": 300,
        "use": false
      },
      {
        "id": 22,
        "roomnum": 301,
        "use": true
      },
      {
        "id": 23,
        "roomnum": 302,
        "use": false
      },
      {
        "id": 24,
        "roomnum": 303,
        "use": false
      },
      {
        "id": 25,
        "roomnum": 304,
        "use": true
      },
      {
        "id": 26,
        "roomnum": 305,
        "use": false
      },
      {
        "id": 27,
        "roomnum": 306,
        "use": false
      },
      {
        "id": 28,
        "roomnum": 307,
        "use": false
      },
      {
        "id": 29,
        "roomnum": 308,
        "use": true
      },
      {
        "id": 30,
        "roomnum": 309,
        "use": false
      },
      {
        "id": 31,
        "roomnum": 400,
        "use": false
      },
      {
        "id": 32,
        "roomnum": 401,
        "use": true
      },
      {
        "id": 33,
        "roomnum": 402,
        "use": false
      },
      {
        "id": 34,
        "roomnum": 403,
        "use": false
      },
      {
        "id": 35,
        "roomnum": 404,
        "use": true
      },
      {
        "id": 36,
        "roomnum": 405,
        "use": false
      },
      {
        "id": 37,
        "roomnum": 406,
        "use": false
      },
      {
        "id": 38,
        "roomnum": 407,
        "use": false
      },
      {
        "id": 39,
        "roomnum": 408,
        "use": false
      },
      {
        "id": 40,
        "roomnum": 409,
        "use": false
      },
      {
        "id": 41,
        "roomnum": 500,
        "use": false
      },
      {
        "id": 42,
        "roomnum": 501,
        "use": true
      },
      {
        "id": 43,
        "roomnum": 502,
        "use": true
      },
      {
        "id": 44,
        "roomnum": 503,
        "use": false
      },
      {
        "id": 45,
        "roomnum": 504,
        "use": true
      },
      {
        "id": 46,
        "roomnum": 505,
        "use": false
      },
      {
        "id": 47,
        "roomnum": 506,
        "use": true
      },
      {
        "id": 48,
        "roomnum": 507,
        "use": false
      },
      {
        "id": 49,
        "roomnum": 508,
        "use": false
      },
      {
        "id": 50,
        "roomnum": 509,
        "use": true
      },
      {
        "id": 51,
        "roomnum": 600,
        "use": false
      },
      {
        "id": 52,
        "roomnum": 601,
        "use": false
      },
      {
        "id": 53,
        "roomnum": 602,
        "use": false
      },
      {
        "id": 54,
        "roomnum": 603,
        "use": true
      },
      {
        "id": 55,
        "roomnum": 604,
        "use": false
      },
      {
        "id": 56,
        "roomnum": 605,
        "use": false
      },
      {
        "id": 57,
        "roomnum": 606,
        "use": true
      },
      {
        "id": 58,
        "roomnum": 607,
        "use": false
      },
      {
        "id": 59,
        "roomnum": 608,
        "use": false
      },
      {
        "id": 60,
        "roomnum": 609,
        "use": false
      },
      {
        "id": 61,
        "roomnum": 700,
        "use": true
      },
      {
        "id": 62,
        "roomnum": 701,
        "use": false
      },
      {
        "id": 63,
        "roomnum": 702,
        "use": false
      },
      {
        "id": 64,
        "roomnum": 703,
        "use": false
      },
      {
        "id": 65,
        "roomnum": 704,
        "use": true
      },
      {
        "id": 66,
        "roomnum": 705,
        "use": false
      },
      {
        "id": 67,
        "roomnum": 706,
        "use": false
      },
      {
        "id": 68,
        "roomnum": 707,
        "use": false
      },
      {
        "id": 69,
        "roomnum": 708,
        "use": true
      },
      {
        "id": 70,
        "roomnum": 709,
        "use": false
      },
      {
        "id": 71,
        "roomnum": 800,
        "use": true
      },
      {
        "id": 72,
        "roomnum": 801,
        "use": false
      },
      {
        "id": 73,
        "roomnum": 802,
        "use": false
      },
      {
        "id": 74,
        "roomnum": 803,
        "use": true
      },
      {
        "id": 75,
        "roomnum": 804,
        "use": false
      },
      {
        "id": 76,
        "roomnum": 805,
        "use": false
      },
      {
        "id": 77,
        "roomnum": 806,
        "use": false
      },
      {
        "id": 78,
        "roomnum": 807,
        "use": true
      },
      {
        "id": 79,
        "roomnum": 808,
        "use": false
      },
      {
        "id": 80,
        "roomnum": 809,
        "use": true
      }
    ],








    "book": [
      {
        "docname": "张晓花",
        "id": 1,
        "name": "张旭",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "张晓花",
        "id": 2,
        "name": "汪洋",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "张晓花",
        "id": 3,
        "name": "",
        "iffree": true,
        "time": "8:00--9:00"
      },
      {
        "docname": "张晓花",
        "id": 4,
        "name": "潘石屹",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "张晓花",
        "id": 5,
        "name": "王 石 ",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "张晓花",
        "id": 6,
        "name": "蒋锡培",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "张晓花",
        "id": 7,
        "name": "向文波",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "张晓花",
        "id": 8,
        "name": "牛根生",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "张晓花",
        "id": 9,
        "name": "熊晓鸽",
        "iffree": false,
        "time": "9:00--10:00"
      },
      {
        "docname": "张晓花",
        "id": 10,
        "name": "王 冉",
        "iffree": false,
        "time": "9:00--10:00"
      },
      {
        "docname": "张晓花",
        "id": 11,
        "name": "于清教",
        "iffree": false,
        "time": "9:00--10:00"
      },
      {
        "docname": "张晓花",
        "id": 12,
        "name": "谢清海",
        "iffree": false,
        "time": "9:00--10:00"
      },
      {
        "docname": "张晓花",
        "id": 13,
        "name": "叶茂中",
        "iffree": false,
        "time": "9:00--10:00"
      },
      {
        "docname": "张晓花",
        "id": 14,
        "name": "",
        "iffree": true,
        "time": "9:00--10:00"
      },
      {
        "docname": "张晓花",
        "id": 15,
        "name": "",
        "iffree": true,
        "time": "9:00--10:00"
      },
      {
        "docname": "张晓花",
        "id": 16,
        "name": "",
        "iffree": true,
        "time": "9:00--10:00"
      },
      {
        "docname": "张晓花",
        "id": 17,
        "name": "李士福",
        "iffree": false,
        "time": "10:00--11:00"
      },
      {
        "docname": "张晓花",
        "id": 18,
        "name": "王进生",
        "iffree": false,
        "time": "10:00--11:00"
      },
      {
        "docname": "张晓花",
        "id": 19,
        "name": "任志强",
        "iffree": false,
        "time": "10:00--11:00"
      },
      {
        "docname": "张晓花",
        "id": 20,
        "name": "付 伟",
        "iffree": false,
        "time": "10:00--11:00"
      },
      {
        "docname": "张晓花",
        "id": 21,
        "name": "孙虹钢",
        "iffree": false,
        "time": "10:00--11:00"
      },
      {
        "docname": "张晓花",
        "id": 22,
        "name": "",
        "iffree": true,
        "time": "10:00--11:00"
      },
      {
        "docname": "张晓花",
        "id": 23,
        "name": "宋新宇",
        "iffree": false,
        "time": "10:00--11:00"
      },
      {
        "docname": "张晓花",
        "id": 24,
        "name": "",
        "iffree": true,
        "time": "10:00--11:00"
      },
      {
        "docname": "张晓花",
        "id": 25,
        "name": "王 微",
        "iffree": false,
        "time": "11:00--12:00"
      },
      {
        "docname": "张晓花",
        "id": 26,
        "name": "翁向东",
        "iffree": false,
        "time": "11:00--12:00"
      },
      {
        "docname": "张晓花",
        "id": 27,
        "name": "艾学蛟",
        "iffree": false,
        "time": "11:00--12:00"
      },
      {
        "docname": "张晓花",
        "id": 28,
        "name": "雷永军",
        "iffree": false,
        "time": "11:00--12:00"
      },
      {
        "docname": "张晓花",
        "id": 29,
        "name": "雷永图",
        "iffree": false,
        "time": "11:00--12:00"
      },
      {
        "docname": "张晓花",
        "id": 30,
        "name": "",
        "iffree": true,
        "time": "11:00--12:00"
      },
      {
        "docname": "张晓花",
        "id": 31,
        "name": "",
        "iffree": true,
        "time": "11:00--12:00"
      },
      {
        "docname": "张晓花",
        "id": 32,
        "name": "",
        "iffree": true,
        "time": "11:00--12:00"
      },
      {
        "docname": "张晓花",
        "id": 33,
        "name": "",
        "iffree": true,
        "time": "14:00--15:00"
      },
      {
        "docname": "张晓花",
        "id": 34,
        "name": "刘秋华",
        "iffree": false,
        "time": "14:00--15:00"
      },
      {
        "docname": "张晓花",
        "id": 35,
        "name": "宋 炜",
        "iffree": false,
        "time": "14:00--15:00"
      },
      {
        "docname": "张晓花",
        "id": 36,
        "name": "刘东华",
        "iffree": false,
        "time": "14:00--15:00"
      },
      {
        "docname": "张晓花",
        "id": 37,
        "name": "科特勒",
        "iffree": false,
        "time": "14:00--15:00"
      },
      {
        "docname": "张晓花",
        "id": 38,
        "name": "陈志列",
        "iffree": false,
        "time": "14:00--15:00"
      },
      {
        "docname": "张晓花",
        "id": 39,
        "name": "张巨峰",
        "iffree": false,
        "time": "14:00--15:00"
      },
      {
        "docname": "张晓花",
        "id": 40,
        "name": "",
        "iffree": true,
        "time": "14:00--15:00"
      },
      {
        "docname": "张晓花",
        "id": 41,
        "name": "姚日来",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "张晓花",
        "id": 42,
        "name": "李朝曙",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "张晓花",
        "id": 43,
        "name": "刘兴亮",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "张晓花",
        "id": 44,
        "name": "袁 岳",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "张晓花",
        "id": 45,
        "name": "周济谱",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "张晓花",
        "id": 46,
        "name": "刘步尘",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "张晓花",
        "id": 47,
        "name": "陈达夫",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "张晓花",
        "id": 48,
        "name": "刘君忆",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "张晓花",
        "id": 49,
        "name": "王生安",
        "iffree": false,
        "time": "16:00--17:00"
      },
      {
        "docname": "张晓花",
        "id": 50,
        "name": "李鑫灏",
        "iffree": false,
        "time": "16:00--17:00"
      },
      {
        "docname": "张晓花",
        "id": 51,
        "name": "薛佛世",
        "iffree": false,
        "time": "16:00--17:00"
      },
      {
        "docname": "张晓花",
        "id": 52,
        "name": "蔡壮保",
        "iffree": false,
        "time": "16:00--17:00"
      },
      {
        "docname": "张晓花",
        "id": 53,
        "name": "钱勤堃",
        "iffree": false,
        "time": "16:00--17:00"
      },
      {
        "docname": "张晓花",
        "id": 54,
        "name": "",
        "iffree": true,
        "time": "16:00--17:00"
      },
      {
        "docname": "张晓花",
        "id": 55,
        "name": "",
        "iffree": true,
        "time": "16:00--17:00"
      },
      {
        "docname": "张晓花",
        "id": 56,
        "name": "",
        "iffree": true,
        "time": "16:00--17:00"
      },


      {
        "docname": "刘亮",
        "id": 1,
        "name": "张旭",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "刘亮",
        "id": 2,
        "name": "潘石屹",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "刘亮",
        "id": 3,
        "name": "向文波",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "刘亮",
        "id": 4,
        "name": "牛根生",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "刘亮",
        "id": 5,
        "name": "熊晓鸽",
        "iffree": false,
        "time": "9:00--10:00"
      },
      {
        "docname": "刘亮",
        "id": 6,
        "name": "王 冉",
        "iffree": false,
        "time": "9:00--10:00"
      },
      {
        "docname": "刘亮",
        "id": 7,
        "name": "叶茂中",
        "iffree": false,
        "time": "9:00--10:00"
      },
      {
        "docname": "刘亮",
        "id": 8,
        "name": "",
        "iffree": true,
        "time": "9:00--10:00"
      },
      {
        "docname": "刘亮",
        "id": 9,
        "name": "",
        "iffree": true,
        "time": "9:00--10:00"
      },
      {
        "docname": "刘亮",
        "id": 10,
        "name": "王进生",
        "iffree": false,
        "time": "10:00--11:00"
      },
      {
        "docname": "刘亮",
        "id": 11,
        "name": "任志强",
        "iffree": false,
        "time": "10:00--11:00"
      },
      {
        "docname": "刘亮",
        "id": 12,
        "name": "",
        "iffree": true,
        "time": "10:00--11:00"
      },
      {
        "docname": "刘亮",
        "id": 13,
        "name": "宋新宇",
        "iffree": false,
        "time": "10:00--11:00"
      },
      {
        "docname": "刘亮",
        "id": 14,
        "name": "",
        "iffree": true,
        "time": "10:00--11:00"
      },
      {
        "docname": "刘亮",
        "id": 15,
        "name": "艾学蛟",
        "iffree": false,
        "time": "11:00--12:00"
      },
      {
        "docname": "刘亮",
        "id": 16,
        "name": "雷永军",
        "iffree": false,
        "time": "11:00--12:00"
      },
      {
        "docname": "刘亮",
        "id": 17,
        "name": "雷永图",
        "iffree": false,
        "time": "11:00--12:00"
      },
      {
        "docname": "刘亮",
        "id": 18,
        "name": "",
        "iffree": true,
        "time": "11:00--12:00"
      },
      {
        "docname": "刘亮",
        "id": 19,
        "name": "",
        "iffree": true,
        "time": "11:00--12:00"
      },
      {
        "docname": "刘亮",
        "id": 20,
        "name": "宋 炜",
        "iffree": false,
        "time": "14:00--15:00"
      },
      {
        "docname": "刘亮",
        "id": 21,
        "name": "刘东华",
        "iffree": false,
        "time": "14:00--15:00"
      },
      {
        "docname": "刘亮",
        "id": 22,
        "name": "姚日来",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "刘亮",
        "id": 23,
        "name": "李朝曙",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "刘亮",
        "id": 24,
        "name": "刘兴亮",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "刘亮",
        "id": 25,
        "name": "袁 岳",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "刘亮",
        "id": 26,
        "name": "周济谱",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "刘亮",
        "id": 27,
        "name": "王生安",
        "iffree": false,
        "time": "16:00--17:00"
      },
      {
        "docname": "刘亮",
        "id": 28,
        "name": "李鑫灏",
        "iffree": false,
        "time": "16:00--17:00"
      },
      {
        "docname": "刘亮",
        "id": 29,
        "name": "薛佛世",
        "iffree": false,
        "time": "16:00--17:00"
      },
      {
        "docname": "刘亮",
        "id": 30,
        "name": "",
        "iffree": true,
        "time": "16:00--17:00"
      },

      


      {
        "docname": "王平",
        "id": 1,
        "name": "张旭",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "王平",
        "id": 2,
        "name": "潘石屹",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "王平",
        "id": 4,
        "name": "牛根生",
        "iffree": false,
        "time": "8:00--9:00"
      },
      {
        "docname": "王平",
        "id": 5,
        "name": "熊晓鸽",
        "iffree": false,
        "time": "9:00--10:00"
      },
      {
        "docname": "王平",
        "id": 6,
        "name": "王 冉",
        "iffree": false,
        "time": "9:00--10:00"
      },
      {
        "docname": "王平",
        "id": 8,
        "name": "",
        "iffree": true,
        "time": "9:00--10:00"
      },
      {
        "docname": "王平",
        "id": 9,
        "name": "",
        "iffree": true,
        "time": "9:00--10:00"
      },
      {
        "docname": "王平",
        "id": 10,
        "name": "王进生",
        "iffree": false,
        "time": "10:00--11:00"
      },
      {
        "docname": "王平",
        "id": 11,
        "name": "任志强",
        "iffree": false,
        "time": "10:00--11:00"
      },
      {
        "docname": "王平",
        "id": 12,
        "name": "",
        "iffree": true,
        "time": "10:00--11:00"
      },
      {
        "docname": "王平",
        "id": 13,
        "name": "宋新宇",
        "iffree": false,
        "time": "10:00--11:00"
      },
      {
        "docname": "王平",
        "id": 14,
        "name": "",
        "iffree": true,
        "time": "10:00--11:00"
      },
      {
        "docname": "王平",
        "id": 15,
        "name": "艾学蛟",
        "iffree": false,
        "time": "11:00--12:00"
      },
      {
        "docname": "王平",
        "id": 17,
        "name": "雷永图",
        "iffree": false,
        "time": "11:00--12:00"
      },
      {
        "docname": "王平",
        "id": 18,
        "name": "",
        "iffree": true,
        "time": "11:00--12:00"
      },
      {
        "docname": "王平",
        "id": 19,
        "name": "",
        "iffree": true,
        "time": "11:00--12:00"
      },
      {
        "docname": "王平",
        "id": 20,
        "name": "宋 炜",
        "iffree": false,
        "time": "14:00--15:00"
      },
      {
        "docname": "王平",
        "id": 21,
        "name": "刘东华",
        "iffree": false,
        "time": "14:00--15:00"
      },
      {
        "docname": "王平",
        "id": 22,
        "name": "姚日来",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "王平",
        "id": 23,
        "name": "李朝曙",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "王平",
        "id": 24,
        "name": "刘兴亮",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "王平",
        "id": 25,
        "name": "袁 岳",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "王平",
        "id": 26,
        "name": "周济谱",
        "iffree": false,
        "time": "15:00--16:00"
      },
      {
        "docname": "王平",
        "id": 27,
        "name": "王生安",
        "iffree": false,
        "time": "16:00--17:00"
      },
      {
        "docname": "王平",
        "id": 28,
        "name": "李鑫灏",
        "iffree": false,
        "time": "16:00--17:00"
      },
      {
        "docname": "王平",
        "id": 29,
        "name": "薛佛世",
        "iffree": false,
        "time": "16:00--17:00"
      },
      {
        "docname": "王平",
        "id": 30,
        "name": "",
        "iffree": true,
        "time": "16:00--17:00"
      }
    ],






    "personprice": [
      {
        "username": "张晓花",
        "month":"1",
        "sum": 12323
      },
      {
        "username": "张晓花",
        "month":"2",
        "sum": 4232
      },
      {
        "username": "张晓花",
        "month":"3",
        "sum": 5512
      },
      {
        "username": "张晓花",
        "month":"4",
        "sum": 20120
      },
      {
        "username": "张晓花",
        "month":"5",
        "sum": 4029
      },
      {
        "username": "张晓花",
        "month":"6",
        "sum": 7728
      },
      {
        "username": "张晓花",
        "month":"7",
        "sum": 9210
      },
      {
        "username": "张晓花",
        "month":"8",
        "sum": 29483
      },
      {
        "username": "张晓花",
        "month":"9",
        "sum": 10234
      },
      {
        "username": "张晓花",
        "month":"10",
        "sum": 7289
      },
      {
        "username": "张晓花",
        "month":"11",
        "sum": 12004
      },
      {
        "username": "张晓花",
        "month":"12",
        "sum": 30125
      },



      {
        "username": "王平",
        "month":"1",
        "sum": 2011
      },
      {
        "username": "王平",
        "month":"2",
        "sum": 7423
      },
      {
        "username": "王平",
        "month":"3",
        "sum": 9923
      },
      {
        "username": "王平",
        "month":"4",
        "sum": 1888
      },
      {
        "username": "王平",
        "month":"5",
        "sum": 4342
      },
      {
        "username": "王平",
        "month":"6",
        "sum": 7543
      },
      {
        "username": "王平",
        "month":"7",
        "sum": 12323
      },
      {
        "username": "王平",
        "month":"8",
        "sum": 7777
      },
      {
        "username": "王平",
        "month":"9",
        "sum": 4680
      },
      {
        "username": "王平",
        "month":"10",
        "sum": 2746
      },
      {
        "username": "王平",
        "month":"11",
        "sum": 8921
      },
      {
        "username": "王平",
        "month":"12",
        "sum": 11119
      },


      {
        "username": "刘亮",
        "month":"1",
        "sum": 3456
      },
      {
        "username": "刘亮",
        "month":"2",
        "sum": 4455
      },
      {
        "username": "刘亮",
        "month":"3",
        "sum": 5543
      },
      {
        "username": "刘亮",
        "month":"4",
        "sum": 8866
      },
      {
        "username": "刘亮",
        "month":"5",
        "sum": 2389
      },
      {
        "username": "刘亮",
        "month":"6",
        "sum": 12323
      },
      {
        "username": "刘亮",
        "month":"7",
        "sum": 8787
      },
      {
        "username": "刘亮",
        "month":"8",
        "sum": 20145
      },
      {
        "username": "刘亮",
        "month":"9",
        "sum": 10000
      },
      {
        "username": "刘亮",
        "month":"10",
        "sum": 14002
      },
      {
        "username": "刘亮",
        "month":"11",
        "sum": 2201
      },
      {
        "username": "刘亮",
        "month":"12",
        "sum": 5566
      },
      

    ]

  });
});






app.listen(5000, "localhost", (err) => {
  if (!err) {
    console.log("服务器启动成功")
    console.log("请求本地模拟数据请访问：http://localhost:5000/more/goods")
  }
  else console.log(err);
})
