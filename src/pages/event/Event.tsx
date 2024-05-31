import React, { useEffect, useState } from "react";
import { CategorySearchBean } from "../../model/CategorySearchResponseDto";
import { CategorySearchRequestDto } from "../../model/CategorySearchRequestDto";
import { categorySearch } from "../../service/shopApiClient";
import { RESPONSE_SUCCESS } from "../../app/appConst";
import ErrorManager from "../../utility/ErrorManager";
import { useTranslation } from "react-i18next";

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
      <section className="!p-0 box-border relative">
        <img
          className="w-full max-h-[500px] bg-blend-darken block object-cover"
          src={window.location.origin + "/img/event-bg.png"}
          alt=""
        />
        <div className="overlay1 text-center text-white text-3xl"></div>
      </section>
      <section>
        <div className=" h-20 flex justify-center items-center">
          <h2 className="text-center text-black font-semibold">
            {t("menu.event")}
          </h2>
        </div>
      </section>
    </>
  );
};

export default Event;
