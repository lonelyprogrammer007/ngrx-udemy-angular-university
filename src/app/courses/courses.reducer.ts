import { EntityState } from '@ngrx/entity';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CourseActions } from './action.types';
import { Course } from './model/course';

export const coursesFeatureKey = 'courses';

export type CoursesState = EntityState<Course>;

export const adapter = createEntityAdapter<Course>();

export const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(CourseActions.loadCoursesSuccess, (state, action) =>
    adapter.addMany(action.data, state)
  )
);
