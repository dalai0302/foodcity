export interface BrandSearchResponseDto {
    status: number;
    msg:    string;
    data:   BrandData;
}

export interface BrandData {
    name:        string;
    categoryId:  null;
    offSet:      number;
    totalPage:   number;
    currentPage: number;
    beans:       BrandBean[];
}

export interface BrandBean {
    id:             number;
    createdDate:    null;
    createdDateStr: null;
    name:           string;
    logoLg:         string;
    logoMd:         string;
    logoSm:         string;
    order:          null;
    featured:       null;
    url:            null;
    level:          string |null;
    icon:           null;
    categoryId:     null;
    categoryName:   null;
}
