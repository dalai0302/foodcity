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

  let toggleOpen = document.getElementById("toggleOpen");
  let toggleClose = document.getElementById("toggleClose");
  let collapseMenu = document.getElementById("collapseMenu");
  let ulEl = document.getElementsByTagName("ul");

  function handleClick() {
    if (collapseMenu!.style.display === "block") {
      collapseMenu!.style.display = "none";
    } else {
      collapseMenu!.style.display = "block";
    }
  }

  if (toggleOpen !== null) {
    toggleOpen!.addEventListener("click", handleClick);
  }

  if (toggleClose !== null) {
    toggleClose!.addEventListener("click", handleClick);
  }

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

  return (
    <header className="shadow-md bg-white font-sans tracking-wide relative z-50">
      <section className="flex items-center lg:justify-center flex-wrap gap-5 relative py-3 px-10 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]">
        <div className="space-x-6 md:absolute md:left-10 hidden xl:flex items-center max-md:ml-auto text-black font-medium text-xs">
          <a target="_blank" href="https://www.facebook.com/FoodCityMall">
            <i className="fa fa-facebook text-black before:text-2xl"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/foodcitymongolia">
            <i className="fa fa-instagram text-black before:text-2xl"></i>
          </a>
        </div>
        <Link to={"/"}>
          <img
            src={window.location.origin + "/img/logo.jpeg"}
            alt="logo"
            className="md:w-[100px] w-36"
          />
        </Link>

        <div className="space-x-6 md:absolute md:right-10 flex items-center max-md:ml-auto ">
          <LanguageSelector />
        </div>
      </section>

      <div className="flex flex-wrap py-3.5 px-10 overflow-x-auto">
        <div
          id="collapseMenu"
          className="w-full max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
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

          <ul className="lg:flex lg:justify-center uppercase lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="max-lg:border-b max-lg:py-3">
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
                    <li className="max-lg:border-b max-lg:py-3">
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
                    <li className="max-lg:border-b max-lg:py-3">
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
                    <li className="max-lg:border-b max-lg:py-3">
                      <Link
                        className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                        to={`/event`}
                      >
                        {t("menu.event")}
                      </Link>
                    </li>
                  );
                case "Брэнд":
                  return (
                    <li className="max-lg:border-b max-lg:py-3">
                      <Link
                        className="hover:text-[#007bff] text-black font-normal text-[15px] block"
                        to={`/brands`}
                      >
                        {t("menu.brand")}
                      </Link>
                    </li>
                  );
                case "Энтертэйнмент":
                  return (
                    <li className="max-lg:border-b max-lg:py-3">
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
                    <li className="max-lg:border-b max-lg:py-3">
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

            <li className="mb-6 hidden max-lg:block">
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

        <div className="flex ml-auto lg:hidden">
          <button id="toggleOpen">
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
  );
};

export default Header;
