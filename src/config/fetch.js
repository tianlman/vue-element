import {baseUrl} from './env'

import axios from 'axios'

export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {

  type = type.toUpperCase();
  url = baseUrl + url;

  if (type == 'GET') {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
    if (window.fetch && method == 'fetch') {
      try {
        return new Promise((resolve, reject) => {
          // console.log(url, params)
          axios({
            url:url,
            method:type
          })
            .then(response => {
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            })
        })
      } catch (error) {
        throw new Error(error)
      }
    }


  }
}


