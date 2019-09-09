import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoursesPage } from './courses.page';
import { CourseCardComponent } from 'src/app/components/course-card/course-card.component';
import { CourseListComponent } from 'src/app/components/course-list/course-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CoursesPage,
    CourseCardComponent,
    CourseListComponent
  ]
})
export class CoursesPageModule {}
