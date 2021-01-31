module.exports = {
  runtimeCompiler: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/base.scss";`
      },
      scss: {
        additionalData: `@import "@/assets/base.scss";`
      },
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resume/'
    : '/'
}