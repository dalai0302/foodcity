import React from "react";
import { useTranslation } from "react-i18next";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SportBar = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <section className="!p-0 ">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-[52%] w-full">
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
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/sportbar/bg.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/sportbar/1.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/sportbar/2.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/sportbar/3.jpg"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="md:w-[48%] w-full md:h-[600px] bg-[#3B3B3C] p-12">
            <div className="border-[1px] border-[#73653A] w-full h-full p-8">
              <h2 className="text-white uppercase text-left sm:mt-4 mb-8 font-poppins">
                {t("sportBar.text1")}
              </h2>
              <p className="text-white font-semibold text-base">
                {t("sportBar.p1")}
                <br /> {t("sportBar.p2")}
                <br />
                <ul className="">
                  <li>{t("sportBar.txt1")}</li>
                  <li>{t("sportBar.txt2")} </li>
                  <li>{t("sportBar.txt3")}</li>
                  <li>{t("sportBar.txt4")}</li>
                  <li>{t("sportBar.txt5")}</li>
                  <li>{t("sportBar.txt6")}</li>
                  <li>{t("sportBar.txt7")}</li>
                  <li>{t("sportBar.txt8")}</li>
                  <li>
                    <b>{t("sportBar.location")}</b>
                  </li>
                  <li>
                    <b>{t("sportBar.contact")}</b>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="!p-[40px]">
        <div className="container mx-auto">
          <div className="">
            <div className="md:px-8 px-0 mb-8">
              <p className="text-center font-semibold text-2xl text-[#3B3B3C] mb-8">
                BAR 23 СПОРТ БАР
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full h-[600px] overflow-hidden">
            <div className="relative z-30 p-5 text-2xl text-white w-full h-full bg-black  bg-opacity-50 opacity-35"></div>
            <video
              //   loop
              autoPlay
              controls
              muted
              className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
              <source
                src={window.location.origin + "/video/bar23.mp4"}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default SportBar;
