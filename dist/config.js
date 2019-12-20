"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const env = __importStar(require("dotenv"));
env.config(); //获取当前系统的config信息
//export关键字为将该属性导出,便于其它模块使用
exports.config = {
    news_url: process.env.NEWS_URL,
    service_url: process.env.SERVICES_URL
};
//# sourceMappingURL=config.js.map