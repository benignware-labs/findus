const path = require('path');
const { sync: glob } = require('glob');

const context = path.join(__dirname, 'src');
const pkg = require('./package.json');
const mode = process.env.NODE_ENV || 'development';

const entry = [
  path.join(context, `js/${pkg.name}.js`),
  path.join(context, `scss/${pkg.name}.scss`)
].concat(
  mode !== 'production' ? glob('**/*.html', {
    cwd: path.join(__dirname, 'test/fixtures'),
    absolute: true
  }) : []
);

module.exports = {
  context,
  mode,
  entry,
  output: {
    filename: `${pkg.name}.js`,
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      // exclude: /node_modules\/(?!(unique-selector)\/).*/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-env' ],
          plugins: [
            /*[ '@babel/plugin-transform-runtime', {
              "regenerator": true
            } ],*/
            // '@babel/plugin-transform-spread'
          ]
        }
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[name].css",
          emitFile: true
        }
      }, {
        loader: 'extract-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: (loader) => [
            require('autoprefixer')({
              ignoreUnknownVersions: true
            }),
            ...(mode === 'production' ? [ require('cssnano')() ] : [])
          ]
        }
      }, {
        loader: 'sass-loader',
        options: {
          includePaths: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'bower_components')
          ]
        }
      }]
    }, {
      test: /\.html$/,
      use: [{
        loader: 'file-loader',
        options: {
          emitFile: true,
          name: '[name].html'
        }
      }, {
        loader: 'extract-loader'
      }, {
        loader: 'html-loader',
        options: {
          attrs: [
            'script:src'
          ]
        }
      }]
    }]
  },
  resolve: {
    alias: {
      [pkg.name]: path.resolve(__dirname, pkg.name)
    }
  },
  optimization: {
    minimize: mode === 'production'
  },
  devServer: {
    index: 'index.html',
    open: true,
    //hot: true,
    inline: true,
    port: 3010,
    historyApiFallback: true,
    //contentBase: path.join(process.cwd(), 'src'),
    contentBase: './dist',
    stats: {
      colors: true
    }
  }
};
