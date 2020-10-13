import axios from 'axios'
import { Message } from 'element-ui';

const request = axios.create({
  baseURL:'',
  transformRequest: [function (data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }],
})
request.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

request.interceptors.response.use(response =>{
  let state =  response.data.state == 0
  if(state){
    
    Message.error(response.data.message)
  }
  if(response.status == 200){
    return response.data
  }else{
    Message.error('服务器端错误')
  }
  
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
})

export default request
