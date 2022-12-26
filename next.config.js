/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';

//const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

//if (isGithubActions) {
//  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

//  assetPrefix = `/${repo}/`;
//  basePath = `/${repo}`;
//}

module.exports = withBundleAnalyzer({
  assetPrefix,
  basePath,
  poweredByHeader: false,
  trailingSlash: true,
  env: {
    baseUrl,
  },
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
});
