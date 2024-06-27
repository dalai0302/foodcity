import React, { MouseEventHandler, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Navigation,
  Pagination,
  Grid,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  brandSearch,
  categorySearch,
  getBrandCategoryList,
} from "../../service/shopApiClient";
import {
  RESPONSE_SUCCESS,
  URL_BACKEND_CATEGORY_FILE,
} from "../../app/appConst";
import { CategorySearchRequestDto } from "../../model/CategorySearchRequestDto";
import { CategorySearchBean } from "../../model/CategorySearchResponseDto";
import ErrorManager from "../../utility/ErrorManager";
import { BrandBean } from "../../model/BrandSearchResponseDto";
import { BrandSearchRequestDto } from "../../model/BrandSearchRequestDto";
import ReactPlayer from "react-player";
import clsx from "clsx";
import ReactCountryFlag from "react-country-flag";
import { BrandCategoryResponseDto } from "../../model/BrandCategoryResponseDto";
import bg from "../../assets/images/image17177290490.jpg";

const Home = () => {
  const { t } = useTranslation("global");

  const [latestShopList, setLatestShopList] = useState<CategorySearchBean[]>(
    []
  );
  const [brandItemList, setBrandItemList] = useState<BrandBean[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const [visibility, setVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    id: "",
    name: "",
  });
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState<BrandCategoryResponseDto[]>([]);

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
    brandCategoryList();
  }, []);

  useEffect(() => {
    brandSearchList({
      offSet: 100,
      name: "",
      currentPage: 0,
      categoryId: parseInt(selectedOption.id),
    });
  }, [selectedOption]);

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

  async function brandCategoryList() {
    try {
      const response = await getBrandCategoryList();
      const sortedData = response.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      setOptions(sortedData);
    } catch (error) {
      ErrorManager.handleRequestError(error);
    }
  }

  // const lastThreeItems = latestShopList.at(0)?.subCategories?.slice(-3);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  const dropDownRender = () => {
    return (
      <div className="relative block text-center z-10 ">
        <div className="">
          <div
            className="select"
            onClick={(e: any) => {
              setVisibility(!visibility);
              setSearch("");
              // e.currentTarget.children[0].children[1].innerHTML = visibility
              //   ? "arrow_drop_down"
              //   : "arrow_drop_up";
            }}
          >
            <div className="selected-option">
              <span
                className="w-full flex justify-center h-full items-center uppercase"
                title={
                  selectedOption.name === ""
                    ? `${t("label.allCategory")}`
                    : selectedOption.name
                }
              >
                {selectedOption.name === ""
                  ? `${t("label.allCategory")}`
                  : selectedOption.name.length <= 20
                  ? selectedOption.name
                  : `${selectedOption.name.slice(0, 20)}...`}
              </span>
              <span className="flex justify-center h-full items-center uppercase">
                &#9660;
              </span>
            </div>
            {visibility && (
              <div className="options !cursor-pointer uppercase !z-50">
                <ul className="text-sm ">
                  <li
                    className="text-left"
                    data-value="default"
                    onClick={() =>
                      setSelectedOption({
                        id: "",
                        name: "",
                      })
                    }
                  >
                    {t("label.allCategory")}
                  </li>
                  {options.map((option, index) => (
                    <li
                      key={index}
                      className={clsx(
                        selectedOption.name === `${option.name}`
                          ? "active-option"
                          : null,
                        "text-left"
                      )}
                      onClick={() =>
                        setSelectedOption({
                          name: `${option.name}`,
                          id: `${option.id}`,
                        })
                      }
                    >
                      {option.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <section className="pb-0 pt-8">
        <div className="container !p-0">
          <Swiper
            className=" rounded-xl"
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
              <a href="https://www.facebook.com/fatpotfoodcity" target="_blank">
                <img
                  className="w-full h-[250px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/fatpot.png"}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.facebook.com/bar23sports" target="_blank">
                <img
                  className="w-full h-[250px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/bar23.png"}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.facebook.com/profile.php?id=100093659165960"
                target="_blank"
              >
                <img
                  className="w-full h-[250px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/royal.jpg"}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.facebook.com/HighStr"
                target="_blank"
              >
                <img
                  className="w-full h-[250px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/high_street.jpg"}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.facebook.com/lensgallery.mn"
                target="_blank"
              >
                <img
                  className="w-full h-[250px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/lens.jpg"}
                />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="!p-[40px]">
        <div className="container">
          {/* <div className="row">
            <div className="col-md-12 text-center pb-4">
              <h3 className="text-black">{t("label.brands")}</h3>
            </div>
          </div> */}
          <div className="row">
            <div className="flex justify-center mb-4">{dropDownRender()}</div>
            <Swiper
              slidesPerView={"auto"}
              grid={{
                rows: 2,
              }}
              freeMode={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={10}
              // navigation
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Grid, Autoplay, FreeMode]}
              className="mySwiper"
            >
              {brandItemList.map((item, idx) => (
                <SwiperSlide className="grid__slide !w-[150px] border-[1px] border-solid border-[#3B3B3C] cursor-grabbing">
                  <a href={item.url!} target="_blank">
                    <img
                      className="!w-[150px] !h-[150px] object-center object-contain p-2 m-0"
                      src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className="row">
            <div
              className="col-md-12 text-center wow fadeInUp"
              data-wow-duration="1200ms"
            >
              <Link
                to="/brands"
                className="btn btn-black btn-small margin-four no-margin-bottom"
              >
                {t("label.allBrand")}
              </Link>
            </div>
          </div> */}
        </div>
      </section>
      <section className="!p-0">
        {/* <ReactPlayer
          url={window.location.origin + "/video/sample-5s.mp4"}
          width="1920px"
          height="500px"
          // controls={true}
          playing={true}
          // playIcon={<button></button>}
          // light="https://i.stack.imgur.com/zw9Iz.png"
        /> */}
        <div className="relative flex items-center justify-center w-full h-[600px] overflow-hidden">
          <div className="relative z-30 p-5 text-2xl text-white w-full h-full bg-black  bg-opacity-50 opacity-35"></div>
          <video
            // autoplay={true}
            autoPlay
            loop
            // controls
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <source
              src={window.location.origin + "/video/foodcity.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section id="blog" className="wow fadeIn !p-[40px]">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="!mb-[30px] !text-black">
                {t("label.latestEvent")}
              </h3>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-4 col-sm-4 wow fadeInUp"
              data-wow-duration="300ms"
            >
              <a
                href="https://www.facebook.com/events/1704397849969088?ref=newsfeed"
                target="_blank"
              >
                <div className="blog-post">
                  <div className="blog-post-images rounded-xl mb-4">
                    <img
                      className="w-full rounded-xl object-cover h-[215px]"
                      src={window.location.origin + "/img/event/bg1.png"}
                      alt=""
                    />
                  </div>
                  <div className="post-details">
                    <span className="post-title !m-0">
                      FOOD CITY FAMILY EVENT
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-md-4 col-sm-4 wow fadeInUp"
              data-wow-duration="300ms"
            >
              <a
                href="https://www.facebook.com/photo/?fbid=122206960058003255&set=a.122137618106003255"
                target="_blank"
              >
                <div className="blog-post">
                  <div className="blog-post-images rounded-xl mb-4">
                    <img
                      className="w-full rounded-xl object-cover h-[215px]"
                      src={window.location.origin + "/img/event/bg2.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="post-details">
                    <span className="post-title !m-0">FOOD EVENT MART 8</span>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-md-4 col-sm-4 wow fadeInUp"
              data-wow-duration="300ms"
            >
              <a
                href="https://www.facebook.com/photo/?fbid=760003072921092&set=pcb.759992989588767"
                target="_blank"
              >
                <div className="blog-post">
                  <div className="blog-post-images rounded-xl mb-4">
                    <img
                      className="w-full rounded-xl object-cover h-[215px]"
                      src={window.location.origin + "/img/event/5.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="post-details">
                    <span className="post-title !m-0">АЛТАН НАМАР 2022</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 text-center wow fadeInUp"
              data-wow-duration="1200ms"
            >
              <Link
                to="/event"
                className="btn btn-black btn-small margin-four no-margin-bottom"
              >
                {t("label.allEvent")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="fix-background object-contain py-8"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="opacity-full bg-white"></div>
        <div className="container position-relative">
          <div className="row text-black">
            <div className="col-md-6 col-sm-12 sm-margin-bottom-ten text-left md:text-center">
              <h3 className="title-med no-padding-bottom letter-spacing-2 text-left">
                Биднийг сонгох шалтгаан
              </h3>
              <p className="text-med margin-five font-medium">
                <ul>
                  <p className="m-0">
                    - Нэгдсэн камерийн хяналт, холбоо дохиолол, галын системтэй.
                  </p>
                  <p className="m-0">- Хүнсний агуулах, хүйтэн зоорьтой.</p>
                  <p className="m-0">- Хүнсний итгэмжлэгдсэн лабораторитой.</p>
                  <p className="m-0">- Төв зам дагуу байрлалтай.</p>
                  <p className="m-0">- 24 цагийн харуул, хамгаалалттай.</p>
                  <p className="m-0">
                    - Цэвэр агаар шүүх, ашиг, бохир агаар зайлуулах, агаар
                    боловсруулах ЕВРО төхөөрөмжөөр тоноглогдсон.
                  </p>
                  <p className="m-0">
                    - Нэгдсэн оффис, үйлчилгээг хялбараар эрхэлдэг.
                  </p>
                </ul>
              </p>
              <div className="text-left mb-4">
                <Link
                  to={"/advantage"}
                  className="highlight-button-dark  btn btn-small button !m-0"
                >
                  {t("label.detail")}
                </Link>
              </div>
            </div>

            <div className="w-full mx-auto mt-auto ">
              <div className="col-md-2 col-sm-4  text-center margin-three xs-margin-bottom-ten">
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
                  30000 <span className="text-sm">м2</span>
                </h1>
                <p className="text-uppercase black-text letter-spacing-2 text-small margin-three">
                  цогцолбор төв
                </p>
              </div>
              <div className="col-md-2 col-sm-4 text-center margin-three">
                <i className="icon-bargraph medium-icon black-text display-block"></i>
                <h1 className="font-weight-600 margin-five no-margin-bottom">
                  140+
                </h1>
                <p className="text-uppercase black-text letter-spacing-2 text-small margin-three">
                  Худалдаа үйлчилгээ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="!p-[40px]">
        <div className="container">
          <div className="">
            <div className="col-md-5 col-sm-8  double-line center-col text-center no-margin-top">
              <div className="subheader bg-transparent">
                <h3 className="title-med !pb-[30px] !text-black letter-spacing-2">
                  {t("label.ourService")}
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center sm-margin-bottom-ten">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/fatpotfoodcity"
              >
                <img
                  className=" h-[265px] w-full sm:w-[265px] bg-white rounded-xl object-contain"
                  alt=""
                  src={window.location.origin + "/img/fatpot.jpg"}
                />
                <h5 className="margin-ten no-margin-bottom xs-margin-top-five post-title">
                  {t("brand.fatpot")}
                </h5>
              </a>
            </div>
            <div className="col-md-3 col-sm-6 text-center sm-margin-bottom-ten">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/happylandfoodcity"
              >
                <img
                  className="w-full sm:w-[265px] bg-white rounded-xl h-[265px] object-contain"
                  alt=""
                  src={window.location.origin + "/img/happyland.jpg"}
                />
                <h5 className="margin-ten no-margin-bottom xs-margin-top-five post-title">
                  {t("brand.happyLand")}
                </h5>
              </a>
            </div>
            <div className="col-md-3 col-sm-6 text-center xs-margin-bottom-ten ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/bar23sports"
              >
                <img
                  className="w-full sm:w-[265px] bg-white rounded-xl h-[265px] object-contain"
                  alt=""
                  src={window.location.origin + "/img/bar23.jpg"}
                />
                <h5 className="margin-ten no-margin-bottom xs-margin-top-five post-title">
                  {t("brand.bar23")}
                </h5>
              </a>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/FoodCityMall"
              >
                <img
                  className="w-full sm:w-[265px] bg-white rounded-xl h-[265px] object-contain"
                  alt=""
                  src={window.location.origin + "/img/meat.jpg"}
                />
                <h5 className="margin-ten no-margin-bottom xs-margin-top-five post-title">
                  {t("brand.foodcityMeat")}
                </h5>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.996181373831!2d106.85274957694857!3d47.87840117121617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96935dd0e02fc9%3A0x8e2792532f91f140!2sFood%20City!5e0!3m2!1smn!2smn!4v1717128032029!5m2!1smn!2smn"
          width="100%"
          height="450"
          style={{ border: "0px" }}
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;
