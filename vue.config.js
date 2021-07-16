module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/ec/',
  outputDir: process.env.NODE_ENV === 'development' ? 'dist' : 'dist/ec',
  pages: {
    index: {
      entry: 'src/main.ts',
      title: '【カメラのキタムラ】デジカメ・ビデオカメラ・プリンター等の通販',
      description:
        '日本最大級のカメラ専門店カメラのキタムラのショッピングサイト。デジカメ・デジタルカメラ・ビデオカメラ・プリンター・フォトフレーム・カメラバッグ・インクなどは当サイトにお任せください。',
      filename: process.env.NODE_ENV === 'development' ? 'index.html' : '../index.html',
      inject: false
    }
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      analyzerMode: process.env.NODE_ENV === 'development' ? 'static' : 'disabled',
      openAnalyzer: false
    }
  }
};
