module.exports = {
  // options...
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    output: {
      // filename: "[name].[hash:8].js"
      filename: "js/[name].[hash:8].js",
      chunkFilename: "js/[name].[hash:8].js"
    }
  }
};
