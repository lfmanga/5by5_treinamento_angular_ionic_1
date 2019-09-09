import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {

  @Input() courses : Course [] = []

  constructor() { }

  ngOnInit() {}

}
