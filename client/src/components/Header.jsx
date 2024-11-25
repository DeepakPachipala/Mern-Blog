import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export const Header = () => {
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:ext-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-pink-500 rounded-lg text-white">
          Deepak Blog
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h10 lg:hidden" color='grey' pill>
        <AiOutlineSearch />
      </Button>
      <div className="w-12 h-10 sm:inline" color="grey" pill>
        <Button>
            <FaMoon/>
        </Button>
      </div>
    </Navbar>
  );
};
