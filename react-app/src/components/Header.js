import { useState, useEffect } from "react";
import pinterest from "../imgs/pinterest.svg";
import SearchIcon from "@mui/icons-material/Search";
import FaceIcon from "@mui/icons-material/Face";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = ({ onSubmit }) => {
  const [searchVal, setSearchVal] = useState();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchVal);
  };

  return (
    <div className="flex p-4 pt-6">
      <div className="flex mr-4">
        <div className="flex items-center justify-center px-4">
          <img src={pinterest} alt="logo" width="40px" />
        </div>
      </div>
      <div className="flex h-[48px] min-w-[123px] items-center justify-center rounded-[24px] cursor-pointer bg-gray-900 text-white font-bold m-2">
        <a href="/">explore</a>
      </div>
      <div className="flex h-[48px] min-w-[123px] items-center justify-center rounded-[24px] cursor-pointer font-bold m-2">
        <a href="/">my feed</a>
      </div>
      <div className="flex h-[48px] min-w-[80px] items-center justify-center rounded-[24px] cursor-pointer font-bold m-2 mr-4">
        <a href="">create</a>
      </div>
      <div className="flex-1 my-auto">
        <div className="bg-[#efefef] flex h-[48px] w-100 rounded-[50px] border-none pr-[10px] mr-8">
          <div className="flex justify-center items-center p-4 ">
            <SearchIcon />
          </div>

          <form className="flex flex-1 border-none w-100 ml-[3px] text-[16px]">
            <input
              onChange={(e) => {
                setSearchVal(e.target.value);
              }}
              type="text"
              className="focus: outline-none bg-transparent flex-1"
              placeholder="search"
            />
            <button type="submit" onClick={onSearchSubmit}></button>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex h-[48px] min-w-[40px] justify-center items-center">
          <a
            href="/"
            className="text-gray-800  hover:bg-gray-200 rounded-[50px] p-2"
          >
            <FaceIcon />
          </a>
        </div>
        <div className="flex h-[48px] min-w-[40px] justify-center items-center mr-4">
          <a href="" className="text-gray-800 hover:bg-gray-200 rounded-xl">
            <KeyboardArrowDownIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
