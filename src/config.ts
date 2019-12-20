import * as env from 'dotenv';
import serveStatic = require('serve-static');

//export关键字为将该类导出,便于其它模块使用
export interface Config {
    news_url?: string;
    service_url?: string;
}

env.config(); //获取当前系统的config信息

//export关键字为将该属性导出,便于其它模块使用
export const config: Config = {
    news_url: process.env.NEWS_URL,
    service_url: process.env.SERVICES_URL
}
