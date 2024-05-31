import React from "react";
import { useTranslation } from "react-i18next";
import bg from "../../assets/images/foodcity.jpg";
import txture from "../../assets/images/texture.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
const About = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <section
        className="fix-background object-contain fadeIn h-[300px] pb-0"
        style={{ backgroundImage: `url(${txture})` }}
      >
        <div className="opacity-full bg-[rgba(0,0,0,0.5)]"></div>
        <div className="container position-relative">
          <div className="row flex justify-center">
            <div className="col-md-4 text-center mx-auto col-sm-12">
              <div className="text-2xl text-center text-uppercase text-white mb-6">
                {t("label.introduction")}
              </div>
              <div className="wide-separator-line no-margin-lr"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="wow fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 center-col">
              <div className="tab-style1">
                {/* <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="wide-separator-line no-margin-lr"></div>
                  </div>
                </div> */}
                <div className="tab-content">
                  <div className="tab-pane med-text fade in active">
                    <div className="row">
                      <div className="col-md-12 col-sm-12 text-left text-black">
                        <p className="text-left text-base leading-relaxed">
                          {t("paragraph.about1")}
                        </p>
                      </div>
                      {/*  */}
                      <div className="col-md-12 col-sm-12 block mb-4">
                        <img className="rounded-lg" src={bg} alt="" />
                      </div>
                      <div className="col-md-12 col-sm-12 text-left text-black">
                        <p className="text-left text-base leading-relaxed">
                          {t("paragraph.about2")}
                        </p>
                      </div>
                      <div className="col-md-12 col-sm-12 text-left text-black">
                        <p className="text-left text-base leading-relaxed">
                          {t("paragraph.about3")}
                        </p>
                      </div>
                      <div className="col-md-12 col-sm-12 block mb-4">
                        <img
                          className="rounded-lg"
                          src={window.location.origin + "/img/about/bg1.jpg"}
                          alt=""
                        />
                      </div>
                      {/* <div className="col-md-12 col-sm-12 text-left text-black">
                        <p className="text-left text-base leading-relaxed">
                          {t("paragraph.about4")}
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
