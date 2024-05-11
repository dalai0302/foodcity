import React, { useEffect, useState } from "react";
import { CategorySearchBean } from "../../model/CategorySearchResponseDto";
import { Link, useParams } from "react-router-dom";
import { CategorySearchRequestDto } from "../../model/CategorySearchRequestDto";
import { categorySearch } from "../../service/shopApiClient";
import {
  RESPONSE_SUCCESS,
  URL_BACKEND_CATEGORY_FILE,
} from "../../app/appConst";
import ErrorManager from "../../utility/ErrorManager";

const ShopDetail = () => {
  const { id } = useParams();
  const [dropdownItems, setDropdownItems] = useState<CategorySearchBean[]>([]);
  useEffect(() => {
    if (id !== undefined) {
      categorySearchList({
        id: parseInt(id),
        offSet: 100,
        name: "",
        currentPage: 0,
      });
    }
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

  return (
    // <>
    //   <section className="wow fadeIn blog-single-full-width-header fix-background parallax-fix">
    //     <img
    //       className="parallax-background-img"
    //       src="http/://placehold.it/1920x1080"
    //       alt=""
    //     />
    //     <div className="opacity-medium bg-black"></div>
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-7 col-sm-8 position-relative full-width-headline text-center center-col">
    //           <h2 className="white-text">
    //             <span>Here is the big headline</span> for your blog post
    //           </h2>

    //           <div className="posted-by text-uppercase">
    //             Posted by{" "}
    //             <a href="blog-masonry-3columns.html" className="white-text">
    //               Paul Scrivens
    //             </a>
    //           </div>
    //           <div className="blog-date">
    //             02 January 2015 |{" "}
    //             <a href="blog-masonry-3columns.html">Design</a>,{" "}
    //             <a href="blog-masonry-3columns.html">Branding</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section
    //     id="blog-slider-main"
    //     className="blog-slider wow fadeIn no-padding clearfix"
    //   >
    //     <div
    //       id="blog-slider"
    //       className="owl-carousel owl-theme dark-pagination"
    //     >
    //       <div className="item">
    //         <img src="http://placehold.it/1200x800" alt="" />
    //       </div>
    //       <div className="item">
    //         <img src="http://placehold.it/1200x800" alt="" />
    //       </div>
    //       <div className="item">
    //         <img src="http://placehold.it/1200x800" alt="" />
    //       </div>
    //       <div className="item">
    //         <img src="http://placehold.it/1200x800" alt="" />
    //       </div>
    //       <div className="item">
    //         <img src="http://placehold.it/1200x800" alt="" />
    //       </div>
    //       <div className="item">
    //         <img src="http://placehold.it/1200x800" alt="" />
    //       </div>
    //     </div>
    //   </section>
    //   <section className="wow fadeIn blog-details-text">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-8 col-sm-10 center-col text-center">
    //           <p className="text-large">
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has been the industry's standard dummy
    //             text
    //           </p>
    //           <p className="text-extra-large">
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has been the industry's standard dummy
    //             text ever since the 1500s. Lorem Ipsum is simply dummy text of
    //             the printing and typesetting industry. Lorem Ipsum has been the
    //             standard dummy text. Lorem Ipsum is simply dummy text of the
    //             printing and typesetting industry.
    //           </p>
    //           <p className="text-extra-large">
    //             Lorem Ipsum is simply dummy text of the printing and typesetting
    //             industry. Lorem Ipsum has been the industry's standard dummy
    //             text ever since the 1500s. Lorem Ipsum is simply dummy text of
    //             the printing and typesetting industry. Lorem Ipsum has been the
    //             standard dummy text. Lorem Ipsum is simply dummy text of the
    //             printing and typesetting industry. Lorem Ipsum has been the
    //             industry's standard dummy text ever since the 1500s. Lorem Ipsum
    //             is simply dummy text of the printing and typesetting industry.
    //           </p>
    //         </div>
    //         <div className="col-md-8 col-sm-10 center-col text-center">
    //           <div className="text-center margin-ten no-margin-bottom">
    //             <a
    //               className="btn social-icon social-icon-large button"
    //               href="#"
    //             >
    //               <i className="fa fa-facebook"></i>
    //             </a>
    //             <a
    //               className="btn social-icon social-icon-large button"
    //               href="#"
    //             >
    //               <i className="fa fa-twitter"></i>
    //             </a>
    //             <a
    //               className="btn social-icon social-icon-large button"
    //               href="#"
    //             >
    //               <i className="fa fa-google-plus"></i>
    //             </a>
    //             <a
    //               className="btn social-icon social-icon-large button"
    //               href="#"
    //             >
    //               <i className="fa fa-tumblr"></i>
    //             </a>
    //             <a
    //               className="btn social-icon social-icon-large button"
    //               href="#"
    //             >
    //               <i className="fa fa-instagram"></i>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
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
                {dropdownItems.at(0)?.fullName}
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
            {dropdownItems.at(0)?.subCategories !== null && dropdownItems.at(0)?.subCategories!.map((item, idx) => (
              <div
                className="col-md-3 col-sm-6 col-xs-6 blog-listing wow fadeInUp"
                data-wow-duration="300ms"
              >
                {/* <Link to={`/shop/${item.id}`}> */}
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
                {/* </Link> */}
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

export default ShopDetail;
