var path = new Map()
var url = require('url');
var req = require('request');
function Sendtext (request, response) {
    var params = url.parse(request.url, true).query;
    var text = params.text
    var data = {
        "reqType":0,
        "perception": {
            "inputText": {
                "text": text
            },
        },
        "userInfo": {
            "apiKey": "51dd4ab75997440d9d7f62d48633b223",
            "userId": "12313131"
        }
    }
    req({
        "url":"http://openapi.tuling123.com/openapi/api/v2",
        "method" : "POST",
        "headers" : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    },function (error, resp, body) {
        if (error) {
            console.log(error);
        } else {
            var obj = JSON.parse(body);
            if (obj && obj.results && obj.results.length > 0 && obj.results[0].values) {
                var headers = {
                    "content-type" :"text/html; charset=utf-8",
                    // 设置支持本地文件协议请求
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods' : 'GET',
                    'Access-Control-Allow-Headers' : 'content-type, x-requested-width'
                }
                response.writeHead(200,headers);
                response.write(result = JSON.stringify(obj.results[0].values));
                response.end();
            }

        }
    });
}

path.set('/Sendtext',Sendtext)
module.exports.path = path;
