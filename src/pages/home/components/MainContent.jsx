import React from "react";
import SearchBar from "../../../components/SearchBar";

const MainContent = () => {
  return (
    <div className="flex flex-col items-center mt-3 px-4">
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="logo"
      />
      {/* Search Component */}
      <SearchBar />
      {/* Search and Lucky buttons */}
      <div className="flex mt-6 text-gray-800">
        <button className=" bg-gray-50 mr-3 py-2 px-4 text-sm rounded border border-transparent hover:border-gray-300 hover:shadow">
          Google Search
        </button>
        <a
          className="bg-gray-50 py-2 px-4 text-sm rounded border border-transparent hover:border-gray-300 hover:shadow"
          href="https://www.google.com/doodles"
        >
          I'm Feeling Lucky
        </a>
      </div>
    </div>
  );
};

export default MainContent;
