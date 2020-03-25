module.exports = {
  entry: './src/index.js',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [ 'file-loader']
       }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/../kong-portal-templates/workspaces/default/themes/base/assets/js',
    publicPath: '/',
    filename: 'swagger-ui-kong-theme-667aef9.min.js',
    library: 'SwaggerUIKongTheme',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: './dist'
  }
}
