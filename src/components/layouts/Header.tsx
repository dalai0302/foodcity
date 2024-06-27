import clsx from "clsx";
import { t } from "i18next";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getCategoryList } from "../../service/shopApiClient";
import { RESPONSE_SUCCESS } from "../../app/appConst";
import { CategoryTopData } from "../../model/CategoryTopListResponseDto";
import LanguageSelector from "../languageSelector/LanguageSelector";

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
  const { t } = useTranslation("global");

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef<HTMLDivElement>(null);
  const [menuItem, setMenuItem] = useState<CategoryTopData[]>([]);

  const [isMenuOpen, setMenuOpen] = useState(false);

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

  // let toggleOpen = document.getElementById("toggleOpen");
  // let toggleClose = document.getElementById("toggleClose");
  // let collapseMenu = document.getElementById("collapseMenu");
  // let ulEl = document.getElementsByTagName("ul");

  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  // function handleClick() {
  //   if (collapseMenu!.style.display === "block") {
  //     collapseMenu!.style.display = "none";
  //   } else {
  //     collapseMenu!.style.display = "block";
  //   }
  // }

  // if (toggleOpen !== null) {
  //   toggleOpen!.addEventListener("click", handleClick);
  // }

  // if (toggleClose !== null) {
  //   toggleClose!.addEventListener("click", handleClick);
  // }

  // add/remove scroll event listener
  useEffect(() => {
    // var header = headerRef!.current!.getBoundingClientRect();
    // const handleScrollEvent = () => {
    //   handleScroll(header.top, header.height);
    // };
    // window.addEventListener("scroll", handleScrollEvent);
    // return () => {
    //   window.removeEventListener("scroll", handleScrollEvent);
    // };
  }, []);

  const mobileMenu = () => {
    return (
      <div
        className={clsx(
          isMenuOpen ? "block" : "hidden",
          "absolute w-full md:w-1/2 bg-white mt-0 z-50 right-0",
          "xl:hidden",
          "transition ease-in-out delay-150"
        )}
      >
        <div className="mx-4 z-50 bg-white">
          <ul
            className="flex flex-col justify-center self-start gap-2 text-black relative text-sm cursor-pointer"
            onClick={() => {
              handleClick();
            }}
          >
            <li className="max-xl:border-b max-xl:py-3">
              <Link
                to={"/about"}
                className="hover:text-[#007bff] text-black font-normal text-[15px] block"
              >
                {t("menu.about")}
              </Link>
            </li>
            {menuItem.map((item, idx) => {
              switch (item.name) {
                case "Дэлгүүр":
                  return (
                    <li className="max-xl:border-b max-xl:py-3">
                      <Link
                        className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                        to={`/shop`}
                      >
                        {t("menu.shop")}
                      </Link>
                    </li>
                  );
                case "Хоол, Ресторан":
                  return (
                    <li className="max-xl:border-b max-xl:py-3">
                      <Link
                        className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                        to={`/restaurant`}
                      >
                        {t("menu.restaurant")}
                      </Link>
                    </li>
                  );
                case "Эвент":
                  return (
                    <li className="max-xl:border-b max-xl:py-3">
                      <Link
                        className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                        to={`/event`}
                      >
                        {t("menu.event")}
                      </Link>
                    </li>
                  );
                case "Энтертэйнмент":
                  return (
                    <li className="max-xl:border-b max-xl:py-3">
                      <Link
                        className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                        to={`/entertainment`}
                      >
                        {t("menu.entertainment")}
                      </Link>
                    </li>
                  );
                case "Үйлчилгээ":
                  return (
                    <li className="max-xl:border-b max-xl:py-3">
                      <Link
                        className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                        to={`/service`}
                      >
                        {t("menu.service")}
                      </Link>
                    </li>
                  );
              }
            })}

            <li className="mb-6 hidden max-xl:block xl:order-1">
              <a href="">
                <img
                  src={window.location.origin + "/img/logo.jpeg"}
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <header className="shadow-md bg-white font-sans tracking-wide relative z-50">
      <section className="flex items-center justify-between lg:justify-center flex-wrap gap-5 relative py-3 px-4 md:px-10 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]">
        <div className="flex items-center md:order-1 xl:hidden">
          <button
            className="text-black w-10 h-12 relative focus:outline-none bg-inherit"
            onClick={() => {
              handleClick();
            }}
          >
            <div className="block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={clsx(
                  "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",
                  isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                )}
              ></span>
              <span
                aria-hidden="true"
                className={clsx(
                  "block absolute right-0 h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",
                  isMenuOpen && "opacity-0 w-5"
                )}
              ></span>
              <span
                aria-hidden="true"
                className={clsx(
                  "block absolute right-0 h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",
                  isMenuOpen ? "-rotate-45 w-5" : "translate-y-1.5"
                )}
              ></span>
            </div>
          </button>
        </div>
        <Link to={"/"}>
          <img
            src={window.location.origin + "/img/logo.jpeg"}
            alt="logo"
            className="md:w-[100px] w-36"
          />
        </Link>

        <div className="space-x-6 relative xl:absolute xl:right-10 flex items-center md:ml-auto ">
          <LanguageSelector />
        </div>
      </section>

      <div className="max-xl:hidden flex flex-wrap py-3.5 px-10 overflow-x-auto ">
        <div
          id="collapseMenu"
          className="w-full max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <ul className="lg:flex lg:justify-center uppercase lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="max-xl:border-b max-xl:py-3">
              <Link
                to={"/about"}
                className="hover:text-[#007bff] text-black font-normal text-[15px] block"
              >
                {t("menu.about")}
              </Link>
            </li>
            {menuItem.map((item, idx) => {
              switch (item.name) {
                case "Дэлгүүр":
                  return (
                    <li className="max-xl:border-b max-xl:py-3">
                      <Link
                        className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                        to={`/shop`}
                      >
                        {t("menu.shop")}
                      </Link>
                    </li>
                  );
                case "Хоол, Ресторан":
                  return (
                    <li className="max-xl:border-b max-xl:py-3">
                      <Link
                        className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                        to={`/restaurant`}
                      >
                        {t("menu.restaurant")}
                      </Link>
                    </li>
                  );
                case "Эвент":
                  return (
                    <div className="relative group">
                      <li className="max-xl:border-b max-xl:py-3 group">
                        <Link
                          className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                          to={`/event`}
                        >
                          {t("menu.event")}
                        </Link>
                      </li>
                      {/* <div className="absolute w-36 top-5 invisible group-hover:visible cursor-pointer">
                        <div className="text-black">EVENT VIDEO</div>
                      </div> */}
                    </div>
                  );
                // case "Брэнд":
                //   return (
                //     <li className="max-xl:border-b max-xl:py-3">
                //       <Link
                //         className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                //         to={`/brands`}
                //       >
                //         {t("menu.brand")}
                //       </Link>
                //     </li>
                //   );
                case "Энтертэйнмент":
                  return (
                    <li className="max-xl:border-b max-xl:py-3">
                      <Link
                        className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                        to={`/entertainment`}
                      >
                        {t("menu.entertainment")}
                      </Link>
                    </li>
                  );
                case "Үйлчилгээ":
                  return (
                    <li className="max-xl:border-b max-xl:py-3">
                      <Link
                        className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                        to={`/service`}
                      >
                        {t("menu.service")}
                      </Link>
                    </li>
                  );
              }
            })}

            <li className="mb-6 hidden max-xl:block xl:order-1">
              <a href="">
                <img
                  src={window.location.origin + "/img/logo.jpeg"}
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {mobileMenu()}
    </header>
  );
};

export default Header;
