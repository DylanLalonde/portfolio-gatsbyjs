const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Dylan Lalonde - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Dylan Lalonde', // Alternative Site title for SEO
  siteTitleShort: 'DylanLalonde', // short_name for manifest
  siteHeadline: 'Building tech for Earth and her inhabitants', // Headline for schema.org JSONLD
  siteUrl: 'https://dylanlalonde.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'My simple one-page portfolio website.',
  author: 'DylanLalonde', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@DylanLalonde_', // Twitter Username
  ogSiteName: 'DylanLalonde', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
