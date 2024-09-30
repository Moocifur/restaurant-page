const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Use 'development' mode for easier debugging
  entry: './src/index.js', // Entry point for bundling
  output: {
    filename: 'main.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean output directory before each build
  },
  devtool: 'eval-source-map', // Source maps for easier debugging
  devServer: {
    static: './dist', // Serve files from the 'dist' directory
    watchFiles: ['./src/template.html'], // Watch changes in the HTML template
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Use a custom HTML template
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i, // Process HTML files
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Process image files
        type: 'asset/resource',
      },
    ],
  },
};