import { AiFillCamera, AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";

const SearchBar = () => {
  return (
    <form className="flex border mt-7 px-5 py-3 rounded-full w-full sm:w-[600px] items-center hover:shadow-md">
      <AiOutlineSearch className="text-2xl text-gray-400" />
      <input type="text" className="w-full focus:outline-none ml-4" />
      <BiMicrophone className="text-2xl cursor-pointer text-gray-600 mr-5" />
      <a href="https://images.google.com">
        <AiFillCamera className="text-2xl text-gray-600" />
      </a>
    </form>
  );
};

export default SearchBar;
