import express from 'express';
import { StudentControllers } from './dua.controller';

const router = express.Router();

router.post(
  '/create-student',
  /* validateRequest(createStudentValidationSchema), */
  StudentControllers.createStudent,
);

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSingleStudent);

export const DuaRoutes = router;
