import axios from 'axios';
const baseURL = `http://localhost:8000/api`;
// const baseURL = `http://localhost:8000/api`;

class ApiHelper {
  static get(url, headerOptions) {
    return ApiHelper.buildRequest(url, 'GET', headerOptions);
  }

  static post(url, requestData, headerOptions) {
    return ApiHelper.buildRequest(url, 'POST', headerOptions, requestData);
  }

  static put(url, requestData, headerOptions) {
    return ApiHelper.buildRequest(url, 'PUT', headerOptions, requestData);
  }

  static patch(url, requestData, headerOptions) {
    return ApiHelper.buildRequest(url, 'PATCH', headerOptions, requestData);
  }

  static buildRequest(url, method, customHeader, requestData) {
    const config = {
      baseURL,
      method,
      url,
      headers: { 'Content-Type': 'application/json' },
      validateStatus(status) {
        return (status >= 200) & (status < 500);
      }
    };

    if (method === 'POST' || method === 'PATCH' || method === 'PUT') {
      config.data = requestData;
    }

    if (customHeader) {
      config.headers = Object.assign(config.headers, customHeader);
    }

    return ApiHelper.makeRequest(config);
  }

  static makeRequest(config) {
    return axios(config);
  }
}

export default ApiHelper;
