import { DoctorDashboardService } from './../../../DoctorDashboardService.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editmyprofile',
  templateUrl: './editmyprofile.component.html',
  styleUrls: ['./editmyprofile.component.css']
})
export class EditmyprofileComponent implements OnInit {
  myProfileData:any;
  id:number;

  myProfileForm:FormGroup;

  constructor(private doctorDashboardService:DoctorDashboardService,
               private route: ActivatedRoute,
               private fb: FormBuilder) { }

  ngOnInit(): void {   
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
     }
   );

   this.doctorDashboardService.getDoctorByID(this.id).subscribe(
    (data:any)=>{
      this.myProfileData=data.body;
    }
  );
  this.CreateForm();
  }

  CreateForm(){
    this.myProfileForm = this.fb.group({
      FirstName:['',Validators.required],
      LastName: ['',Validators.required],
      ProfessionalStateme:[''],
      Phone: ['', Validators.required],
      Email: ['', Validators.required],
      Address: [''],
      About:['', Validators.required]
    })
  }
}
