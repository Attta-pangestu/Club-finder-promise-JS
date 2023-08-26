<<<<<<< HEAD
const path = require('path') ; 


module.exports = {
    entry : './app.js', 
    output : {
        path : path.resolve(__dirname, 'dist'), 
        filename : 'bundle.js'
    }, 
    mode: 'production',
=======
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: './app.js',
  output: {
    path: '/home/runner/Dicoding-Club-Finder/dist',
    filename: 'bundle.js'
  },
  mode: 'production',
  plugins: [
    new htmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html'
    }),
  ],
  module: {
    rules: [
      // Loader Babel 
      {
        test : /\.js$/, 
        exclude : /node_modules/, 
        use : [
          {
            loader: 'babel-loader', 
            options : {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      
      // Loader CSS dan style
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
        ]
      }
    ],
  }

>>>>>>> a679fe3f81c7e1ef6ff3773107989c7bbf077664
};