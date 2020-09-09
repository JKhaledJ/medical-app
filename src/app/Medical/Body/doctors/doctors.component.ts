import { Doctor } from './../Models/doctor.model';
import { Router } from '@angular/router';
import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor(private departmentService:DepartmentService, private router: Router) { }
  AllDoctors:Doctor[];
  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors(){
   this.departmentService.Doctors.subscribe(
     (data:Doctor[])=>{
     this.AllDoctors=data;
     }
   );
  }
  GotoProfile(id:number){
    this.router.navigate(['/Doctor',id]);
  }
}
