import React, { useEffect, useState } from "react";
import { CategorySearchRequestDto } from "../../model/CategorySearchRequestDto";
import { brandSearch, categorySearch } from "../../service/shopApiClient";
import {
  RESPONSE_SUCCESS,
  URL_BACKEND_CATEGORY_FILE,
} from "../../app/appConst";
import {
  CategorySearchBean,
  CategorySearchData,
} from "../../model/CategorySearchResponseDto";
import ErrorManager from "../../utility/ErrorManager";
import { BrandSearchRequestDto } from "../../model/BrandSearchRequestDto";
import { BrandBean, BrandData } from "../../model/BrandSearchResponseDto";
import clsx from "clsx";
import FoodcityPagination from "../../components/foodcity/FoodcityPagination";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

enum Floor {
  ALL = "ALL",
  FIRST = "1F",
  SECOND = "2F",
  THIRD = "3F",
  FOURTH = "4F",
}

type MergedType = BrandBean | CategorySearchBean;

const BrandList = () => {
  const { t } = useTranslation("global");

  const [brandItemList, setBrandItemList] = useState<BrandBean[]>([]);
  const [shopItemList, setShopItemList] = useState<CategorySearchBean[]>([]);
  const [serviceItemList, setServiceItemList] = useState<CategorySearchBean[]>(
    []
  );
  const [restaurantItemList, setRestaurantItemList] = useState<
    CategorySearchBean[]
  >([]);

  const [allListItem, setAllListItem] = useState<Array<MergedType>>([]);

  const [menu, setMenu] = useState<Floor>(Floor.ALL);

  useEffect(() => {
    setMenu(Floor.ALL);

    brandSearchList({
      offSet: 100,
      name: "",
      currentPage: 0,
      // categoryId: 0,
    });

    shopSearchList({
      id: 1,
      offSet: 3,
      name: "",
      currentPage: 0,
    });

    serviceSearchList({
      id: 22,
      offSet: 100,
      name: "",
      currentPage: 0,
    });

    restaurantSearchList({
      id: 2,
      offSet: 100,
      name: "",
      currentPage: 0,
    });
  }, []);

  useEffect(() => {
    if (
      shopItemList.length > 0 &&
      brandItemList.length > 0 &&
      serviceItemList.length > 0 &&
      restaurantItemList.length > 0
    ) {
      const merged = [
        ...shopItemList,
        ...brandItemList,
        ...serviceItemList,
        ...restaurantItemList,
      ];

      const sortFunction = (a: MergedType, b: MergedType) => {
        const levelMap: { [key: string]: number } = {
          "": 1, // Treat "" as highest level
          "1F": 2,
          "2F": 3,
          "3F": 4,
          "4F": 5,
        };
        const levelA = levelMap[a.level!];
        const levelB = levelMap[b.level!];
        return levelA - levelB;
      };

      const sorted = merged.sort(sortFunction);
      setAllListItem(sorted);
    }
  }, [shopItemList, brandItemList, serviceItemList, restaurantItemList]);

  async function shopSearchList(req: CategorySearchRequestDto) {
    try {
      const response = await categorySearch(req);
      if (response.status === RESPONSE_SUCCESS) {
        setShopItemList(response.data.beans?.at(0)?.subCategories!);
      }
    } catch (error) {
      ErrorManager.handleRequestError(error);
    }
  }

  // console.log(allListItem);

  async function brandSearchList(req: BrandSearchRequestDto) {
    try {
      const response = await brandSearch(req);
      if (response.status === RESPONSE_SUCCESS) {
        setBrandItemList(response.data.beans!);
      }
    } catch (error) {
      ErrorManager.handleRequestError(error);
    }
  }

  async function serviceSearchList(req: CategorySearchRequestDto) {
    try {
      const response = await categorySearch(req);
      if (response.status === RESPONSE_SUCCESS) {
        setServiceItemList(response.data.beans?.at(0)?.subCategories!);
      }
    } catch (error) {
      ErrorManager.handleRequestError(error);
    }
  }

  async function restaurantSearchList(req: CategorySearchRequestDto) {
    try {
      const response = await categorySearch(req);
      if (response.status === RESPONSE_SUCCESS) {
        setRestaurantItemList(response.data.beans?.at(0)?.subCategories!);
      }
    } catch (error) {
      ErrorManager.handleRequestError(error);
    }
  }

  const RenderCard = (item: MergedType) => {
    if (item.name == "Хүнс") {
      return (
        <Link to={`/shop/${item.id}`}>
          <img
            src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
            alt=""
            className="project-img-gallery h-[200px] object-contain"
          />
          <div className="bg-stone-300 w-full flex justify-center text-sm items-center h-[60px] text-center px-4 py-2 border-[1px] border-stone-300  font-medium text-black">
            {item.level !== "" && `${item.level} -`} {item.name}
          </div>
        </Link>
      );
    } else if (item.name === "Хүнсний агуулах") {
      return (
        <Link to={`/service/${item.id}`}>
          <img
            src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
            alt=""
            className="project-img-gallery h-[200px] object-contain"
          />
          <div className="bg-stone-300 w-full flex justify-center text-sm items-center h-[60px] text-center px-4 py-2 border-[1px] border-stone-300  font-medium text-black">
            {item.level !== "" && `${item.level} -`} {item.name}
          </div>
        </Link>
      );
    } else if (item.url !== undefined) {
      return (
        <a href={item.url} target="_blank">
          <img
            src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
            alt=""
            className="project-img-gallery h-[200px] object-contain"
          />
          <div className="bg-stone-300 w-full flex justify-center items-center h-[60px] text-center px-4 py-2 border-[1px] border-stone-300 text-sm font-medium text-black">
            {item.level !== "" && `${item.level} -`} {item.name}
          </div>
        </a>
      );
    } else if (item.description !== undefined || item.description !== null) {
      return (
        <a href={item.description!} target="_blank">
          <img
            src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
            alt=""
            className="project-img-gallery h-[200px] object-contain"
          />
          <div className="bg-stone-300 w-full flex justify-center items-center h-[60px] text-center px-4 py-2 border-[1px] border-stone-300 text-sm font-medium text-black">
            {item.level !== "" && `${item.level} -`} {item.name}
          </div>
        </a>
      );
    }
  };

  return (
    <>
      <section className="!p-0 box-border relative ">
        <img
          className="w-full max-h-[500px] bg-blend-darken block"
          src={window.location.origin + "/img/bg1.jpg"}
          alt=""
        />
        <div className="overlay1 text-center text-white text-3xl"></div>
      </section>
      <section className=" !p-[40px] bg-gray">
        <div className="container">
          <div className="row">
            <div className="wow fadeInUp pb-8" data-wow-duration="300ms">
              <h2 className="black-text md:text-left text-center md:mb-0 ">
                {t("menu.shop")}
              </h2>
              {/* <span className="xs-display-none">
                Lorem Ipsum is simply dummy text of the printing.
              </span> */}
              <div className="md:block hidden separator-line margin-three bg-black no-margin-lr sm-margin-top-three sm-margin-bottom-three no-margin-bottom"></div>
            </div>
            <div
              className=" text-uppercase sm-no-margin-top wow fadeInUp mt-8"
              data-wow-duration="600ms"
            >
              <ul className="cursor-pointer grid  text-black bg-zinc-300 grid-cols-3 sm:grid-cols-5 items-center justify-center text-center md:text-left">
                <li
                  className={clsx(
                    menu === Floor.ALL
                      ? "!font-bold bg-selected_menu text-white"
                      : "",
                    "!text-xl !w-full text-center hover:bg-selected_menu border-x border-zinc-300 py-4 hover:text-white"
                  )}
                  onClick={() => {
                    setMenu(Floor.ALL);
                  }}
                >
                  {t("action.all")}
                </li>
                <li
                  className={clsx(
                    menu === Floor.FIRST
                      ? "!font-bold bg-selected_menu text-white"
                      : "",
                    "!text-xl !w-full text-center hover:bg-selected_menu border-x border-zinc-300 py-4 hover:text-white"
                  )}
                  onClick={() => {
                    setMenu(Floor.FIRST);
                  }}
                >
                  1F
                </li>
                <li
                  className={clsx(
                    menu === Floor.SECOND
                      ? "!font-bold bg-selected_menu text-white"
                      : "",
                    "!text-xl !w-full text-center hover:bg-selected_menu border-x border-zinc-300 py-4 hover:text-white"
                  )}
                  onClick={() => {
                    setMenu(Floor.SECOND);
                  }}
                >
                  2F
                </li>
                <li
                  className={clsx(
                    menu === Floor.THIRD
                      ? "!font-bold bg-selected_menu text-white"
                      : "",
                    "!text-xl !w-full text-center hover:bg-selected_menu border-x border-zinc-300 py-4 hover:text-white"
                  )}
                  onClick={() => {
                    setMenu(Floor.THIRD);
                  }}
                >
                  3F
                </li>
                <li
                  className={clsx(
                    menu === Floor.FOURTH
                      ? "!font-bold bg-selected_menu text-white"
                      : "",
                    "!text-xl !w-full text-center hover:bg-selected_menu border-x border-zinc-300 py-4 hover:text-white"
                  )}
                  onClick={() => {
                    setMenu(Floor.FOURTH);
                  }}
                >
                  4F
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="wow fadeIn !pt-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lightbox-gallery items-center justify-items-center">
            {allListItem.map((item, idx) =>
              menu === Floor.ALL ? (
                <div
                  key={idx}
                  className=" w-full p-0 sm:w-full max-w-full h-full wow fadeIn cursor-pointer relative group bg-white border-[1px] border-[rgb(0 0 0 / 10%)]"
                >
                  {RenderCard(item)}
                </div>
              ) : menu === item.level ? (
                <div className=" w-full p-0 sm:w-full max-w-full h-full wow fadeIn cursor-pointer relative group bg-white border-[1px] border-[rgb(0 0 0 / 10%)]">
                  {RenderCard(item)}
                </div>
              ) : (
                <></>
              )
            )}

            {/* {
            dropdownItems.beans?.at(0)?.subCategories !== undefined &&
              dropdownItems.beans?.at(0)?.subCategories!.map((item, idx) =>
                item.level === "" && menu === Floor.ALL ? (
                  <div className=" w-full p-0 sm:w-full max-w-full h-full wow fadeIn cursor-pointer relative group bg-white border-[1px] border-[rgb(0 0 0 / 10%)]">
                    {item.id === 5 ? (
                      <Link to={`/shop/${item.id}`}>
                        <img
                          src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                          alt=""
                          className="project-img-gallery h-[200px] object-contain"
                        />
                        <div className="bg-stone-300 w-full flex justify-center items-center h-[60px] text-center px-4 py-2 border-[1px] border-stone-300 text-base font-medium text-black">
                          {item.level !== "" && `${item.level} -`} {item.name}
                        </div>
                      </Link>
                    ) : (
                      <>
                        <img
                          src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                          alt=""
                          className="project-img-gallery h-[200px] object-contain"
                        />
                        <div className="bg-stone-300 w-full flex justify-center items-center h-[60px] text-center px-4 py-2 border-[1px] border-stone-300 text-base font-medium text-black">
                          {item.level !== "" && `${item.level} -`} {item.name}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  menu === Floor.ALL && (
                    <div className=" w-full p-0 sm:w-full max-w-full h-full wow fadeIn cursor-pointer relative group bg-white border-[1px] border-[rgb(0 0 0 / 10%)]">
                      {item.id === 5 ? (
                        <Link to={`/shop/${item.id}`}>
                          <img
                            src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                            alt=""
                            className="project-img-gallery h-[200px] object-contain"
                          />
                          <div className="bg-stone-300 w-full flex justify-center items-center h-[60px] text-center px-4 py-2 border-[1px] border-stone-300 text-base font-medium text-black">
                            {item.level !== "" && `${item.level} -`} {item.name}
                          </div>
                        </Link>
                      ) : (
                        <>
                          <img
                            src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                            alt=""
                            className="project-img-gallery h-[200px] object-contain"
                          />
                          <div className="bg-stone-300 w-full flex justify-center items-center h-[60px] text-center px-4 py-2 border-[1px] border-stone-300 text-base font-medium text-black">
                            {item.level !== "" && `${item.level} -`} {item.name}
                          </div>
                        </>
                      )}
                    </div>
                  )
                )
              )}
            {brandItemList.beans !== undefined &&
              brandItemList.beans?.map((item, idx) =>
                item.level === menu ? (
                  <div className=" w-full p-0 sm:w-full max-w-full h-full wow fadeIn cursor-pointer relative group bg-white border-[1px] border-[rgb(0 0 0 / 10%)]">
                    <a href={item.url!} target="_blank">
                      <div className=" z-10 w-full h-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-white/100 to-transparent bg-gradient-to-t inset-x-0 bottom-0 pt-30 text-black text-center flex items-end">
                        <div>
                          <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                            <div className="font-bold">{item.name}</div>
                          </div>
                        </div>
                      </div>
                      <img
                        src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                        alt=""
                        className="project-img-gallery h-[200px] object-contain"
                      /> */}
            {/* <div className="blog-details">
                        <h5 className="margin-ten !text-lg !text-black no-margin-bottom xs-margin-top-five">
                          {item.name} - {item.level}
                        </h5>
                      </div> */}
            {/* </a>
                    <div className="bg-stone-300 w-full text-center px-4 py-2 border-[1px] border-stone-300 text-base font-medium text-black">
                      {item.level}
                    </div>
                  </div>
                ) : (
                  menu === Floor.ALL && (
                    <div className=" w-full p-0 sm:w-full max-w-full h-full wow fadeIn cursor-pointer relative group bg-white border-[1px] border-[rgb(0 0 0 / 10%)]">
                      <a href={item.url!} target="_blank">
                        <div className=" z-10 w-full h-full opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-white/100 to-transparent bg-gradient-to-t inset-x-0 bottom-0 pt-30 text-black text-center flex items-end">
                          <div>
                            <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                              <div className="font-bold">{item.name}</div>
                            </div>
                          </div>
                        </div>
                        <img
                          src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                          alt=""
                          className="project-img-gallery h-[200px] object-contain"
                        /> */}
            {/* <div className="blog-details">
                      <h5 className="margin-ten !text-lg !text-black no-margin-bottom xs-margin-top-five">
                        {item.name} - {item.level}
                      </h5>
                    </div> */}
            {/* </a>
                      <div className="bg-stone-300 w-full text-center px-4 py-2 border-[1px] border-stone-300 text-base font-medium text-black">
                        {item.level}
                      </div>
                    </div> */}
            {/* ) */}
            {/* ) */}
            {/* )} */}
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 wow fadeInUp">
            <div className="pagination">
              <FoodcityPagination
                onClick={(page: number) => {
                  brandSearchList({
                    offSet: 20,
                    name: "",
                    currentPage: page,
                  });
                }}
                totalPage={brandItemList.totalPage}
                currentPage={brandItemList.currentPage}
              />
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default BrandList;
