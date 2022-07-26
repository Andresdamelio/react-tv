const deps = require('../package.json').dependencies;

const { ModuleFederationPlugin } = require('webpack').container;

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

const override = (config) => {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'tv',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './ShowList': './src/components/ShowList'
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom']
        }
      }
    })
  );

  config.output.publicPath = 'auto';

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = (env) =>
  override(webpackConfig(env));

module.exports = require(webpackConfigPath);
