module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
  ],
  rules: {
    // 'semi': 0,
    'no-tabs': 'off',
    'generator-star-spacing': 0,
    'no-mixed-spaces-and-tabs': 0,
    'indent': 0,
    // "no-multiple-empty-lines": [1, {"max": 2}],// 空行最多不能超过2行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
