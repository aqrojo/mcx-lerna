const autoprefixer = require('autoprefixer');

const rules = [
  {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  },
  {
    exclude: /node_modules/,
    test: /\.(scss)$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              grid: 'autoplace',
            }),
          ],
        },
      },
      'sass-loader',
    ],
  },
  {
    test: /\.svg$/,
    loader: 'svg-inline-loader'
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/react'],
      },
    },
  },
];

module.exports = rules;
