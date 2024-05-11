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

enum Floor {
  FIRST = "1F",
  SECOND = "2F",
  THIRD = "3F",
  FOURTH = "4F",
}

const Guide = () => {
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
      <section className=" page-title bg-gray">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-md-7 col-sm-12 wow fadeInUp"
              data-wow-duration="300ms"
            >
              <h1 className="black-text">Хөтөч</h1>
              {/* <span className="xs-display-none">
                Lorem Ipsum is simply dummy text of the printing.
              </span> */}
              <div className="separator-line margin-three bg-black no-margin-lr sm-margin-top-three sm-margin-bottom-three no-margin-bottom xs-display-none"></div>
            </div>
            <div
              className="col-lg-4 col-md-5 col-sm-12 breadcrumb !mt-0 text-uppercase sm-no-margin-top wow fadeInUp xs-display-none"
              data-wow-duration="600ms"
            >
              <ul className="cursor-pointer">
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

      <section className="wow fadeIn">
        <div className="container">
          <div className="row lightbox-gallery">
            {categoryItemList.at(0)?.subCategories!.map(
              (item, idx) =>
                item.level === menu && (
                  <div className="col-md-3 col-sm-6 wow fadeIn mb-6" data-wow-duration="300ms">
                    <div className="blog-image">
                      <img
                        className="!xl:min-h-[212.5px] !min-h-[265.75px]"
                        src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                        alt=""
                      />
                    </div>
                    <div className="blog-details">
                      <div className="blog-date !font-bold !text-black !text-base">
                        {item.level}
                      </div>
                      <div className="blog-title !text-base">{item.name}</div>

                      <div className="separator-line bg-black no-margin-lr"></div>
                    </div>
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
