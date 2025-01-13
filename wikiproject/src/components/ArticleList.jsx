import Article from './Article';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <Article key={article.pageid} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
