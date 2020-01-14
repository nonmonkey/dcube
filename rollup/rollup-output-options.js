const comment = require('./comment-helper-es').comment;

/**
 * amd – 异步模块定义，用于像RequireJS这样的模块加载器
 * cjs – CommonJS，适用于 Node 和 Browserify/Webpack
 * esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
 * iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
 * umd – 通用模块定义，以amd，cjs 和 iife 为一体
 * system - SystemJS 加载器格式
 */
module.exports = {
  output: [
    {
      file: './dist/dcube.js',
      format: 'umd',
      name: 'Dcube',
      banner: comment('(c) 2019-2020 du')
    },
    {
      file: './dist/dcube.min.js',
      format: 'umd',
      name: 'Dcube',
      banner: comment('(c) 2019-2020 du')
    },
    {
      file: './dist/dcube.common.dev.js',
      format: 'cjs',
      banner: comment('(c) 2019-2020 du')
    },
    {
      file: './dist/dcube.common.prod.js',
      format: 'cjs',
      banner: comment('(c) 2019-2020 du')
    },
    {
      file: './dist/dcube.esm.js',
      format: 'esm',
      banner: comment('(c) 2019-2020 du')
    },
    {
      file: './dist/dcube.esm.min.js',
      format: 'esm',
      banner: comment('(c) 2019-2020 du')
    },
    {
      file: './dist/dcube.amd.js',
      format: 'amd',
      banner: comment('(c) 2019-2020 du')
    },
    {
      file: './dist/dcube.amd.min.js',
      format: 'amd',
      banner: comment('(c) 2019-2020 du')
    }
  ],
  importFiles: [
    {
      file: 'dcube.common.js',
      dev: 'dcube.common.dev.js',
      prod: 'dcube.common.prod.js'
    }
  ]
};
