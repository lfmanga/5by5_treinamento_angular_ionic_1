import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  public courses : Course[];
  public listmode : boolean = true;

  constructor(
    private service : DataService
  ) { }

  ngOnInit() {
    this.service.getCourses()
      .subscribe(
        (res: any) => {
          console.log(res);
          this.courses = res;
        }
      );
  }

  toogleListMode() {
    this.listmode = !this.listmode;
  }
}
