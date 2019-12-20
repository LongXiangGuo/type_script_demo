"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class DiscoverService {
    async getNews(host, headers) {
        const client = this._axiosFactory(host);
        try {
            const res = await client.get("/api/news", {
                headers: headers,
            });
            return res.data;
        }
        catch (e) {
            console.log(e);
        }
    }
    async getDiscover(host, headers, params) {
        const client = this._axiosFactory(host);
        try {
            const res = await client.get('/api/servicemanager/v0/discoverallservices/v1', {
                headers: headers,
                params
            });
            return res.data;
        }
        catch (e) {
            console.log(e);
        }
    }
    _axiosFactory(host) {
        return axios_1.default.create({
            baseURL: host,
            timeout: 30000
        });
    }
}
exports.DiscoverService = DiscoverService;
/**
 * {
  url?: string;
  method?: Method;
  baseURL?: string;
  transformRequest?: AxiosTransformer | AxiosTransformer[];
  transformResponse?: AxiosTransformer | AxiosTransformer[];
  headers?: any;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: AxiosBasicCredentials;
  responseType?: ResponseType;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: (status: number) => boolean;
  maxRedirects?: number;
  socketPath?: string | null;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig | false;
  cancelToken?: CancelToken;
}
 *
*/ 
//# sourceMappingURL=discover_service.js.map