import { Doctor } from './../../../../../Medical/Body/Models/doctor.model';
import { DoctorDashboardService } from './../../../DoctorDashboardService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  myProfileData:any;
  constructor(private doctorDashboardService:DoctorDashboardService) { }

  ngOnInit(): void {
    this.doctorDashboardService.getDoctorByID(1).subscribe(
      (data:any)=>{
        this.myProfileData=data.body;
       console.log("from myprofile "+JSON.stringify(data.body));
      }
    )
  }

}
