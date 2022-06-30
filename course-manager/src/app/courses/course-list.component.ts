import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component ({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
      this.courses = [
        {
          id: 1,
          name: 'angular: forms',
          imageUrl: '/assets/images/forms.png',
          price: 10,
          code: 'XPS-8796',
          duration: 120,
          rating: 4.5,
          releaseDate: 'December, 2, 2019'
        },
        {
          id: 2,
          name: 'angular: HTTP',
          imageUrl: '/assets/images/http.png',
          price: 45.99,
          code: 'LKL-5421',
          duration: 80,
          rating: 4,
          releaseDate: 'December, 8, 2019'
        }
      ]
    }
}
