import React, { useEffect, useState } from "react";
import { CategorySearchBean } from "../../model/CategorySearchResponseDto";
import { CategorySearchRequestDto } from "../../model/CategorySearchRequestDto";
import { categorySearch } from "../../service/shopApiClient";
import { RESPONSE_SUCCESS } from "../../app/appConst";
import ErrorManager from "../../utility/ErrorManager";

const Event = () => {
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
  return <div>Event</div>;
};

export default Event;
