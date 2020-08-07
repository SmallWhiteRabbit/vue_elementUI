import axios from 'axios'

const http = axios.create({
  baseURL:"",
  // transformRequest: [function (data, headers) {
  //   // Do whatever you want to transform the data

  //   return data;
  // }],
  // headers: {'X-Requested-With': 'XMLHttpRequest'},
})

export default http;