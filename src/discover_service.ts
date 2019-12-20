import axios,{ AxiosInstance, AxiosRequestConfig} from 'axios';

export class DiscoverService {

    async getNews(host?: string,headers?: any) {
     const client = this._axiosFactory(host);
      try {
        const res =  await client.get("/api/news", {
            headers: headers,
        })
        return res.data;
      } catch (e) {
          console.log(e);
      }
    }

    async getDiscover(host?: string, headers?: any, params? :any) {
      
        const client = this._axiosFactory(host);
        try {
            const res = await client.get('/api/servicemanager/v0/discoverallservices/v1',{
                headers: headers,
                params
            })
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    private _axiosFactory(host?: string) {
        return axios.create({
            baseURL: host,
            timeout: 30000
        })
    }
}

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