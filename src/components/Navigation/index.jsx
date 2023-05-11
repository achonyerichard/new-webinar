import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <div className=" bg-indigo-100 text-gray-900  overflow-hidden">
        <header>
          <nav
            className="
      flex flex-wrap
      items-center
      justify-between
      w-full
      
      px-4
      text-lg text-gray-700
      bg-white
      shadow-md
      fixed
      z-20
    "
          >
            <div>
              <a href="#">
                <img className="w-24 object-cover" src="img/logo.png" />
              </a>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              onClick={() => setOpen(!open)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <div
              className={
                !open
                  ? "hidden w-full md:flex md:items-center md:w-auto"
                  : "relative w-full md:flex md:items-center md:w-auto"
              }
              id="menu"
            >
              <ul
                className="
       py-2
          text-base px-2 lg:px-0
          md:flex
          md:justify-between 
          md:items-center
          absolute md:relative text-white  bg-white text z-10 w-full md
          md:pt-0"
              >
                <li>
                  <Link
                    className="md:p-4 block text-[#35354b] font-medium"
                   to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="md:p-4 block text-[#35354b] font-medium"
                   to="/fees"
                  >
                    Fees
                  </Link>
                </li>
                <li>
                  <Link
                    className="md:p-4 block text-[#35354b] font-medium"
                   to="/members"
                  >
                    Members
                  </Link>
                </li>
                <li>
                  <a
                    className="md:p-4 block text-[#35354b] font-medium"
                    href="https://forms.gle/7J5bQgE4D9Pt64AT7"
                  >
                   <button className="px-2 py-2 bg-[#6463a8] text-white rounded-lg">
                    Register
                   </button>
                  </a>
                </li>
                
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navigation;
