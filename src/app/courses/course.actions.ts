import { createAction, props } from '@ngrx/store';
import { Course } from './model/course';
import { Update } from '@ngrx/entity';

export const loadCourses = createAction('[Courses Resolver] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Load Courses Effect] Load Courses Success',
  props<{ data: Course[] }>()
);

export const courseUpdated = createAction(
  '[Edit Course Modal] Course Updated',
  props<{ update: Update<Course> }>()
);

// export const loadCoursesFailure = createAction(
//   '[Course] Load Courses Failure',
//   props<{ error: any }>()
// );
