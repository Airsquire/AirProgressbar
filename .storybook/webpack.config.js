const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  config.module.rules.push({ test: /\.js$/, loader: "source-map-loader", enforce: "pre" })
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader')
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.plugins = [new TsconfigPathsPlugin()]
  return config;
};