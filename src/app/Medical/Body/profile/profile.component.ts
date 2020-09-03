import { DepartmentService } from './../department.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
id:number;
DoctorData:any;
DoctorHeaderData={
  photo:'',
  Name:''
}
  constructor(private departmentService:DepartmentService,
    private route: ActivatedRoute) {
     }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
       this.id = +params.id;
      }
    );

    this.getDoctorDetails(this.id);

  }

  getDoctorDetails(id:number){
    this.departmentService.getDoctorByID(this.id).subscribe(
      (data:any)=>{
        this.DoctorData=data.body;
        this.DoctorHeaderData.photo=this.DoctorData.Photo;
        this.DoctorHeaderData.Name=this.DoctorData.First_Name;
      }
    )
  }

}
