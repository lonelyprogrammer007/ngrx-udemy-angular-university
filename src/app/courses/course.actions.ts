import { createAction, props } from '@ngrx/store';
import { Course } from './model/course';

export const loadCourses = createAction('[Courses Resolver] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Load Courses Effect] Load Courses Success',
  props<{ data: Course[] }>()
);

// export const loadCoursesFailure = createAction(
//   '[Course] Load Courses Failure',
//   props<{ error: any }>()
// );
