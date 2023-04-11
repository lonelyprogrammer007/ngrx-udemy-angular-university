import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  coursesFeatureKey,
  coursesSelector,
  CoursesState,
} from './courses.reducer';

export const selectCoursesState =
  createFeatureSelector<CoursesState>(coursesFeatureKey);

export const selectAllCourses = createSelector(
  selectCoursesState,
  coursesSelector.selectAll
);

export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.category === 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.category === 'ADVANCED')
);

export const selectPromoTotal = createSelector(
  selectAllCourses,
  (courses) => courses.filter((course) => course.promo).length
);

export const selectAllCoursesLoaded = createSelector(
  selectCoursesState,
  (state) => state.allCoursesLoaded
);
