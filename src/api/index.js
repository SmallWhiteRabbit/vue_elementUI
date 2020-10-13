import axios from 'axios'

import request from '@/utils/request'
const http = axios.create({
  baseURL:"",
  // transformRequest: [function (data, headers) {
  //   // Do whatever you want to transform the data

  //   return data;
  // }],
  // headers: {'X-Requested-With': 'XMLHttpRequest'},
})

export default http;


export const firstTypeList = function(params){
  return request({
    url: 's',
    method: 'get',
    params: params,
  })
}