export const addItemRead = (articleItems, articleItemToRead) => {
  let existingArticleItem = articleItems.find(
    articleItem => articleItem.url === articleItemToRead.url
  );

  if (existingArticleItem) {
    return articleItems.map(articleItem =>
      articleItem.url === articleItemToRead.url
        ? {
            ...articleItem,
            read: true
          }
        : articleItem
    );
  }
};
