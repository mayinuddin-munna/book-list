export interface Category {
  id: number;
  cat_name: string;
}

export interface SubCategory {
  id: number;
  subcat_name: string;
  cat_id: number;
}

export interface Dua {
  id: number;
  dua_name: string;
  subcat_id: number;
}
