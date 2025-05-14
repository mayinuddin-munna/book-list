import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { StudentServices } from './dua.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentServices.getAllCategoriesIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All categories is retrieved successfully',
    data: result,
  });
});

const getAllSubCategories = catchAsync(async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const result = await StudentServices.getAllSubCategoriesFromDB(categoryId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sub categories is retrieved successfully',
    data: result,
  });
});

const getAllDuas = catchAsync(async (req: Request, res: Response) => {
  const { subCategoryId } = req.params;

  const result = await StudentServices.getAllDuaFromDB(subCategoryId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Dua is retrieved successfully',
    data: result,
  });
});

export const DuaControllers = {
  getAllCategories,
  getAllSubCategories,
  getAllDuas,
};
