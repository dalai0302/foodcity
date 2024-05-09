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

const ShopList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<CategorySearchBean[]>([]);
  const [subItems, setSubItems] = useState<CategorySearchBean[]>([]);

  useEffect(() => {
    categorySearchList({
      id: 1,
      offSet: 100,
      name: "",
      currentPage: 0,
    });
  }, []);

  async function categorySearchList(req: CategorySearchRequestDto) {
    try {
      const response = await categorySearch(req);
      if (response.status === RESPONSE_SUCCESS) {
        setDropdownItems(response.data.beans);
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
      <section className=" page-title bg-gray">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 col-md-7 col-sm-12 wow fadeInUp"
              data-wow-duration="300ms"
            >
              <h1 className="black-text">
                {/* {subItems.length > 0
                  ? subItems.at(0)?.fullName
                  : dropdownItems.at(0)?.name} */}
                Дэлгүүр
              </h1>
              <span className="xs-display-none">
                {/* Lorem Ipsum is simply dummy text of the printing. */}
              </span>
              <div className="separator-line margin-three bg-black no-margin-lr sm-margin-top-three sm-margin-bottom-three no-margin-bottom xs-display-none"></div>
            </div>
            <div className="col-md-3 col-sm-5 pull-right">
              {/* <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                  onFocus={() => setShowDropdown(true)}
                />
                {showDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
                    <div className="py-1">
                      {dropdownItems
                        .at(0)
                        ?.subCategories!.map((item, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleDropdownItemClick(item.id)}
                          >
                            {item.name}
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="wow fadeIn blog-full-width-section">
        <div className="container">
          <div className="row blog-full-width no-margin xs-no-padding">
            {dropdownItems.at(0)?.subCategories!.map((item, idx) => (
              <div
                className="col-md-3 col-sm-6 col-xs-6 blog-listing wow fadeInUp"
                data-wow-duration="300ms"
              >
                <Link to={`/shop/${item.id}`}>
                  <div className="">
                    <img
                      src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoSm}`}
                      alt=""
                    />
                  </div>
                  <div className="blog-details">
                    <div className="blog-title">{item.name}</div>

                    <div className="separator-line bg-black no-margin-lr"></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="row no-margin">
            <div className="col-md-12 col-sm-12 col-xs-12 wow fadeInUp">
              <div className="pagination">
                <a href="#">
                  <img src={"images/arrow-pre-small.png"} alt="" />
                </a>
                <a href="#" className="active">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">
                  <img src="images/arrow-next-small.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopList;
