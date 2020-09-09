import { DepartmentService } from './../../../department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-about-doctor',
  templateUrl: './all-about-doctor.component.html',
  styleUrls: ['./all-about-doctor.component.css']
})
export class AllAboutDoctorComponent implements OnInit {

  constructor(private departmentService: DepartmentService) { }
allAboutData:any;
  ngOnInit(): void {
this.departmentService.aboutData.subscribe(
  (data:any)=>{
    this.allAboutData=data;
  }
)

  }

}
