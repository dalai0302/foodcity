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
import { BrandBean } from "../../model/BrandSearchResponseDto";
import clsx from "clsx";

enum Floor {
  FIRST = "1F",
  SECOND = "2F",
  THIRD = "3F",
  FOURTH = "4F",
}

const BrandList = () => {
  const [brandItemList, setBrandItemList] = useState<BrandBean[]>([]);
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
        setBrandItemList(response.data.beans);
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
              <h1 className="black-text">Брэнд</h1>
              {/* <span className="xs-display-none">
                Lorem Ipsum is simply dummy text of the printing.
              </span> */}
              <div className="separator-line margin-three bg-black no-margin-lr sm-margin-top-three sm-margin-bottom-three no-margin-bottom xs-display-none"></div>
            </div>
            <div
              className="col-lg-4 col-md-5 col-sm-12 breadcrumb text-uppercase sm-no-margin-top wow fadeInUp xs-display-none"
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
            {brandItemList.map(
              (item, idx) =>
                item.level === menu && (
                  <div className="col-md-3 col-sm-6 wow fadeIn">
                    <img
                      src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                      alt=""
                      className="project-img-gallery"
                    />
                    <div className="blog-details">
                      <h5 className="margin-ten !text-lg !text-black no-margin-bottom xs-margin-top-five">
                        {item.name} - {item.level}
                      </h5>
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

export default BrandList;
