var fs = require('fs');

var files = fs.readdirSync(__dirname + '/web/');

var pathMap = new Map();
var CtrllerMap = []
function init (app) {
    for (var i = 0; i < files.length; i++) {
        var temp = require('./web/' + files[i]);
        if (!temp.path) {
            throw new Error (files[i] + '缺少path导出模块') 
        } else {
            for (var [k, v] of temp.path) {
                if (pathMap.get[k]) {
                    throw new Error (files[i] + '中' + k + '接口在重复使用')
                }else{
                    pathMap.get(k,v);
                    app.get(k,v);
                    CtrllerMap.push(temp);
                }
            }
        }
    }
}

module.exports = init;