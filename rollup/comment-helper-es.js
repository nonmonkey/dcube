const fs = require('fs');

// 生成打包后dev、prod引入文件
function createDevProdImportFileCtx(dev, prod) {
  return `if (process.env.NODE_ENV === 'production') {
  module.exports = require('./${prod}');
} else {
  module.exports = require('./${dev}');
}
`;
}

module.exports = {
  // 生成注释
  comment(...arg) {
    if (arg.length === 0) {
      return; // 如果参数为0直接返回
    }
    let maxlength = 0;
    for (let i = 0; i < arg.length; i++) {
      const length = arg[i].toString().length;
      maxlength = length > maxlength ? length : maxlength; // 获取最长的参数
    }
    maxlength = maxlength === 0 ? maxlength : maxlength + 1; // 在最长参数长度上再加1，为了美观

    const c = [];
    c.push('/**\n'); // 添加注释头
    for (let i = 0; i < arg.length; i++) {
      c.push(' * ' + arg[i] + '\n'); // 加入参数内容
    }
    c.push(' **/'); // 添加注释尾
    return c.join(''); // 合并参数为字符串
  },

  // 生成打包后dev、prod引入文件
  async importFilesBuild(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
      const importFile = arr[i];
      const ctx = createDevProdImportFileCtx(importFile.dev, importFile.prod);
      await fs.writeFileSync('./dist/' + importFile.file, ctx, { flag: 'w' });
    }
  }
};
