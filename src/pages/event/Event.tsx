import React, { useEffect, useState } from "react";
import { CategorySearchBean } from "../../model/CategorySearchResponseDto";
import { CategorySearchRequestDto } from "../../model/CategorySearchRequestDto";
import { categorySearch } from "../../service/shopApiClient";
import { RESPONSE_SUCCESS } from "../../app/appConst";
import ErrorManager from "../../utility/ErrorManager";
import { useTranslation } from "react-i18next";
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

const Event = () => {
  const { t } = useTranslation("global");

  const [categoryItemList, setCategoryItemList] = useState<
    CategorySearchBean[]
  >([]);

  useEffect(() => {
    categorySearchList({
      id: 3,
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
              <a
                className="text-[#3B3B3C]"
                href="https://www.facebook.com/events/1704397849969088?ref=newsfeed"
                target="_blank"
              >
                <img
                  className="w-full h-[250px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/event/bg1.png"}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                className="text-[#3B3B3C]"
                href="https://www.facebook.com/events/1089291644971633/?active_tab=discussion"
                target="_blank"
              >
                <img
                  className="w-full h-[250px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/event/bg2.jpg"}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                className="text-[#3B3B3C]"
                href="https://www.facebook.com/FoodCityMall"
                target="_blank"
              >
                <img
                  className="w-full h-[250px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/event/bg3.jpg"}
                />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="py-8">
        <div className=" h-20 flex justify-center items-center">
          <h2 className="text-center text-black font-semibold">
            {t("menu.event")}
          </h2>
        </div>
      </section>
      <section className="pt-0">
        <div className="container mx-auto">
          <div className="mx-auto w-full xl:w-10/12">
            <div className="bg-[#3B3B3C] uppercase mb-8 border-[1px] border-[#73653A] border-solid p-4 text-white text-xl text-center">
              {t("label.latestEvent")}
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="border-[1px] border-[#73653A] flex md:flex-row flex-col">
                <div className="sm:w-[60%] px-8 py-6 flex flex-col justify-center border-none sm:border-r md:border-[#73653A]">
                  <div>
                    <span className="bg-[#3B3B3C] py-1 px-2 text-center text-white font-semibold">
                      FOOD
                    </span>
                  </div>
                  <div className="my-5">
                    <h4 className="text-[#3B3B3C] text-2xl max-sm:underline font-semibold hover:underline cursor-pointer">
                      <a
                        className="text-[#3B3B3C]"
                        href="https://www.facebook.com/events/1089291644971633/?active_tab=discussion"
                        target="_blank"
                      >
                        FOOD EVENT MART 8
                      </a>
                    </h4>{" "}
                  </div>
                  <p className="text-[#73653A] text-sm font-bold m-0">
                    TUESDAY, MARCH 8, 2022 AT 11 AM – 7 PM
                  </p>
                </div>
                <div className="w-full sm:w-[40%]">
                  <Swiper
                    className=""
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
                        className="w-full h-[250px] object-cover"
                        src={window.location.origin + "/img/event/1.jpg"}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-[250px] object-cover"
                        src={window.location.origin + "/img/event/2.jpg"}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-[250px] object-cover"
                        src={window.location.origin + "/img/event/3.jpg"}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-[250px] object-cover"
                        src={window.location.origin + "/img/event/4.jpg"}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="border-[1px] border-[#73653A] flex md:flex-row flex-col">
                <div className="w-full sm:w-[60%] px-8 py-6 flex flex-col justify-center border-none sm:border-r md:border-[#73653A]">
                  <div>
                    <span className="bg-[#3B3B3C] uppercase py-1 px-2 text-center text-white font-semibold">
                      FAMILY
                    </span>
                  </div>
                  <div className="my-5">
                    <h4 className="text-[#3B3B3C] text-2xl font-semibold max-sm:underline hover:underline cursor-pointer">
                      <a
                        className="text-[#3B3B3C]"
                        href="https://www.facebook.com/events/1704397849969088?ref=newsfeed"
                        target="_blank"
                      >
                        FOOD CITY FAMILY EVENT
                      </a>
                    </h4>{" "}
                  </div>
                  <p className="text-[#73653A] text-sm font-bold m-0">
                    4-р сарын 13-ны Бямба гарагт
                  </p>
                </div>
                <div className="w-full sm:w-[40%]">
                  <Swiper
                    className=""
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
                        className="w-full h-[250px] object-cover"
                        src={window.location.origin + "/img/event/01.jpeg"}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-[250px] object-cover"
                        src={window.location.origin + "/img/event/02.jpeg"}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-[250px] object-cover"
                        src={window.location.origin + "/img/event/03.jpeg"}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-[250px] object-cover"
                        src={window.location.origin + "/img/event/04.jpeg"}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-[250px] object-cover"
                        src={window.location.origin + "/img/event/05.jpeg"}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="border-[1px] border-[#73653A] flex md:flex-row flex-col">
                <div className="sm:w-[60%] px-8 py-6 flex flex-col justify-center border-none sm:border-r md:border-[#73653A]">
                  <div>
                    <span className="bg-[#3B3B3C] uppercase py-1 px-2 text-center text-white font-semibold">
                      FOOD
                    </span>
                  </div>
                  <div className="my-5">
                    <h4 className="text-[#3B3B3C] max-sm:underline text-2xl font-semibold hover:underline cursor-pointer">
                      <a
                        className="text-[#3B3B3C]"
                        href="https://www.facebook.com/events/5044974338936762"
                        target="_blank"
                      >
                        АЛТАН НАМАР 2022
                      </a>
                    </h4>{" "}
                  </div>
                  <p className="text-[#73653A] text-sm font-bold m-0">
                    OCT 7, 2022 AT 11 AM – OCT 9, 2022 AT 6 PM
                  </p>
                </div>
                <div className="w-full sm:w-[40%]">
                  <Swiper
                    className=""
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
                        className="w-full h-[250px] object-cover"
                        src={window.location.origin + "/img/event/5.jpg"}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-[250px] object-cover"
                        src={window.location.origin + "/img/event/6.jpg"}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="w-full h-[250px] object-cover"
                        src={window.location.origin + "/img/event/7.jpg"}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
