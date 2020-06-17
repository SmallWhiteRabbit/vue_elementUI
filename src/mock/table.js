import Mock from 'mockjs'
Mock.mock('/table', { //输出数据
  'name': '@name', //随机生成姓名
  //还可以自定义其他数据
});