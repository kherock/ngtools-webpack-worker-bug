const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/bootstrap.js',
  module: {
    rules: [
      { use: '@ngtools/webpack', test: /\.ts$/ }
    ]
  },
  plugins: [
    new AngularCompilerPlugin({
      tsConfigPath: 'tsconfig.json',
      entryModule: 'src/module#AppModule'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};
