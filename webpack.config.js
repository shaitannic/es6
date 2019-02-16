const webpack = require('webpack');

module.exports = {
     entry: ['babel-polyfill', './src/_3_generators.js'],
     watch: false,
     mode: 'development',
     output: {
          filename: 'bundle.js'
     },
     devtool: 'source-map',
     module: {
          rules: [
               {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
               },
               {
                    test: /\.(woff2?|ttf|otf|eot|svg|png|jpg)$/,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                         name: './external/[name].[ext]'
                    }
               },
               {
                    test: /\.js$/,
                    loader: 'babel-loader'
               }
          ]
     }
};
