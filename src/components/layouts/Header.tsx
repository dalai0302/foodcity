import clsx from "clsx";
import { t } from "i18next";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getCategoryList } from "../../service/shopApiClient";
import { RESPONSE_SUCCESS } from "../../app/appConst";
import { CategoryTopData } from "../../model/CategoryTopListResponseDto";

// export const menuItemsData = [
//   {
//     title: "home",
//     url: "/",
//   },
//   {
//     title: "shop",
//     url: "/shop",
//   },
//   {
//     title: "about",
//     url: "/about",
//   },
// ];

let timeout: any;
let scroll = 0;

const Header = () => {
  const { t } = useTranslation();

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLDivElement>(null);
  const [menuItem, setMenuItem] = useState<CategoryTopData[]>([]);

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    getCategoryTopList();
  }, []);

  async function getCategoryTopList() {
    try {
      const response = await getCategoryList();
      if (response.status === RESPONSE_SUCCESS) {
        setMenuItem(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // handle scroll event
  const handleScroll = (elTopOffset: any, elHeight: any) => {
    if (window.scrollY > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef!.current!.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <header
      className="shadow-md bg-white tracking-wide z-50 top-0 w-full"
      // style={{ marginTop: sticky.offset }}
    >
      <section className="flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]">
        <div className="left-10 absolute z-50 bg-gray-100 flex px-4 py-3 rounded max-lg:hidden"></div>
        <Link to={"/"}>
          <img
            src={window.location.origin + "/img/logo.png"}
            alt="logo"
            className="md:w-[120px] w-36"
          />
        </Link>

        <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8"></div>
      </section>

      <div
        className="flex flex-wrap justify-center px-10 py-3 top-0"
        id="header"
        ref={headerRef}
      >
        <div
          id="collapseMenu"
          className={clsx(
            " max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50 container mx-auto ",
            sticky.isSticky ? " sticky z-50" : ""
          )}
        >
          <button
            id="toggleClose"
            className={clsx(
              "lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3",
              isOpenMenu ? "hidden" : "fixed"
            )}
            onClick={() => {
              setIsOpenMenu(!isOpenMenu);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul
            className={clsx(
              "lg:flex lg:gap-x-16 justify-center max-lg:space-y-3  max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 !px-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50",
              // isOpenMenu && "!hidden"
            )}
            onClick={() => {
              setIsOpenMenu(!isOpenMenu);
            }}
          >
            <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
              <Link to={"/"}>
                <img
                  src={window.location.origin + "/img/logo.png"}
                  alt="logo"
                  className="w-36"
                />
              </Link>
            </li>
            <Link
              to={"/about"}
              className="hover:text-[#007bff] text-black font-normal block !text-lg uppercase"
            >
              Тухай
            </Link>
            {menuItem.map((item, idx) => {
              switch (item.name) {
                case "Дэлгүүр":
                  return (
                    <Link
                      className="hover:text-[#007bff] text-black font-normal block !text-lg uppercase"
                      to={`/shop`}
                    >
                      {item.name}
                    </Link>
                  );
                case "Хөтөч":
                  return (
                    <Link
                      className="hover:text-[#007bff] text-black font-normal block !text-lg uppercase"
                      to={`/guide`}
                    >
                      {item.name}
                    </Link>
                  );
                case "Эвент":
                  return (
                    <Link
                      className="hover:text-[#007bff] text-black font-normal block !text-lg uppercase"
                      to={`/event`}
                    >
                      {item.name}
                    </Link>
                  );
                case "Брэнд":
                  return (
                    <Link
                      className="hover:text-[#007bff] text-black font-normal block !text-lg uppercase"
                      to={`/brands`}
                    >
                      {item.name}
                    </Link>
                  );
              }
            })}
          </ul>
        </div>

        <div
          id="toggleOpen"
          className="flex ml-auto lg:hidden"
          onClick={() => {
            setIsOpenMenu(!isOpenMenu);
          }}
        >
          <button>
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

    // <header className="fixed top-0 w-full z-10 h-[86px]">
    //   <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
    //     <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
    //       <Link to="/" className="flex items-center">
    //         <img
    //           src={window.location.origin + "/img/logo.png"}
    //           className="mr-3 h-[86px]"
    //           alt="Flowbite Logo"
    //         />
    //       </Link>
    //       <div className="flex items-center lg:order-2">
    //         <Link
    //           to={"/shop"}
    //           className="text-black uppercase bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
    //         >
    //           Shop
    //         </Link>
    //         <Link
    //           to={"/brands"}
    //           className="text-black uppercase bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
    //         >
    //           brand
    //         </Link>
    //         <Link
    //           to={"/about"}
    //           className="text-black uppercase bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
    //         >
    //           about
    //         </Link>
    //         {/* <button
    //           data-collapse-toggle="mobile-menu-2"
    //           type="button"
    //           className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-black"
    //           aria-controls="mobile-menu-2"
    //           aria-expanded="false"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           <svg
    //             className="w-6 h-6"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //               clip-rule="evenodd"
    //             ></path>
    //           </svg>
    //           <svg
    //             className="hidden w-6 h-6"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //               clip-rule="evenodd"
    //             ></path>
    //           </svg>
    //         </button> */}
    //       </div>
    //       <div
    //         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
    //         id="mobile-menu-2"
    //       >
    //         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 "
    //               aria-current="page"
    //             >
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Company
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Marketplace
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Features
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Team
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Header;
