/**
 * @type {import('next').NextConfig}
 */
 const { withSentryConfig } = require("@sentry/nextjs");

 const path = require("path");
 const withSvgr = require("next-plugin-svgr");
 const isProd = process.env.NODE_ENV === "production";
 
 const withTM = require("next-transpile-modules")(["@phirun/ui"]);
 
 let config = {
   swcMinify: true,
   webpack: (config, { isServer }) => {
     if (!isServer) {
       config.resolve.fallback.fs = false;
     }
     return config;
   },
   // resolve: {
   //   alias: {
   //     'mapbox-gl/dist/mapbox-gl.css': path.resolve(__dirname, 'src/empty.js'),
   //   },
   // },
   sassOptions: {
     includePaths: [path.join(__dirname, "styles")],
   },
   typescript: {
     // !! WARN !!
     // Dangerously allow production builds to successfully complete even if
     // your project has type errors.
     // !! WARN !!
     ignoreBuildErrors: true,
   },
   serverRuntimeConfig: {
     PROJECT_ROOT: __dirname,
   },
   eslint: {
     ignoreDuringBuilds: true,
   },
   svgrOptions: {
     titleProp: false,
     icon: true,
   },
   experimental: {},
   compiler: {
     styledComponents: true,
     removeConsole: isProd,
   },
   reactStrictMode: isProd,
 };
 // if (isProd) {
 //   const withPWA = require('next-pwa');
 //   config = withPWA({
 //     // pwa config
 //     pwa: {
 //       disable: !isProd,
 //       dest: 'public',
 //     },
 //     //end
 //     ...config,
 //   });
 // }
 
 const sentryWebpackPluginOptions = {
   // Additional config options for the Sentry Webpack plugin. Keep in mind that
   // the following options are set automatically, and overriding them is not
   // recommended:
   //   release, url, org, project, authToken, configFile, stripPrefix,
   //   urlPrefix, include, ignore
   disableServerWebpackPlugin: true,
   disableClientWebpackPlugin: true,
   hideSourceMaps: !isProd,
   silent: true, // Suppresses all logs
   // For all available options, see:
   // https://github.com/getsentry/sentry-webpack-plugin#options.
 };
 
 module.exports = withSentryConfig(
   withTM(withSvgr(config)),
   sentryWebpackPluginOptions
 );

 module.exports = {
  images: {
    domains: ['farm5.staticflickr.com'],
  },
  reactStrictMode: true,
}
 