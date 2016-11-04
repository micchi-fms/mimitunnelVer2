'use strict';
var src = './src';        // 元ファイル
var build = './build';      // コンパイル先
var jsSrc = src + '/js';  // jsファイルの元パス

module.exports = {

  'src': {
    'root' : src,
    'copy' : src + '/copy/**/*',
    'css'  : src + '/css/**/*.css',
    'sass' : src + '/sass/**/*.scss',
    'ejs'  : [src + '/**/*.ejs', '!' + src + '/**/_*.ejs'],
    'imgCopy'  : [src + '/img/**/*.{gif,jpg,jpeg,png,svg,mp4}', '!' +src+ '/img/sprite/**/*'],
    'img'  : [src + '/img/**/*.{gif,jpg,jpeg,png,svg}', '!' +src+ '/img/sprite/**/*']
  },

  'build': {
    'root' : build,
    'copy' : build+'/copy',
    'sass' : build + '/css',
    'css'  : build + '/css/lib',
    'ejs'  : build,
    'img'  : build + '/img'
  },

  //browserSyncの設定
  browserSync: {
    server: {
      baseDir: build
    }
  },

  // autoprefixerの設定
  autoprefixer_browsers: [
    'ie >= 8',
    'ff >= 32',
    'chrome >= 42',
    'safari >= 7',
    'ios >= 6',
    'android >= 2.3'
  ],

  // browserifyの設定
  browserify: {
    bundleConfigs: [
     {
        entries: jsSrc + '/index.js',
        build: build + '/js',
        outputName: 'index.js'
      }
    ]
  },

  // jshintの対象ファイル
  lintfiles:[
    jsSrc + '/*.js'
  ],



  jsLibConcat: {
    name: 'lib.js',
    srcs: [
      './node_modules/jquery/dist/jquery.min.js',
      jsSrc+'/lib/minMatrixb.js'
    ],
    build: build + '/js'
  }
};
