module.exports = {
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Task - Simple Way to Manage'
        return args
      })
    }
  }