/* eslint-disable react/prop-types */
const FullArticle = ({ article }) => {
  return (
    <div className="bg-white p-8 m-6 overflow-auto">
      <h1 className="lg:text-3xl sm:text-2xl font-bold mb-4">
        {article.title}
      </h1>
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full lg:h-64 sm:h-auto object-cover mb-4"
      />
      <p className="lg:text-lg sm:text-xs">{article.content}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        Read more
      </a>
    </div>
  );
};

export default FullArticle;
