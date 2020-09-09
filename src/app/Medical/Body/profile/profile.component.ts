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
DoctorHeaderDetails={
  photo:'',
  Name:'',
  lastName:'',
  About:'',
  SocialMedia:[]=[]

}
DoctorDeatils={
  Professional_Stateme:'',
  Practicing_From:'',
  Hospital_Affiliation:[]=[],
  Qualifications:[]=[]
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
        this.DoctorHeaderDetails.photo=this.DoctorData.Photo;
        this.DoctorHeaderDetails.Name=this.DoctorData.First_Name;
        this.DoctorHeaderDetails.lastName=this.DoctorData.Last_Name;
        this.DoctorHeaderDetails.About=this.DoctorData.About;
        this.DoctorDeatils.Professional_Stateme=this.DoctorData.Professional_Stateme;
        this.DoctorDeatils.Practicing_From=this.DoctorData.Practicing_From;
        this.DoctorHeaderDetails.SocialMedia=this.DoctorData.Social_Media;
        this.DoctorDeatils.Hospital_Affiliation=this.DoctorData.Hospital_Affiliation;
        this.DoctorDeatils.Qualifications=this.DoctorData.Qualifications;
      }
    )
  }

}
