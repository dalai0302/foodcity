import React from "react";
import { useTranslation } from "react-i18next";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FcMeat = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <section className="!p-0 ">
        <div className="flex min-h-[500px] flex-row text-black">
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
                  className="w-full h-[300px] md:h-[600px] object-contain"
                  src={window.location.origin + "/img/fcmeat/1.jpg"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="md:w-[48%] w-full md:h-[600px] bg-[#3B3B3C] p-12">
            <div className="border-[1px] border-[#73653A] w-full h-full p-8">
              <h2 className="text-white uppercase text-left sm:mt-4 mb-8 font-poppins">
                Food city Meat
              </h2>
              <p className="text-white font-semibold text-base">
                {t("fcMeat.text1")}
              </p>
              <p className="text-white font-semibold text-base">
                {t("fcMeat.address")}
              </p>
              <p className="text-white font-semibold text-base">
                {t("fcMeat.contact")}{" "}
                <a
                  className="text-white font-semibold text-base"
                  href="tel:+97676112223"
                >
                  76112223
                </a>
              </p>
              <p className="text-white items-center flex gap-2">
                <span className="text-white font-semibold text-base">
                  {t("action.socialLink")}
                </span>
                <a target="_blank" href="https://www.facebook.com/foodcitymeat">
                  <i className="fa fa-facebook text-white before:text-2xl"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/foodcitymeat"
                >
                  <i className="fa fa-instagram text-white before:text-2xl"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="!p-[40px]">
        <div className="container mx-auto">
          <div className="">
            <div className="md:px-8 px-0 mb-8">
              <p className="text-center font-semibold text-2xl text-[#3B3B3C] mb-8">
                Food city Meat
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full h-[600px] overflow-hidden">
            <div className="relative z-30 p-5 text-2xl text-white w-full h-full bg-black  bg-opacity-50 opacity-35"></div>
            <video
              //   loop
            //   autoPlay
              controls
              muted
              className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
              <source
                src={window.location.origin + "/video/meat.mp4"}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default FcMeat;
