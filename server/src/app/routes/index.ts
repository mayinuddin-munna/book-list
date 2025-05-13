import { Router } from 'express';
import { DuaRoutes } from '../modules/dua/dua.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/dua',
    route: DuaRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
