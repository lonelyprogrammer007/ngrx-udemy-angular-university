import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCourses } from './course.actions';

export const courseResolver: ResolveFn<void> = (route, state) => {
  const store = inject(Store);
  console.warn('courseResolver()');
  store.dispatch(loadCourses());
};
