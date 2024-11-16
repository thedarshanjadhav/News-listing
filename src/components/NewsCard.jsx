/* eslint-disable react/prop-types */
import { format } from "date-fns";

const NewsCard = ({ article, onClick }) => {
  const formatPublishedDate = (dateString) => {
    const date = new Date(dateString);
    const formattedTime = format(date, "hh:mm a");
    const formattedDate = format(date, "EEEE dd MMMM yyyy");
    return `${formattedTime} on ${formattedDate}`;
  };

  return (
    <div
      className="bg-white shadow-md mb-5 rounded overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="lg:flex lg:flex-row p-2 text-gray-500">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="lg:w-2/6 lg:h-64 sm:w-full sm:h-48 lg:object-cover sm:object-contain"
        />
        <div className="p-4">
          <h2 className="text-xl mb-1">{article.title}</h2>
          <p className="mb-3 text-sm">
            <span className="font-bold">Short </span> by {article.author} /{" "}
            {formatPublishedDate(article.publishedAt)}
          </p>
          <p className="text-gray-600">{article.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
