const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // script minification
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin'); // css minification

let config = {
  entry: './src/index.js', // entry file
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js' // output filename
  },
  resolve: { // These options change how modules are resolved
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'], // Automatically resolve certain extensions
    alias: { // Create aliases
      images: path.resolve(__dirname, 'src/assets/images')  // src/assets/images alias
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/, // all files ending with .jsx
        loader: ['babel-loader', 'eslint-loader'], // use the babel-loader and eslint loader for all .jsx files
        exclude: /node_modules/ // exclude searching for files in the node_modules directory
      },
      {
        test: /\.js$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loaders: ['babel-loader', 'eslint-loader'] // use babel-loader and eslint loader
      },
      {
        test: /\.scss$/, // files ending with .scss
        use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({  // HMR for styles
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
        })),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {  // images loader
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname,
      },
    ] // end rules
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css') // call the ExtractTextWebpackPlugin constructor and name our css file
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './public'), // A directory or URL to serve HTML content from.
    historyApiFallback: true, // fallback to /index.html for Single Page Applications.
    inline: true, // inline mode (set to false to disable including client scripts (like livereload)
    open: true // open default browser while launching
  },
  devtool: 'eval-source-map' // enable devtool for better debugging experience
}

module.exports = config;

if (process.env.NODE_ENV === 'production') { // if we're in production mode, here's what happens next
module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin(), // call the uglify plugin
  new OptimizeCSSAssets() // call the css optimizer (minfication)
);
}