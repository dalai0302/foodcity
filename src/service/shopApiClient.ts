import axios from "axios";
import {
  URL_BACKEND_BRAND_SEARCH,
  URL_BACKEND_CATEGORY_SEARCH,
  URL_BACKEND_CATEGORY_TOP,
} from "../app/appConst";
import { ApiUtility } from "../utility/ApiUtility";
import BadResponseError from "../error/BadResponseError";
import { CategoryTopListResponseDto } from "../model/CategoryTopListResponseDto";
import { CategorySearchRequestDto } from "../model/CategorySearchRequestDto";
import { CategorySearchResponseDto } from "../model/CategorySearchResponseDto";
import { BrandSearchRequestDto } from "../model/BrandSearchRequestDto";
import { BrandSearchResponseDto } from "../model/BrandSearchResponseDto";

export const getCategoryList = async () => {
  const config = {
    headers: ApiUtility.getRestHeader(),
  };
  const url = `${URL_BACKEND_CATEGORY_TOP}`;

  const response = await axios.get<CategoryTopListResponseDto>(url, config);
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new BadResponseError(response.status);
};

export const categorySearch = async (request: CategorySearchRequestDto) => {
  const url = `${URL_BACKEND_CATEGORY_SEARCH}`;
  const response = await axios.post<CategorySearchResponseDto>(url, request);
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new BadResponseError(response.status);
};

export const brandSearch = async (request: BrandSearchRequestDto) => {
  const url = `${URL_BACKEND_BRAND_SEARCH}`;
  const response = await axios.post<BrandSearchResponseDto>(url, request);
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new BadResponseError(response.status);
};
