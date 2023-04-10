import { createReducer, on } from '@ngrx/store';
import * as CoursesActions from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

