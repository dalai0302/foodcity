import React from "react";
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

const ServiceDetail = () => {
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
                  src={window.location.origin + "/img/meat/1.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/meat/2.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/meat/3.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/meat/4.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/meat/5.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/meat/6.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/meat/7.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/meat/01.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/meat/02.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/meat/03.jpg"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="md:w-[48%] w-full md:h-[600px] bg-[#3B3B3C] p-12">
            <div className="border-[1px] border-[#73653A] w-full h-full p-8">
              <h2 className="text-white uppercase text-left sm:mt-4 mb-8 font-poppins">
                “Фүүд сити” төвийн махны худалдааны талбай
              </h2>
              <p className="text-white font-semibold text-base">
                1. Мах хүлээн авч сэврээх, ангилах, савлах өрөөтэй. <br />
                <br />
                2. Махыг гүн хөлдөөх, хадгалах хүйтэн агуулах зоорьтой. /300 тн
                мах / <br />
                <br />
                3. Мах, махан бүтээгдэхүүнд шинжилгээ хийх хүнсний итгэмжлэгдсэн
                лабораторитай. <br />
                <br />
                4. Худалдааны талбай бүрийг халуун, хүйтэн цэвэр ус, бохир ус,
                тос барих системд холбосон. <br />
                <br />
                5. Худалдааны талбай, хүйтэн агуулахад нян бактер устгах ион
                гэрэл суурилуулсан. <br />
                <br />
                6. Барилгын үндсэн агаар сэлгэлт, хөргөлт, камержуулалт, холбоо
                дохиолол, галын систем нь хүнсний худалдааны төвийн стандартад
                нийцсэн. <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
