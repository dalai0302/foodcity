import React, { useEffect, useState } from "react";
import { CategorySearchRequestDto } from "../../model/CategorySearchRequestDto";
import { categorySearch } from "../../service/shopApiClient";
import {
  CategorySearchBean,
  CategorySearchData,
} from "../../model/CategorySearchResponseDto";
import {
  RESPONSE_SUCCESS,
  URL_BACKEND_CATEGORY_FILE,
} from "../../app/appConst";
import ErrorManager from "../../utility/ErrorManager";
import { Link } from "react-router-dom";
import FoodcityPagination from "../../components/foodcity/FoodcityPagination";
import { useTranslation } from "react-i18next";

const ShopList = () => {
  const { t } = useTranslation("global");

  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<CategorySearchData>(
    {} as CategorySearchData
  );
  const [subItems, setSubItems] = useState<CategorySearchBean[]>([]);

  useEffect(() => {
    categorySearchList({
      id: 1,
      offSet: 3,
      name: "",
      currentPage: 0,
    });
  }, []);

  async function categorySearchList(req: CategorySearchRequestDto) {
    try {
      const response = await categorySearch(req);
      if (response.status === RESPONSE_SUCCESS) {
        setDropdownItems(response.data);
      }
    } catch (error) {
      ErrorManager.handleRequestError(error);
    }
  }

  async function categorySearchSubList(req: CategorySearchRequestDto) {
    try {
      const response = await categorySearch(req);
      if (response.status === RESPONSE_SUCCESS) {
        setSubItems(response.data.beans);
      }
    } catch (error) {}
  }

  const handleSearchInputChange = (event: any) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
  };

  const handleDropdownItemClick = (item: number) => {
    // setSearchTerm(item);
    categorySearchSubList({
      id: item,
      offSet: 100,
      name: "",
      currentPage: 0,
    });

    setShowDropdown(false);
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
      {/* <div className="bg-black h-20 flex justify-center items-center">
        <h2 className="text-center text-white font-semibold">
          {t("menu.shop")}
        </h2>
      </div> */}

      <section className="wow fadeIn blog-full-width-section p-2 sm:!p-[40px]">
        <div className="mx-auto justify-center flex xl:flex-row  flex-col gap-2 sm:gap-8 p-2 xl:!p-[40px] relative">
          <div className="relative ">
            <div className="pb-2 sm:pb-[35px] sticky top-5">
              <h2 className="text-center text-black font-semibold ">
                {t("menu.shop")}
              </h2>
              <hr className="border-b-2 border-black" />
            </div>
          </div>
          <div className="row blog-full-width no-margin xs-no-padding">
            {dropdownItems.beans?.at(0)?.subCategories!.map((item, idx) => (
              <div
                className="col-md-3 col-sm-6 col-xs-6 mb-4"
                data-wow-duration="300ms"
              >
                <Link to={`/shop/${item.id}`}>
                  <div className="border rounded-full mx-auto w-[120px] h-[120px] sm:w-[220px] sm:h-[220px] shadow-lg">
                    <div className="h-[120px] sm:h-[220px]">
                      <img
                        className="w-full md:w-full h-full object-center rounded-full"
                        src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="blog-details w-full h-[60px]  text-black mt-2">
                    <div className="blog-title text-sm sm:text-base text-center font-semibold flex items-center h-full uppercase justify-center flex-wrap">
                      {item.name}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="row no-margin">
              <div className="col-md-12 col-sm-12 col-xs-12 wow fadeInUp">
                <div className="pagination">
                  <FoodcityPagination
                    onClick={(page: number) => {
                      // getNft(1, page);
                      categorySearch({
                        currentPage: page,
                        id: 1,
                        offSet: 3,
                        name: "",
                      });
                    }}
                    totalPage={dropdownItems.totalPage}
                    currentPage={dropdownItems.currentPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopList;
