import axios from 'axios';
const baseURL = `http://localhost:8000/api/`;
// const baseURL = `http://localhost:8000/api`;

class ApiHelper {
  static request(url, method, data, options) {
    let headers = { 'Content-Type': 'application/json' };
    headers = Object.assign(headers, options);
    const apiRequest = new axios({
      method,
      url: `${baseURL}${url}`,
      data,
      headers
    });

    return new Promise((resolve, reject) => {
      apiRequest.then(response => {
        resolve(response);
      }).catch(err => {
        reject(err);
      })
    });
  }
}

export default ApiHelper;
