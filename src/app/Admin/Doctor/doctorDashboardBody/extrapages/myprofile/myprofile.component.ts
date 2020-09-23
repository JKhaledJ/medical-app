import { Router } from '@angular/router';
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
  id:number=2;

  constructor(private doctorDashboardService:DoctorDashboardService,
              private router: Router) { }

  ngOnInit(): void {
    this.doctorDashboardService.getDoctorByID(this.id).subscribe(
      (data:any)=>{
        this.myProfileData=data.body;
      }
    )
  }

  onEdit(id: number){
    this.router.navigate(['/edit',id]);
  }
}
