/* eslint-disable react/prop-types */
import NewsCard from "./NewsCard.jsx";

const NewsList = ({ articles, setSelectedArticle }) => {
  return (
    <div className="w-full m-2">
      {articles.map((article, index) => (
        <NewsCard
          key={index}
          article={article}
          onClick={() => setSelectedArticle(article)}
        />
      ))}
    </div>
  );
};

export default NewsList;
