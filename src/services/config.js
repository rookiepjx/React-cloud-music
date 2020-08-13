const devBaseURL = "http://123.207.32.32:9001";
const prodBaseURL = "http://production.org";
// 判断生产环境还是开发环境，改变baseURL
export const BASE_URL = process.env.NODE_ENV === "development" ? devBaseURL : prodBaseURL

export const TIMEOUT = 5000;
