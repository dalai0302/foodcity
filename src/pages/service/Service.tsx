import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CategorySearchBean } from "../../model/CategorySearchResponseDto";
import { CategorySearchRequestDto } from "../../model/CategorySearchRequestDto";
import { categorySearch } from "../../service/shopApiClient";
import {
  RESPONSE_SUCCESS,
  URL_BACKEND_CATEGORY_FILE,
} from "../../app/appConst";
import ErrorManager from "../../utility/ErrorManager";
import { Link } from "react-router-dom";

const Service = () => {
  const { t } = useTranslation("global");
  const nameArr = [
    {
      name: "Богд авто молл ",
      link: "https://www.facebook.com/Bogd.Automall",
    },
    {
      name: "OD VIP засвар",
      link: "https://www.facebook.com/profile.php?id=100069660217112",
    },
    {
      name: "Laundry zone",
      link: "https://www.facebook.com/laundryzone.mongolia",
    },
    {
      name: "Relax",
      link: "https://www.facebook.com/RelaxJuices",
    },
    {
      name: "Банк",
      link: "https://www.facebook.com/FoodCityMall",
    },
    {
      name: "Дугуй засвар",
      link: "https://www.facebook.com/FoodCityMall",
    },
    {
      name: "Машин тос тосолгоо",
      link: "https://www.facebook.com/FoodCityMall",
    },
  ];
  const [subItems, setSubItems] = useState<CategorySearchBean[]>([]);

  useEffect(() => {
    categorySearchList({
      id: 22,
      offSet: 100,
      name: "",
      currentPage: 0,
    });
  }, []);

  async function categorySearchList(req: CategorySearchRequestDto) {
    try {
      const response = await categorySearch(req);
      if (response.status === RESPONSE_SUCCESS) {
        const sortFunction = (a: CategorySearchBean, b: CategorySearchBean) => {
          const levelMap: { [key: string]: number } = {
            "": 1, // Treat "" as highest level
            "1F": 2,
            "2F": 3,
            "3F": 4,
            "4F": 5,
          };
          const levelA = levelMap[a.level!];
          const levelB = levelMap[b.level!];
          return levelA - levelB;
        };

        const sorted =
          response.data.beans[0]?.subCategories!.sort(sortFunction);
        setSubItems(sorted);
      }
    } catch (error) {
      ErrorManager.handleRequestError(error);
    }
  }

  return (
    <>
      <section className="!p-0 box-border relative">
        <img
          className="w-full max-h-[500px] bg-blend-darken block object-cover"
          src={window.location.origin + "/img/service.jpg"}
          alt=""
        />
        <div className="overlay1 text-center text-white text-3xl"></div>
      </section>
      <section className="pt-8">
        <div className=" h-20 flex mb-8 justify-center items-center">
          <h2 className="text-center text-black font-semibold">
            {t("menu.service")}
          </h2>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lightbox-gallery items-center justify-items-center">
            {subItems.map((item, idx) => {
              return (
                <div className=" w-full p-0 sm:w-full max-w-full h-full wow fadeIn cursor-pointer relative group bg-white border-[1px] border-[rgb(0 0 0 / 10%)]">
                  {item.description !== null ? (
                    <Link to={`/service/${item.id}`}>
                      <img
                        src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                        alt=""
                        className="project-img-gallery h-[200px] object-contain"
                      />
                    </Link>
                  ) : (
                    <a
                      href={`${
                        nameArr.find((el) => el?.name == item?.name)?.link
                      }`}
                      target="_blank"
                    >
                      <img
                        src={`${URL_BACKEND_CATEGORY_FILE}/${item.logoMd}`}
                        alt=""
                        className="project-img-gallery h-[200px] object-contain"
                      />
                    </a>
                  )}
                  <div className="bg-stone-300 flex items-center justify-center w-full h-[60px] text-center px-4 py-2 border-[1px] border-stone-300 text-base font-medium text-black">
                    {item.level} - {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
