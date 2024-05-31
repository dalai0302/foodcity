import React, { useEffect, useState } from "react";
import { CategorySearchRequestDto } from "../../model/CategorySearchRequestDto";
import { categorySearch } from "../../service/shopApiClient";
import {
  RESPONSE_SUCCESS,
  URL_BACKEND_CATEGORY_FILE,
} from "../../app/appConst";
import { CategorySearchBean } from "../../model/CategorySearchResponseDto";
import ErrorManager from "../../utility/ErrorManager";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

enum Floor {
  FIRST = "1F",
  SECOND = "2F",
  THIRD = "3F",
  FOURTH = "4F",
}

const Guide = () => {
  const { t } = useTranslation("global");

  const [menu, setMenu] = useState<Floor>(Floor.FIRST);
  const [categoryItemList, setCategoryItemList] = useState<
    CategorySearchBean[]
  >([]);

  useEffect(() => {
    setMenu(Floor.FIRST);
  }, []);

  useEffect(() => {
    categorySearchList({
      id: 2,
      offSet: 100,
      name: "",
      currentPage: 0,
    });
  }, []);

  async function categorySearchList(req: CategorySearchRequestDto) {
    try {
      const response = await categorySearch(req);
      if (response.status === RESPONSE_SUCCESS) {
        setCategoryItemList(response.data.beans);
      }
    } catch (error) {
      ErrorManager.handleRequestError(error);
    }
  }

  return (
    <>
      <section className=" sm:!p-[40px] bg-gray">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-md-7 col-sm-12 wow fadeInUp"
              data-wow-duration="300ms"
            >
              <h2 className="black-text pb-2 md:text-left text-center">{t("menu.guide")}</h2>
              {/* <span className="xs-display-none">
                Lorem Ipsum is simply dummy text of the printing.
              </span> */}
              <div className="separator-line margin-three bg-black no-margin-lr sm-margin-top-three sm-margin-bottom-three no-margin-bottom  xs-display-none"></div>
            </div>
            <div
              className="col-lg-4 col-md-5 col-sm-12 breadcrumb !mt-0 text-uppercase sm-no-margin-top wow fadeInUp"
              data-wow-duration="600ms"
            >
              <ul className="cursor-pointer text-center">
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

      <section className="wow fadeIn !pt-0 !p-[40px]">
        <div className="container">
          <div className="row lightbox-gallery">
            {categoryItemList.at(0)?.subCategories!.map(
              (item, idx) =>
                item.level === menu && (
                  <div
                    className="col-md-3  col-sm-6 wow fadeIn mb-6 relative group"
                    data-wow-duration="300ms"
                  >
                    {/* <a href={item.url!} target="_blank"> */}
                    {/* from-white/100 to-transparent bg-gradient-to-t */}
                    <div className="rounded-xl z-50 w-2/3 h-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute bg-white bottom-0 left-[100px] pt-30 text-black flex items-end">
                      <div className="h-full">
                        <div className="transform-gpu h-full p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 flex items-center transform transition duration-300 ease-in-out">
                          <div className="font-bold">
                            {item.name} - {item.level}
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                      alt=""
                      className="project-img-gallery w-[256px] h-[256px] object-cover mx-auto"
                    />
                    <div className="blog-details p-2 md:hidden block">
                      <h5 className=" text-center !text-lg !text-black no-margin-bottom ">
                        {item.name} - {item.level}
                      </h5>
                    </div>
                    {/* <div className="blog-details">
                        <h5 className="margin-ten !text-lg !text-black no-margin-bottom xs-margin-top-five">
                          {item.name} - {item.level}
                        </h5>
                      </div> */}
                    {/* </a> */}
                  </div>
                )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Guide;
