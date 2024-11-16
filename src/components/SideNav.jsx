/* eslint-disable react/prop-types */
const categories = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const SideNav = ({
  setCategory,
  isOpen,
  toggleSideNav,
  setSelectedArticle,
  activeCategory,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h1 className="text-2xl mb-4">News Categories</h1>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer py-2 hover:bg-gray-700 pl-2 rounded-md ${
              activeCategory.toLowerCase() === category.toLowerCase()
                ? "bg-gray-600"
                : ""
            }`}
            onClick={() => {
              setCategory(category);
              setSelectedArticle(null);
              toggleSideNav();
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
