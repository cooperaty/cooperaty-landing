// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/cooperaty-landing/' : '',
  target: 'serverless',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
