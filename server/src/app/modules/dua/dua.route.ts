import express from 'express';
import { DuaControllers } from './dua.controller';

const router = express.Router();

router.get('/categories', DuaControllers.getAllCategories);
router.get('/categories/:categoryId', DuaControllers.getAllSubCategories);
router.get('/duas/:categoryId', DuaControllers.getAllDuas);

export const DuaRoutes = router;
