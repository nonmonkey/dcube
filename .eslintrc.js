module.exports = {
  parser:  '@typescript-eslint/parser', //定义ESLint的解析器
  extends: [
    'prettier/@typescript-eslint', // 使得@typescript-eslint中的样式规范失效，遵循prettier中的样式规范
    'plugin:prettier/recommended' // 使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出
  ],
  plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
  env: { // 指定代码的运行环境
    browser: true,
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 6, // s也就是ES6语法支持的意思
    "sourceType": "module",
    "ecmaFeatures": {
        "modules": true
    },
  }
}
