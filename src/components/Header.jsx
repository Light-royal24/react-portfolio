import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <header className=" flex w-full bg-black text-gray-50 justify-center align-center fixed">
        <div className="flex justify-between w-4/5 p-2.5 ">

          <a href="#homePage" className="cursor-pointer flex gap-1 items-center">
            <ion-icon name="home"></ion-icon>
            <span className="text-lg font-bold">David Prosper</span>
          </a>

          <div className="md:hidden hide">
            <button
              className="p-2 text-white-700 rounded-md outline-none focus:border-none focus:border relative"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            <div
              className={`flex md:block divPosition ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white-600 hover:text-blue-600 cursor-pointer p-2.5 text-base">
                  <a href="#aboutMe">About Me</a>
                </li>
                <li className="text-white-600 hover:text-blue-600 cursor-pointer p-2.5 text-base">
                  <a href="#projectCard">My Project</a>
                </li>
                <li className="text-white-600 hover:text-blue-600 cursor-pointer p-2.5 text-base">
                  <a href="#ContactMe">Contact Me</a>
                </li>
                <li className="text-white-600 bg-orange styled hover:text-blue-600 cursor-pointer p-2.5 text-base">
                  <a href="#">Download CV</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
