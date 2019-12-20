import Koa from 'koa';
import Router from 'koa-router';
import * as env from 'dotenv';
import { config } from './config';
import { DiscoverService } from './discover_service';

const app = new Koa();
const router = new Router();
console.log(process.env.NEWS_URL)
console.log(process.env.SERVICES_URL)
router.get('/api/news', async (ctx)=> {
    const appKey = ctx.get('X-AppKey');
    const appUsid = ctx.get('x-btcapi-usid');
    const service = new DiscoverService();
    const headers = {
        'X-AppKey': appKey,
        'x-btcapi-usid': appUsid
    }
    const newsRes = await service.getNews(config.news_url, headers);
    ctx.body = newsRes;
});

router.get('/api/servicemanager/v0/discoverallservices/v1', async (ctx)=> {
    const appVersion = ctx.get('AppVersion');
    const appKey = ctx.get('AppKey');
    const service = new DiscoverService();
    const headers = {
        'AppVersion': appVersion,
        'AppKey': appKey
    }
    const path = ctx.path;
    const params = ctx.query;
    const newsRes = await service.getDiscover(config.service_url, headers, params);
    ctx.body = newsRes;
});

router.get('/api/discover', async (ctx) => {
    const service = new DiscoverService();
    const appKey1 = ctx.get('X-AppKey');
    const appUsid1 = ctx.get('x-btcapi-usid');
    const headers1 = {
        'X-AppKey': appKey1,
        'x-btcapi-usid': appUsid1
    }
    const appVersion = ctx.get('AppVersion');
    const appKey = ctx.get('AppKey'); 
    const path = ctx.path;
    const params = ctx.query;
    const headers = {
        'AppVersion': appVersion,
        'AppKey': appKey
    }
    const [news, services] = await Promise.all([
        service.getNews(config.news_url, headers1),
        service.getDiscover(config.service_url, headers, params)
    ])
    ctx.body = {"news": news, "services": services};
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8080);
console.log("the service start successfully, you could open in `http://localhost:8080`");
console.log(config.news_url);
/**
 * (parameter) ctx: Koa.ParameterizedContext<any, Router.IRouterParamContext<any, {}>>
 *  get(
        name: string,
        path: string | RegExp,
        ...middleware: Array<Router.IMiddleware<StateT, CustomT>>
    ): Router<StateT, CustomT>;
*/