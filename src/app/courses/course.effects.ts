import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { CourseActions } from './action.types';
import { CoursesHttpService } from './services/courses-http.service';

@Injectable()
export class CourseEffects {
  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      concatMap(() => this.coursesHttpService.findAllCourses()),
      map((courses) => CourseActions.loadCoursesSuccess({ data: courses }))
    );
  });

  constructor(
    private actions$: Actions,
    private coursesHttpService: CoursesHttpService
  ) {}
}
