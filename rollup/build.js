const fs = require('fs');
const rollup = require('rollup');
const inputOptions = require('./rollup-input-options');
const outputOptions = require('./rollup-output-options');
const helper = require('./comment-helper-es');

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

async function buildEntry(input, output) {
  const bundle = await rollup.rollup(input); // 根据input配置进行打包
  console.log(`正在生成：${output.file}`);
  await bundle.generate(output);
  await bundle.write(output); // 根据output配置输出文件
  console.log(`${output.file}生成成功！`);
}

async function build(builds) {
  // 生成打包文件
  for (let i = 0, len = outputOptions.output.length; i < len; i++) {
    await buildEntry(inputOptions, outputOptions.output[i]);
  }

  // 生成打包后dev、prod引入文件
  await helper.importFilesBuild(outputOptions.importFiles);
}

build();
