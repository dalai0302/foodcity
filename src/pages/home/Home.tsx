import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Navigation,
  Pagination,
  Grid,
  Autoplay,
} from "swiper/modules";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { brandSearch, categorySearch } from "../../service/shopApiClient";
import {
  RESPONSE_SUCCESS,
  URL_BACKEND_CATEGORY_FILE,
} from "../../app/appConst";
import { CategorySearchRequestDto } from "../../model/CategorySearchRequestDto";
import { CategorySearchBean } from "../../model/CategorySearchResponseDto";
import ErrorManager from "../../utility/ErrorManager";
import { BrandBean } from "../../model/BrandSearchResponseDto";
import { BrandSearchRequestDto } from "../../model/BrandSearchRequestDto";

const Home = () => {
  const { t } = useTranslation();

  const [latestShopList, setLatestShopList] = useState<CategorySearchBean[]>(
    []
  );
  const [brandItemList, setBrandItemList] = useState<BrandBean[]>([]);

  useEffect(() => {
    categorySearchShopList({
      id: 1,
      offSet: 100,
      name: "",
      currentPage: 0,
    });
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

  async function categorySearchShopList(req: CategorySearchRequestDto) {
    try {
      const response = await categorySearch(req);
      if (response.status === RESPONSE_SUCCESS) {
        setLatestShopList(response.data.beans);
      }
    } catch (error) {
      ErrorManager.handleRequestError(error);
    }
  }

  const lastThreeItems = latestShopList.at(0)?.subCategories?.slice(-3);

  return (
    <div>
      <section className="pt-0">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <img
              className="w-full md:h-[800px] object-cover"
              src={window.location.origin + "/img/bg4.jpg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full md:h-[800px] object-cover"
              src={window.location.origin + "/img/bg3.jpg"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="w-full md:h-[800px] object-cover"
              src={window.location.origin + "/img/bg5.jpg"}
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="!p-0">
        <div className="container">
          <div className="row">
            <Swiper
              slidesPerView={3}
              grid={{
                rows: 1,
              }}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Grid]}
              className="mySwiper"
            >
              {brandItemList.map((item, idx) => (
                <SwiperSlide className="grid__slide !w-[200px]">
                  <img
                    className="w-[200px] mb-6"
                    src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="row">
            <div
              className="col-md-12 text-center wow fadeInUp"
              data-wow-duration="1200ms"
            >
              <Link
                to="/brands"
                className="btn btn-black btn-small margin-four no-margin-bottom"
              >
                Бүх брэнд
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="blog" className="wow fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="section-title">Сүүлд нэмэгдсэн дэлгүүр</h3>
            </div>
          </div>
          <div className="row">
            {lastThreeItems?.map((item, idx) => (
              <div
                className="col-md-4 col-sm-4 wow fadeInUp"
                data-wow-duration="300ms"
              >
                <div className="blog-post">
                  <div className="blog-post-images">
                    <img
                      className="w-full object-cover h-[215px]"
                      src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoSm}`}
                      alt=""
                    />
                  </div>
                  <div className="post-details">
                    <span className="post-title">{item.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div
              className="col-md-12 text-center wow fadeInUp"
              data-wow-duration="1200ms"
            >
              <Link
                to="/shop"
                className="btn btn-black btn-small margin-four no-margin-bottom"
              >
                Бүх дэлгүүр
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="fix-background"
        style={{ backgroundImage: `url('http://placehold.it/1920x1100')` }}
      >
        <div className="opacity-full bg-white"></div>
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-4 col-sm-12 sm-margin-bottom-ten sm-text-center">
              <h3 className="title-med no-padding-bottom letter-spacing-2">
                Биднийг яагаад сонгох вэ ?
              </h3>
              <p className="text-med margin-five">
                Худалдаа үйлчилгээний салбарт шинэ стандартыг нэвтрүүлэх, олон
                улсын жишигт нийцсэн үйлчилгээ үзүүлэх худалдааны төв.
              </p>
              <Link
                to={"/about"}
                className="highlight-button-dark btn btn-small button"
              >
                Дэлгэрэнгүй
              </Link>
            </div>
            <div className="col-md-2 col-sm-4 col-md-offset-2 text-center margin-three xs-margin-bottom-ten">
              <i className="icon-profile-male medium-icon black-text display-block"></i>
              <h1 className="font-weight-600 margin-five no-margin-bottom">
                300+
              </h1>
              <p className="text-uppercase black-text letter-spacing-2 text-small margin-three">
                ажлын байр
              </p>
            </div>
            <div className="col-md-2 col-sm-4 text-center margin-three xs-margin-bottom-ten">
              <i className="icon-global medium-icon black-text display-block"></i>
              <h1 className="font-weight-600 margin-five no-margin-bottom">
                32000 <span className="text-sm">м2</span>
              </h1>
              <p className="text-uppercase black-text letter-spacing-2 text-small margin-three">
                цогцолбор төв
              </p>
            </div>
            <div className="col-md-2 col-sm-4 text-center margin-three">
              <i className="icon-bargraph medium-icon black-text display-block"></i>
              <h1 className="font-weight-600 margin-five no-margin-bottom">
                100+
              </h1>
              <p className="text-uppercase black-text letter-spacing-2 text-small margin-three">
                Худалдаа үйлчилгээ
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-8 dividers-header double-line center-col text-center margin-ten no-margin-top">
              <div className="subheader bg-white">
                <h3 className="title-med no-padding-bottom letter-spacing-2">
                  Бидний үйлчилгээ
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center sm-margin-bottom-ten">
              <img
                className="w-full h-[265px] object-contain"
                alt=""
                src={window.location.origin + "/img/fatpot.png"}
              />
              <h5 className="margin-ten no-margin-bottom xs-margin-top-five">
                FAT POT
              </h5>
            </div>
            <div className="col-md-3 col-sm-6 text-center sm-margin-bottom-ten">
              <img
                className="w-full h-[265px] object-contain"
                alt=""
                src={window.location.origin + "/img/happyland.jpg"}
              />
              <h5 className="margin-ten no-margin-bottom xs-margin-top-five">
                Happy Land
              </h5>
            </div>
            <div className="col-md-3 col-sm-6 text-center xs-margin-bottom-ten">
              <img
                className="w-full h-[265px] object-contain"
                alt=""
                src={window.location.origin + "/img/bar23.png"}
              />
              <h5 className="margin-ten no-margin-bottom xs-margin-top-five">
                BAR 23
              </h5>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <img
                className="w-full h-[265px] object-contain"
                alt=""
                src={window.location.origin + "/img/meat.jpg"}
              />
              <h5 className="margin-ten no-margin-bottom xs-margin-top-five">
                Foodcity meat махан цех
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
