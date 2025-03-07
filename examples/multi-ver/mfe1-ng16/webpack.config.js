
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const shareAll = mf.shareAll;

// In this version of the @angular-architects/module-federation lib, you register
// the lib name with the SharedMappings instance.
//
// With newer versions the boilerplate for using SharedMappings is generated for you.
// See https://www.npmjs.com/package/@angular-architects/module-federation#legacy-syntax-and-version-12-13
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  
  output: {
    uniqueName: "mfe1-ng16",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
    topLevelAwait: true,  
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe1-ng16",
      library: { type: "module" },
      filename: "remoteEntry.js",
      exposes: {
        "./my-card": "./src/app/my-card-component/remote-bootstrap.ts",
      },
      shared: share({
        "@angular/core": {
          singleton: false,
          strictVersion: false,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: false,
          strictVersion: false,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: false,
          strictVersion: false,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: false,
          strictVersion: false,
          requiredVersion: "auto",
        },
        ...sharedMappings.getDescriptors(),
      }),

      // Could also use the shareAll function from @angular-architects/module-federation
      // to set the ModuleFederationPlugin.shared object.
      // The shareAll function shares all the dependencies from the package.json file.
      //
      // Comment the above shared block and uncomment the below one to test it.
      //
      // shared: {
      //   ...shareAll({
      //     singleton: false,
      //     strictVersion: false,
      //     requiredVersion: "auto",
      //   }),
      //   ...sharedMappings.getDescriptors(),
      // },
    }),
    sharedMappings.getPlugin(),
  ],
};

// This expose config from milti version of 14 -> 16
// But file remote config from  /web-component-angular-architects-wrapper-ng16/mfe1-ng16/webpack.config.js

