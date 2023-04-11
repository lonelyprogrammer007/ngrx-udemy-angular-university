import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { loadCourses } from './course.actions';
import { selectAllCoursesLoaded } from './courses.selectors';

export const courseResolver: ResolveFn<void> = () => {
  const store = inject(Store);

  store
    .select(selectAllCoursesLoaded)
    .pipe(first())
    .subscribe((allCoursesLoaded) => {
      if (!allCoursesLoaded) store.dispatch(loadCourses());
    });
};
