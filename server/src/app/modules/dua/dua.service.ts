// import { getDBConnection } from '../../db';
import { getDBConnection } from '../../db';
import { Category, Dua, SubCategory } from './dua.interface';

const getAllCategoriesIntoDB = async (): Promise<Category[]> => {
  const result = await getDBConnection();
  return result.all('SELECT * FROM category');
};

const getAllSubCategoriesFromDB = async (
  categoryId: string,
): Promise<SubCategory[]> => {
  const result = await getDBConnection();
  return result.all('SELECT * FROM sub_category WHERE cat_id = ?', [
    categoryId,
  ]);
};

const getAllDuaFromDB = async (subCategoryId: string): Promise<Dua[]> => {
  const result = await getDBConnection();
  return result.all('SELECT * FROM dua WHERE subcat_id = ?', [subCategoryId]);
};

export const StudentServices = {
  getAllCategoriesIntoDB,
  getAllSubCategoriesFromDB,
  getAllDuaFromDB,
};
