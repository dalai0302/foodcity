export interface CategorySearchResponseDto {
  status: number;
  msg: string;
  data: CategorySearchData;
}

export interface CategorySearchData {
  id: number;
  name: string;
  offSet: number;
  totalPage: number;
  currentPage: number;
  beans: CategorySearchBean[];
}

export interface CategorySearchBean {
  id: number;
  createdDate: string;
  createdDateStr: Date;
  parentId: number | null;
  name: string;
  logoLg: null;
  logoMd: null;
  logoSm: null;
  order: null;
  featured: null;
  level: string;
  description: null;
  icon: null;
  subCategories: CategorySearchBean[] | null;
  brands: any[] | null;
  fullName: null | string;
}
