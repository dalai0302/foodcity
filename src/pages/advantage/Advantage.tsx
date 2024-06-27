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

const Advantage = () => {
  return (
    <>
      <section className="!p-0 box-border relative bg-white">
        <img
          className="w-full max-h-[800px] bg-blend-darken block object-cover object-top"
          src={window.location.origin + "/img/advantage/1.jpg"}
          alt=""
        />
      </section>
      <section className="bg-gradient-to-r from-teal-300 to-lime-400">
        <div className="container px-10 mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div>
              <h3 className="title-med no-padding-bottom letter-spacing-2 text-black text-left">
                Биднийг сонгох шалтгаан
              </h3>
              <p className="text-med margin-five font-semibold text-black">
                <br />- Нэгдсэн камерийн хяналт, холбоо дохиолол, галын
                системтэй.
                <br />- Хүнсний агуулах, хүйтэн зоорьтой.
                <br />- Хүнсний итгэмжлэгдсэн лабораторитой.
                <br />- Төв зам дагуу байрлалтай.
                <br />- 24 цагийн харуул, хамгаалалттай.
                <br />- Галын утаа сорох, цэвэр агааржуулалтын системтэй.
                <br />- Цэвэр агаар шүүх, ашиг, бохир агаар зайлуулах, агаар
                боловсруулах ЕВРО төхөөрөмжөөр тоноглогдсон.
                <br />- Төвлөрсөн дулаан, цэвэр бохир ус, цахилгааны шугам
                сүлжээнд холбогдсон.
                <br />- 700 автомашины зогсоолтой.
                <br />- Харанхуй лифт 7ш.
                <br />- Ачааны лифт 2 ш.
                <br />- Урд тал зам.
                <br />- Нэгдсэн оффис, үйлчилгээг хялбараар эрхэлдэг.
                <br />- Давхар бүр ариун цэврийн өрөөтэй.
              </p>
            </div>
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
                  src={window.location.origin + "/img/advantage/2.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-xl">
                <img
                  className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                  src={window.location.origin + "/img/advantage/3.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-xl">
                <img
                  className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                  src={window.location.origin + "/img/advantage/4.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-xl">
                <img
                  className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                  src={window.location.origin + "/img/advantage/5.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-xl">
                <img
                  className="w-[250px] sm:w-[500px] h-[250px] md:h-[600px] object-contain !rounded-xl"
                  src={window.location.origin + "/img/advantage/6.jpg"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advantage;
