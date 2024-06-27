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

const Entertaiment = () => {
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
                  src={window.location.origin + "/img/happyland/IMG_2109.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/IMG_2110.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/IMG_2111.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/IMG_2112.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/IMG_2113.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/IMG_2114.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/IMG_2115.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/IMG_2116.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/IMG_2117.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/IMG_2118.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/IMG_2119.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/IMG_2120.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/IMG_2121.jpeg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/1.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/8.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/6.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/7.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/5.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/2.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/3.jpg"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  src={window.location.origin + "/img/happyland/4.jpg"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="md:w-[48%] w-full bg-[#3B3B3C] p-12">
            <div className="border-[1px] border-[#73653A] w-full h-full p-8">
              <h2 className="text-white uppercase text-left sm:mt-12 mb-8 font-poppins">
                Happy land
              </h2>
              <p className="text-white w-full sm:w-[70%] text-lg">
                HAPPY LAND тоглоомын төв нь нийт 200 хүүхэд хүлээн авах чадалтай
                тоглоомын төв бөгөөд манай тоглоомын төвд 1-10 настай хүүхдүүд
                тоглох боломжтой.
                <br />
                Аюулгүй, тухтай орчинд та бүхэн хүүхдээ тоглуулаарай.
              </p>
              <br />
              <br />
              <p className="text-white">
                <b>Өдөр бүр</b>
              </p>
              <p className="text-white text-lg uppercase">
                Ажиллах цагийн хуваарь: Өдөр бүр 11.00 - 20.00
              </p>
              <p className="text-white">
                <b className="mr-2">ФБ холбоос:</b>{" "}
                <a target="_blank" href="https://www.facebook.com/FoodCityMall">
                  <i className="fa fa-facebook text-white before:text-2xl"></i>
                </a>
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
                WELCOME TO THE HAPPY LAND Playground
              </p>
              {/* <h3 className="font-fontFamily text-center  text-lg text-[#3B3B3C]">
                Манай тоглоомын төвд 1-10 настай хүүхдүүд тоглох боломжтой.{" "}
                <br />
                шинээр том, жижиг лего тоглоом, бага насны хүүхдүүдэд зориулсан
                элс, бөмбөлөгнүүд шинээр нэмэгдэж ирсэн байгаа.
              </h3> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="border-[1px] border-black">
                {/* <img
                  src={
                    window.location.origin + "/img/happyland/children_day.jpg"
                  }
                  alt=""
                  className="h-auto md:min-h-[300px]"
                /> */}
                <Swiper
                  className="h-[300px]"
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
                      className="w-full h-[300px] object-cover"
                      src={window.location.origin + "/img/happyland/1.jpg"}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full h-[300px] object-cover"
                      src={window.location.origin + "/img/happyland/8.jpg"}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full h-[300px] object-cover"
                      src={window.location.origin + "/img/happyland/6.jpg"}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full h-[300px] object-cover"
                      src={window.location.origin + "/img/happyland/7.jpg"}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full h-[300px] object-cover"
                      src={window.location.origin + "/img/happyland/5.jpg"}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full h-[300px] object-cover"
                      src={window.location.origin + "/img/happyland/2.jpg"}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full h-[300px] object-cover"
                      src={window.location.origin + "/img/happyland/3.jpg"}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      className="w-full h-[300px] object-cover"
                      src={window.location.origin + "/img/happyland/4.jpg"}
                    />
                  </SwiperSlide>
                </Swiper>
                <div className="p-6 border-t-[1px] !border-t-black">
                  {/* <button className="bg-[#3B3B3C] text-white p-2 text-xs uppercase font-fontFamily font-semibold">
                    children
                  </button> */}
                  <p className="text-[#3B3B3C] pt-4 font-semibold text-lg">
                    Олон улсын хүүхдийн эрхийг хамгаалах өдрийг тохиолдуулан
                    элбэрэлт ээжүүд , энхрий бяцхан үрсдээ эх үрсийн баярын мэнд
                    хүргэе🎉🎉🎉 <br />
                    <br />
                    👼Хүүхэд бүр инээд хөөртэй, аз жаргалаар дүүрэн байх
                    болтугай.
                  </p>
                  {/* <p className=" text-[#73653A] font-semibold font-serif text-lg">
                    May 27-June 2, 2024
                  </p> */}
                </div>
              </div>
              <div className="border-[1px] border-black">
                <img
                  src={window.location.origin + "/img/happyland2.jpg"}
                  alt=""
                  className="h-auto md:min-h-[300px]"
                />
                <div className="p-6 border-t-[1px] !border-t-black">
                  <button className="bg-[#3B3B3C] text-white p-2 text-xs uppercase font-fontFamily font-semibold">
                    children
                  </button>
                  <p className="text-[#3B3B3C] pt-4 font-semibold text-lg">
                    Жил бүрийн 5 дугаар сарын 15-ны өдрийг “Олон улсын гэр
                    бүлийн өдөр” болгон тэмдэглэх шийдвэрийг НҮБ-ын Ерөнхий
                    ассамблей гаргаснаас хойш 31 жил болж байна.
                  </p>
                  {/* <p className=" text-[#73653A] font-semibold font-serif text-lg">
                    May 27-June 2, 2024
                  </p> */}
                </div>
              </div>
              <div className="border-[1px] border-black">
                <img
                  src={window.location.origin + "/img/happyland/7.jpg"}
                  alt=""
                  className="h-auto md:min-h-[300px]"
                />
                <div className="p-6 border-t-[1px] !border-t-black">
                  <button className="bg-[#3B3B3C] text-white p-2 text-xs uppercase font-fontFamily font-semibold">
                    children
                  </button>
                  <p className="text-[#3B3B3C] pt-4 font-semibold text-lg">
                    Манай төвд шинээр том, жижиг лего тоглоом, бага насны
                    хүүхдүүдэд зориулсан элс, бөмбөлөгнүүд шинээр нэмэгдэж ирсэн
                    байгаа
                  </p>
                  {/* <p className=" text-[#73653A] font-semibold font-serif text-lg">
                    May 27-June 2, 2024
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Entertaiment;
