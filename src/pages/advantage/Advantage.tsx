import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-cards";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Navigation,
  Pagination,
  Grid,
  Autoplay,
  FreeMode,
  EffectCards,
} from "swiper/modules";
import { useTranslation } from "react-i18next";

const Advantage = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <section className="!p-0 box-border relative bg-white">
        {t("language.english") === "en" ? (
          <img
            className="w-full max-h-[800px] bg-blend-darken block object-cover object-top"
            src={window.location.origin + "/img/advantage/1en.jpg"}
            alt=""
          />
        ) : (
          <img
            className="w-full max-h-[800px] bg-blend-darken block object-cover object-top"
            src={window.location.origin + "/img/advantage/1.jpg"}
            alt=""
          />
        )}
      </section>
      <section className="bg-gradient-to-r from-teal-300 to-lime-400">
        <div className="container px-10 mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div>
              <h3 className="title-med no-padding-bottom letter-spacing-2 text-black text-left">
                {t("action.choose")}
              </h3>
              <p className="text-med margin-five font-semibold text-black">
                <p className="m-0">{t("paragraph.choose1")}</p>
                <p className="m-0">{t("paragraph.choose2")}</p>
                <p className="m-0">{t("paragraph.choose3")}.</p>
                <p className="m-0">{t("paragraph.choose4")}</p>
                <p className="m-0">{t("paragraph.choose5")}</p>
                <p className="m-0">{t("paragraph.choose6")}</p>
                <p className="m-0">{t("paragraph.choose7")}</p>
                <p className="m-0">{t("paragraph.choose8")}</p>
                <p className="m-0">{t("paragraph.choose9")}</p>
                <p className="m-0">{t("paragraph.choose10")}</p>
                <p className="m-0">{t("paragraph.choose11")}</p>
                <p className="m-0">{t("paragraph.choose12")}</p>
                <p className="m-0">{t("paragraph.choose13")}</p>
                <p className="m-0">{t("paragraph.choose14")}</p>
              </p>
            </div>
            {t("language.english") === "en" ? (
              <Swiper
                className="mySwiper rounded-xl w-[250px] sm:w-[500px] !bg-none"
                spaceBetween={30}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
              >
                <SwiperSlide className="rounded-xl">
                  <img
                    className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl "
                    src={window.location.origin + "/img/advantage/1.png"}
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                  <img
                    className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                    src={window.location.origin + "/img/advantage/2.png"}
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                  <img
                    className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                    src={window.location.origin + "/img/advantage/3.png"}
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                  <img
                    className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                    src={window.location.origin + "/img/advantage/4.png"}
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                  <img
                    className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                    src={window.location.origin + "/img/advantage/5.png"}
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                  <img
                    className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                    src={window.location.origin + "/img/advantage/6.png"}
                  />
                </SwiperSlide>
              </Swiper>
            ) : (
              <Swiper
                className="mySwiper rounded-xl w-[250px] sm:w-[500px] !bg-none"
                spaceBetween={30}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
              >
                <SwiperSlide className="rounded-xl">
                  <img
                    className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl "
                    src={window.location.origin + "/img/advantage/1mn.png"}
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                  <img
                    className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                    src={window.location.origin + "/img/advantage/2mn.jpg"}
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                  <img
                    className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                    src={window.location.origin + "/img/advantage/3mn.png"}
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                  <img
                    className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                    src={window.location.origin + "/img/advantage/4mn.png"}
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                  <img
                    className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                    src={window.location.origin + "/img/advantage/5mn.png"}
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-xl">
                  <img
                    className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                    src={window.location.origin + "/img/advantage/6mn.png"}
                  />
                </SwiperSlide>
              </Swiper>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Advantage;
