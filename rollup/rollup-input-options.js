const typescript = require('rollup-plugin-typescript2');
const alias = require('rollup-plugin-alias'); // 别名
const json = require('rollup-plugin-json'); // 获取json内容
const commonjs = require('rollup-plugin-commonjs'); // 用于识别CommonJS
const resolve = require('rollup-plugin-node-resolve'); // 将我们编写的源码与依赖的第三方库合并
const buble = require('rollup-plugin-buble'); // es6转es5
const terser = require('rollup-plugin-terser').terser; // 压缩代码
const path = require('path');

const pathResolve = p => path.resolve(__dirname, '..', p);

module.exports = {
  input: './src/index.ts',
  plugins: [
    typescript(),
    alias({
      resolve: ['.js', '.jsx', 'ts', 'tsx'],
      entries: { '@': pathResolve('src') }
    }),
    json({
      exclude: ['node_modules']
    }),
    commonjs(),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules' // 仅处理node_modules内的库
      }
    }),
    buble({
      exclude: 'node_modules'
    }),
    terser({
      include: [/^.+\.min\.js$/, /^.+\.prod\.js$/]
    })
  ]
};
