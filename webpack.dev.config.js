var path = require('path');
var webpack = require('webpack');

const config = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index.js'
    ],
  },

  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
],

  module: {
    rules: [
      {
        use: [
          {
            loader: 'react-hot-loader/webpack'
          },
          {
            loader: 'babel-loader',
            options: { presets: ['react', 'es2015', 'stage-0'] },
          }
        ],
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: 'url-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devtool:  'eval',
  target: 'web',
  devServer: {
    progress: true,
    hot: true,
    inline: true,
    publicPath: 'build/',
    historyApiFallback: true,
    contentBase: './src'
  }
};

module.exports = config;
