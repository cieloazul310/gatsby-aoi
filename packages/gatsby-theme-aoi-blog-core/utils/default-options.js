module.exports = function withDefaults(themeOptions) {
  const postsPerPage = themeOptions.postsPerPage || 15;
  const basePaths = {
    posts: themeOptions.basePaths?.posts ?? '/posts',
    category: themeOptions.basePaths?.category ?? '/category',
    tag: themeOptions.basePaths?.tag ?? '/tag',
    author: themeOptions.basePaths?.author ?? '/author',
  };
  const contentPath = themeOptions.contentPath || 'content';
  const assetPath = themeOptions.assetPath || 'content/assets';
  const excerptLength = themeOptions.excerptLength || 140;
  const imageMaxWidth = themeOptions.imageMaxWidth || 1380;
  const gatsbyRemarkPlugins = themeOptions.gatsbyRemarkPlugins ?? [];

  return {
    postsPerPage,
    basePaths,
    contentPath,
    assetPath,
    excerptLength,
    imageMaxWidth,
    gatsbyRemarkPlugins,
  };
}
