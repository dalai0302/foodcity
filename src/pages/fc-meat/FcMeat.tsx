import React from "react";
import { useTranslation } from "react-i18next";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FcMeat = () => {
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
                  className="w-full h-[300px] md:h-[600px] object-contain"
                  src={window.location.origin + "/img/bg_meat.jpg"}
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
                Хүнсний эрүүл ахуй, аюулгүй байдлын стандартыг бүрэн хангасан
                орчинд гарал үүсэл нь баталгаажсан, үйлдвэрийн аргаар бэлтгэсэн,
                хэрэглэгчийн хэрэгцээ шаардлагад нийцсэн бүх төрлийн мах, махан
                бүтээгдэхүүнийг зах зээлийн бодит үнээр борлуулах боломжийг
                малчид, үйлдвэрлэгч, импортлогч иргэн, аж ахуйн нэгжид олгож
                байна.
                <br />
                <ul className="">
                  “Фүүд сити” төвийн махны төрөлжсөг тасаг нь дараахь стандартыг
                  хангасан.
                  <br />
                  1. Мах хүлээн авч сэврээх, ангилах, савлах өрөөтэй.
                  <br />
                  2. Махыг гүн хөлдөөх, хадгалах хүйтэн агуулах зоорьтой. /300
                  тн мах /
                  <br />
                  3. Мах, махан бүтээгдэхүүнд шинжилгээ хийх хүнсний
                  итгэмжлэгдсэн лабораторитай.
                  <br />
                  4. Худалдааны талбай бүрийг халуун, хүйтэн цэвэр ус, бохир ус,
                  тос барих системд холбосон.
                  <br />
                  5. Худалдааны талбай, хүйтэн агуулахад нян бактер устгах ион
                  гэрэл суурилуулсан.
                  <br />
                  6. Барилгын үндсэн агаар сэлгэлт, хөргөлт, камержуулалт,
                  холбоо дохиолол, галын систем нь хүнсний худалдааны төвийн
                  стандартад нийцсэн.
                  <br />
                  7. Төвийн хэмжээнд ачааны лифт, дулаан зогсоол, гадна
                  зогсоолыг төлөвлөсөн.
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
      </section>
    </>
  );
};

export default FcMeat;
