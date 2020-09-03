import { Doctor } from './../Models/doctor.model';
import { Specialization } from './../Models/specialization.model';
import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
import { Department } from '../Models/department.model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private departmentService:DepartmentService) { }

  Departments:Department[]=[];
  Specializations:Specialization[]=[];
  ngOnInit(): void {
   this.departmentService.getDepartmentByDoctorID(1).subscribe(
     (response:any)=>{
       this.Departments.push(response.body);
     }
   )

   this.departmentService.getAllSpecializations().subscribe(
     (response:any)=>{
       this.Specializations.push(response.body);
     }
   )
   
   //for default value of doctors:
   this.getAllDoctorsBySpecialization(1);
  }

  getAllDoctorsBySpecialization(id:number){
    this.departmentService.getAllDoctorsBySpecializationID(id).subscribe(
      (response:any)=>{
        this.departmentService.Doctors.next(response.body);
        //console.log("from dep: "+JSON.stringify(response.body));
      }
    )
  }

}
