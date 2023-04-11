import { EntityState } from '@ngrx/entity';
import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CourseActions } from './action.types';
import { compareCourses, Course } from './model/course';

export const coursesFeatureKey = 'courses';

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
  // selectId: (course) => course.description, HACK: this is used when an entity have a different name for the default id name which is 'id'
});

export const initialState = adapter.getInitialState({
  allCoursesLoaded: false,
});

export const reducer = createReducer(
  initialState,
  on(CourseActions.loadCoursesSuccess, (state, action) =>
    adapter.addMany(action.data, { ...state, allCoursesLoaded: true })
  )
);

export const coursesSelector = adapter.getSelectors();
