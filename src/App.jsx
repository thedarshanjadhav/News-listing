import { useState, useEffect } from "react";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import FullArticle from "./components/FullArticle";
import { motion } from "framer-motion";

const App = () => {
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  // Detect screen size to handle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=1158af23952e42f8b95a564e98e1b2c1`
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, [category]);

  // Function to open FullArticle in mobile view as a modal
  const openFullArticle = (article) => {
    setSelectedArticle(article);
  };

  // Function to close the FullArticle modal
  const closeFullArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="h-screen w-full">
      <Navbar isOpen={isOpen} toggleSideNav={toggleSideNav} />
      <SideNav
        setCategory={setCategory}
        isOpen={isOpen}
        toggleSideNav={toggleSideNav}
        setSelectedArticle={setSelectedArticle}
        activeCategory={category}
      />
      <div className="mt-20 p-4 flex justify-center w-full">
        {/* Container for NewsList and FullArticle */}
        <div
          className={`flex w-full transition-all duration-500 ${
            selectedArticle
              ? isMobile
                ? "flex-col" // For mobile, stack NewsList and FullArticle vertically
                : "justify-start" // For laptop, keep them side by side
              : "justify-center"
          }`}
        >
          
          <div
            className={`transition-all duration-500 ${
              selectedArticle
                ? isMobile
                  ? "w-full"
                  : "w-1/2" // On laptop, it should take half width
                : isMobile
                ? "w-full"
                : "w-3/5" // On laptop, NewsList takes 3/5 width
            }`}
          >
            <NewsList
              articles={articles}
              setSelectedArticle={openFullArticle}
            />
          </div>

          {/* FullArticle */}
          {selectedArticle && !isMobile && (
            <div className="w-1/2 transition-all duration-500">
              <FullArticle article={selectedArticle} />
            </div>
          )}
        </div>
      </div>

      {isMobile && selectedArticle && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto"
          onClick={closeFullArticle} // Close the modal when clicked outside
          initial={{ opacity: 0 }} // Start with 0 opacity
          animate={{ opacity: 1 }} // Animate to full opacity
          exit={{ opacity: 0 }} // Fade out when closing
          transition={{ duration: 0.5 }} // Duration of the fade animation
        >
          <motion.div
            className=" flex items-center justify-center flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicked inside
            initial={{ y: "100%", opacity: 0 }} // Start from below the screen
            animate={{ y: "0%", opacity: 1 }} // Animate to its final position
            exit={{ y: "100%", opacity: 0 }} // Animate to the bottom and fade out
            transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth spring animation
          >
            <FullArticle article={selectedArticle} />
            <button
              onClick={closeFullArticle}
              className=" bg-red-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
