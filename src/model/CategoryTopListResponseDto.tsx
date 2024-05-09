export interface CategoryTopListResponseDto {
  status: number;
  msg: string;
  data: CategoryTopData[];
}

export interface CategoryTopData {
  id: number;
  createdDate: string;
  createdDateStr: Date;
  parentId: null;
  name: string;
  photoLg: null;
  photoMd: null;
  photoSm: null;
  order: null;
  featured: null;
  level: null;
  description: null;
  icon: null;
  subCategories: null;
  brands: null;
}
