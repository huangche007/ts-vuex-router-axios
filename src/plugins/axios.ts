import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
const instance = axios.create({
  timeout: 10000,
});

// 请求拦截
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

// 响应拦截
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status } = response;
    if (status !== 200) {
      return Promise.reject(response);
    } else {
      return Promise.resolve(response);
    }
  },
  (err: AxiosError) => {
    throw new Error(err.message || "接口请求异常");
  }
);

export default instance;
