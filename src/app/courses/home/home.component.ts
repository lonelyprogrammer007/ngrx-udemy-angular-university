import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCourses } from '../course.actions';
import {
  selectAdvancedCourses,
  selectBeginnerCourses,
  selectAllCoursesLoaded,
  selectPromoTotal,
} from '../courses.selectors';
import { EditCourseDialogComponent } from '../edit-course-dialog/edit-course-dialog.component';
import { Course } from '../model/course';
import { defaultDialogConfig } from '../shared/default-dialog-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  promoTotal$: Observable<number>;

  allCoursesLoaded$: Observable<boolean>;

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(private dialog: MatDialog, private store: Store) {}

  ngOnInit() {
    this.configStateConnection();
  }

  configStateConnection() {
    this.beginnerCourses$ = this.store.select(selectBeginnerCourses);
    this.advancedCourses$ = this.store.select(selectAdvancedCourses);
    this.promoTotal$ = this.store.select(selectPromoTotal);
    this.allCoursesLoaded$ = this.store.select(selectAllCoursesLoaded);
  }

  onAddCourse() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Create Course',
      mode: 'create',
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);
  }
}
