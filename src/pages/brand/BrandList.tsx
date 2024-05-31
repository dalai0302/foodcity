import React, { useEffect, useState } from "react";
import { CategorySearchRequestDto } from "../../model/CategorySearchRequestDto";
import { brandSearch, categorySearch } from "../../service/shopApiClient";
import {
  RESPONSE_SUCCESS,
  URL_BACKEND_CATEGORY_FILE,
} from "../../app/appConst";
import { CategorySearchBean } from "../../model/CategorySearchResponseDto";
import ErrorManager from "../../utility/ErrorManager";
import { BrandSearchRequestDto } from "../../model/BrandSearchRequestDto";
import { BrandBean, BrandData } from "../../model/BrandSearchResponseDto";
import clsx from "clsx";
import FoodcityPagination from "../../components/foodcity/FoodcityPagination";
import { useTranslation } from "react-i18next";

enum Floor {
  // ALL = "ALL",
  FIRST = "1F",
  SECOND = "2F",
  THIRD = "3F",
  FOURTH = "4F",
}

const BrandList = () => {
  const { t } = useTranslation("global");

  const [brandItemList, setBrandItemList] = useState<BrandData>(
    {} as BrandData
  );
  const [menu, setMenu] = useState<Floor>(Floor.FIRST);

  useEffect(() => {
    setMenu(Floor.FIRST);

    brandSearchList({
      offSet: 100,
      name: "",
      currentPage: 0,
      // categoryId: 0,
    });
  }, []);

  async function brandSearchList(req: BrandSearchRequestDto) {
    try {
      const response = await brandSearch(req);
      if (response.status === RESPONSE_SUCCESS) {
        setBrandItemList(response.data);
      }
    } catch (error) {
      ErrorManager.handleRequestError(error);
    }
  }

  return (
    <>
      <section className=" !p-[40px] bg-gray">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-md-7 col-sm-12 wow fadeInUp"
              data-wow-duration="300ms"
            >
              <h2 className="black-text md:text-left text-center md:mb-0 mb-4">
                {t("menu.brand")}
              </h2>
              {/* <span className="xs-display-none">
                Lorem Ipsum is simply dummy text of the printing.
              </span> */}
              <div className="md:block hidden separator-line margin-three bg-black no-margin-lr sm-margin-top-three sm-margin-bottom-three no-margin-bottom"></div>
            </div>
            <div
              className="col-lg-4 col-md-5 col-sm-12 breadcrumb text-uppercase sm-no-margin-top wow fadeInUp"
              data-wow-duration="600ms"
            >
              <ul className="cursor-pointer text-center md:text-left">
                {/* <li
                  className={clsx(
                    menu === Floor.ALL ? "!font-bold" : "",
                    "!text-xl"
                  )}
                  onClick={() => {
                    setMenu(Floor.ALL);
                  }}
                >
                  ALL
                </li> */}
                <li
                  className={clsx(
                    menu === Floor.FIRST ? "!font-bold" : "",
                    "!text-xl"
                  )}
                  onClick={() => {
                    setMenu(Floor.FIRST);
                  }}
                >
                  1F
                </li>
                <li
                  className={clsx(
                    menu === Floor.SECOND ? "!font-bold" : "",
                    "!text-xl"
                  )}
                  onClick={() => {
                    setMenu(Floor.SECOND);
                  }}
                >
                  2F
                </li>
                <li
                  className={clsx(
                    menu === Floor.THIRD ? "!font-bold" : "",
                    "!text-xl"
                  )}
                  onClick={() => {
                    setMenu(Floor.THIRD);
                  }}
                >
                  3F
                </li>
                <li
                  className={clsx(
                    menu === Floor.FOURTH ? "!font-bold" : "",
                    "!text-xl"
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
            {brandItemList.beans !== undefined &&
              brandItemList.beans?.map(
                (item, idx) =>
                  item.level === menu && (
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
                        />
                        {/* <div className="blog-details">
                        <h5 className="margin-ten !text-lg !text-black no-margin-bottom xs-margin-top-five">
                          {item.name} - {item.level}
                        </h5>
                      </div> */}
                      </a>
                      <div className="bg-stone-300 w-full text-center px-4 py-2 border-[1px] border-stone-300 text-base font-medium text-black">{item.level}</div>
                    </div>
                  )
              )}
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
